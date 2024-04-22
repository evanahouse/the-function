import { ConfigContext, ExpoConfig } from "expo/config";
import PACKAGE_JSON from "./package.json";

export default ({ config }: ConfigContext): ExpoConfig => {
  const APP_VERSION = PACKAGE_JSON.version;
  const {
    DISPLAY_NAME,
    PROD_EAS_PROJECT_ID,
    QA_EAS_PROJECT_ID,
    EAS_APP_NAME,
    ORGANIZATION_NAME,
  } = PACKAGE_JSON.config;
  // PROD =============================
  const PROD_NAME = DISPLAY_NAME;
  const PROD_SLUG = `${EAS_APP_NAME}expoproduction`;
  const PROD_BUNDLE_ID = `com.evanhouse.${EAS_APP_NAME}`;
  const PROD_ANDROID_GOOGLE_SERVICE_FILE = "./production-google-services.json";
  const PROD_IOS_GOOGLE_SERVICE_FILE = "./Production-GoogleService-Info.plist";
  // QA =============================
  const QA_NAME = `${DISPLAY_NAME} QA`;
  const QA_SLUG = `${EAS_APP_NAME}expoqa`;
  const QA_BUNDLE_ID = `${PROD_BUNDLE_ID}.qa`;
  const QA_ANDROID_GOOGLE_SERVICE_FILE = "./google-services.json";
  const QA_IOS_GOOGLE_SERVICE_FILE = "./GoogleService-Info.plist";
  // FINAL =============================
  const isProd = process.env.BUILD_VARIANT === "production";
  const NAME = isProd ? PROD_NAME : QA_NAME;
  const SLUG = isProd ? PROD_SLUG : QA_SLUG;
  const BUNDLE_ID = isProd ? PROD_BUNDLE_ID : QA_BUNDLE_ID;
  const ANDROID_GOOGLE_SERVICE_FILE = isProd
    ? PROD_ANDROID_GOOGLE_SERVICE_FILE
    : QA_ANDROID_GOOGLE_SERVICE_FILE;
  const IOS_GOOGLE_SERVICE_FILE = isProd
    ? PROD_IOS_GOOGLE_SERVICE_FILE
    : QA_IOS_GOOGLE_SERVICE_FILE;
  const EAS_PROJECT_ID = isProd ? PROD_EAS_PROJECT_ID : QA_EAS_PROJECT_ID;
  // same for both? it made making the firebase config easier
  const SCHEME = EAS_APP_NAME;
  const EXPO_UPDATES_URL = `https://u.expo.dev/${EAS_PROJECT_ID}`;

  const CONFIG: ExpoConfig = {
    ...config,
    version: APP_VERSION,
    orientation: "portrait",
    icon: "./src/assets/images/icon.png",
    userInterfaceStyle: "light",
    name: NAME,
    slug: SLUG,
    owner: ORGANIZATION_NAME,
    scheme: SCHEME,
    assetBundlePatterns: ["**/*"],
    extra: {
      eas: {
        projectId: EAS_PROJECT_ID,
      },
    },
    splash: {
      image: "./src/assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      enabled: true,
      url: EXPO_UPDATES_URL,
      fallbackToCacheTimeout: 10000, //wait 10 seconds before falling back to cache
    },
    ios: {
      bundleIdentifier: BUNDLE_ID,
      googleServicesFile: IOS_GOOGLE_SERVICE_FILE,
      supportsTablet: true,
      config: {
        usesNonExemptEncryption: false,
      },
    },
    android: {
      versionCode: 1,
      package: BUNDLE_ID,
      googleServicesFile: ANDROID_GOOGLE_SERVICE_FILE,
      adaptiveIcon: {
        foregroundImage: "./src/assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./src/assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-font",
        {
          fonts: ["node_modules/@expo-google-fonts/inter/Inter_100Thin.ttf"],
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
  };
  return CONFIG;
};
