export default ({ config }: ConfigContext): ExpoConfig => {
  const CONFIG = {
    expo: {
      name: "the-function",
      slug: "the-function",
      version: "1.0.0",
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
      },
    },
  };
  return CONFIG;
};
