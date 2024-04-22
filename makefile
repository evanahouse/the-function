# todo: enable and test multithread for builds. Ie. build android and ios at the same time.
# todo: clean this file more.
# .PHONY is used to prevent make from looking for files with the same name as the commands
# and trying to run that as a script instead of these commands. 
# We always want to run the commands.
.PHONY: *

# Development scripts
start:
	bunx expo start -c

start-android:
	bunx expo start --android -c

start-ios:
	bunx expo start --ios -c

prebuild-qa:
	make prep-plugin
	make commit
	bunx expo prebuild --clean

prebuild-prod:
	make prep-plugin
	make commit
	bunx cross-env BUILD_VARIANT=production expo prebuild --clean

run-qa-android:
	make prebuild-qa
	npx expo run:android

run-qa-android-release:
	make prebuild-qa
	npx expo run:android --variant=release

run-qa-ios:
	make prebuild-qa
	npx expo run:ios

run-prod-android:
	make prebuild-prod
	npx cross-env BUILD_VARIANT=production expo run:android

run-prod-ios:
	make prebuild-prod
	npx cross-env BUILD_VARIANT=production expo run:ios

ota-qa:
	make prebuild-qa
	npx eas update --channel qarelease --auto

ota-prod:
	make prebuild-prod
	npx cross-env BUILD_VARIANT=production eas update --channel prodrelease --auto

increment-build-upload-all:
	make increment-version
	make prebuild-qa
	make eas-build-and-upload-android-qa
	make eas-build-and-upload-ios-qa
	make prebuild-prod
	make eas-build-and-upload-ios-prod
	make eas-build-and-upload-android-prod

eas-build-android-appstore:
	make increment-android-build-number
	make commit
	make install-eas
	npx cross-env BUILD_VARIANT=production eas build --profile prodrelease --platform android --local --output=androidBuild.aab

# local eas build scripts:

eas-build-and-upload-ios-prod:
	npx cross-env BUILD_VARIANT=production eas build --non-interactive -p ios --local -e prodrelease --output iosBuild.ipa
	make distribute-eas-ios-prod

eas-build-and-upload-ios-qa:
	npx eas build --non-interactive -p ios --local -e qarelease --output iosBuild.ipa
	make distribute-eas-ios-qa

eas-build-and-upload-android-prod:
	make install-eas
	npx cross-env BUILD_VARIANT=production eas build --local --non-interactive --profile prodtesting --platform android --output=androidBuild.apk
	npm run distribute-local-android-prod

eas-build-and-upload-android-qa:
	npx eas build --non-interactive -p android -e qarelease --local --output=androidBuild.apk
	npm run distribute-local-android-qa


# THESE EAS CLOUD SCRIPTS ARE USED FOR INITIAL APP SETUP

# USED TO BUILD THE IOS QA APP INITIALLY
eas-build-ios-qa-release-manual:
	make install-eas
	npx eas build --platform ios --profile qarelease

# USED TO BUILD THE IOS PROD APP INITIALLY 
eas-build-ios-prod-manual:
	make install-eas
	npx cross-env BUILD_VARIANT=production eas build --profile prodrelease --platform ios

# DISTRIBUTE THE IOS QA APP 
distribute-eas-ios-qa:
	npx eas submit --profile=qarelease --path=iosBuild.ipa --platform=ios

# DISTRIBUTE THE IOS PROD APP
distribute-eas-ios-prod:
	npx cross-env BUILD_VARIANT=production eas submit --profile=prodrelease --path=iosBuild.ipa --platform=ios

# USED TO BUILD QA ANDROID APP INITIALLY AND CONFIGURES THE .keystore FILE
eas-build-android-qa-release-manual:
	make install-eas
	make prebuild-qa
	npx eas build --platform android --profile qarelease

# USED TO BUILD PROD ANDROID APP INITIALLY AND CONFIGURES THE .keystore FILE
eas-build-android-prod-manual:
	make install-eas
	make prebuild-prod
	npx cross-env BUILD_VARIANT=production eas build --profile prodrelease --platform android

# todo: comment on when to use each of these, as they are actually useful.
# utility scripts - there are useful times to run these,they are not assoicated with the build process.
check-updates:
	npx npm-check-updates -i --format group

output-translation-json:
	tsc ./src/constants/translations/en.ts
	ts-node ./src/scripts/exportEnToJson.js

visualize:
	npx react-native-bundle-visualizer

test:
	jest

maestro:
	wsl maestro

profile:
	npx react-devtools

#scripts used within other scripts, potentially may be needed on their own in rare cases.
install-eas:
	npm install -g eas-cli

increment-android-build-number:
	node ./src/scripts/incrementAndroidBuildNumber.js

commit:
	git add .
	git commit -m preScriptCommit --allow-empty

increment-version:
	npm version patch

prep-plugin:
	make clean-plugin
	make build-plugin

build-plugin:
	bunx tsc --build plugin

clean-plugin:
	bunx rimraf plugin/build

# CLOUD EAS BUILD SCRIPTS: PREFER LOCAL EAS BUILD SCRIPTS ABOVE.

