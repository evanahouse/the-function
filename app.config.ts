import { ConfigContext, ExpoConfig } from "expo/config";
import PACKAGE_JSON from "./package.json";

export default ({ config }: ConfigContext): ExpoConfig => {
  const APP_VERSION = PACKAGE_JSON.version;

  const CONFIG: ExpoConfig = {
    ...config,
    version: APP_VERSION,

    name: "the-function",
    slug: "the-function",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
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