eas-build-and-upload-ios-prod-manual:
	make install-eas
	npx cross-env BUILD_VARIANT=production eas build --platform ios --profile prodrelease --local

eas-build-and-upload-ios-prod-auto:
	make install-eas
	npx cross-env BUILD_VARIANT=production eas build --platform ios --profile prodrelease --auto-submit --non-interactive

eas-build-and-upload-ios-both-auto:
	make install-eas
	npx eas build --platform all --profile prodrelease --auto-submit --non-interactive

increment-version-and-eas-build-and-upload-all-qa:
	make increment-version
	make eas-build-and-upload-android-qa
	make eas-build-and-upload-ios-qa-auto

eas-build-ios-qa-debug-manual:
	make install-eas
	npx eas build --platform ios --profile qadebug

eas-build-android-qa-debug:
	make install-eas
	npx eas build --platform android --profile qadebug

local-build-with-eas-ios-qa-debug:
	make install-eas
	npx eas build --platform ios --profile qadebug --local

# Local build scripts to build locally without expo: 
# (not preferred, ruins OTA, try local EAS (scripts at the top first, then EAS cloud, then local build below))
# local-build-and-upload-ios-qa:
# 	make local-build-ios-qa
# 	make distribute-local-ios-qa

# local-build-and-upload-ios-prod:
# 	make local-build-ios-prod
# 	make distribute-local-ios-prod

# local-build-and-upload-ios-both:
# 	make local-build-and-upload-ios-qa
# 	make local-build-and-upload-ios-prod

# local-build-and-upload-android-assemble-qa:
# 	make prebuild:qa
# 	cd android 
# 	./gradlew clean
# 	./gradlew :app:assembleRelease
# 	cd ..
# 	make distribute-local-android-qa

# local-build-and-upload-android-assemble-prod:
# 	make prebuild:prod
# 	cd android
# 	npx cross-env BUILD_VARIANT=production ./gradlew :app:assembleRelease
# 	cd ..
# 	make distribute-local-android-prod

# local-build-and-upload-android-assemble-both:
# 	make local-build-and-upload-android-assemble-qa
# 	make local-build-and-upload-android-assemble-prod

# local-build-and-upload-all-qa:
# 	make commit
# 	make increment-version
# 	make local-build-and-upload-ios-qa
# 	make local-build-and-upload-android-assemble-qa

# local-build-and-upload-all-prod:
# 	make commit
# 	make local-build-and-upload-ios-prod
# 	make local-build-and-upload-android-assemble-prod

# local-build-and-upload-all-all:
# 	make commit
# 	make increment-version
# 	make local-build-and-upload-android-assemble-both
# 	make local-build-and-upload-ios-both

# local-build-android-bundle-prod:
# 	make prebuild-prod
# 	cd android
# 	npx cross-env BUILD_VARIANT=production ./gradlew :app:bundleRelease

# Build helper scripts
# todo: need to pass in the environment variables in order for these to work. ie. we'd need to pass in the app name.
# todo: pass in the distribution id for the firebase app distribution.
# hopefully we won't need to use them, as they are associated with local builds.
# npm_package_config_appnameqa=your_value make local-build-ios-qa

# local-build-ios-qa:
# 	make prebuild-qa && \
# 	make ios-clean && \
# 	cd ios && \
# 	xcodebuild -workspace $$npm_package_config_appnameqa.xcworkspace -scheme $$npm_package_config_appnameqa -configuration Release archive -archivePath $$PWD/build/$$npm_package_config_appnameqa

# local-build-ios-prod:
# 	make prebuild:prod && \
# 	make ios-clean && \
# 	cd ios && \
# 	npx cross-env BUILD_VARIANT=production xcodebuild -workspace $$npm_package_config_appnameprod.xcworkspace -scheme $$npm_package_config_appnameprod -configuration Release archive -archivePath $$PWD/build/$$npm_package_config_appnameprod && \

# distribute-local-ios-qa:
# 	cd ios && \
# 	xcodebuild -exportArchive -archivePath $$PWD/build/$$npm_package_config_appnameqa.xcarchive -exportOptionsPlist ../exportOptions.plist -exportPath $$PWD/build -allowProvisioningUpdates && \

# # todo: - need to pass in the app name and distribution id for the firebase app distribution.
# distribute-eas-local-android-qa:
# 	firebase appdistribution:distribute ./androidBuild.apk --app 1:446831443627:android:51c4d2da1b41ef65ab01ee --release-notes 'New build' --groups 'testers'

# distribute-local-ios-prod:
# 	cd ios
# 	xcodebuild -exportArchive -archivePath $$PWD/build/$$npm_package_config_appnameprod.xcarchive -exportOptionsPlist ../exportOptions.plist -exportPath $$PWD/build -allowProvisioningUpdates

# ios-clean:
# 	make ios-clean-helper
# 	make ios-clean-xcode

# ios-clean-helper:
# 	xattr -w com.apple.xcode.CreatedByBuildSystem true ./ios/build || true

# ios-clean-start:
# 	make ios-clean
# 	make start

# ios-clean-xcode:
# 	cd ios
# 	xcodebuild clean

