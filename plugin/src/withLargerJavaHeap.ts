import { withGradleProperties } from "@expo/config-plugins";

export const withLargerJavaHeap = (config: any) => {
  return withGradleProperties(config, async (config: any) => {
    try {
      // remove old org.gradle.jvmargs
      for (let i = 0; i < config.modResults.length; i++) {
        if (config.modResults[i].key === "org.gradle.jvmargs") {
          config.modResults.splice(i, 1);
        }
      }
      // add new
      config.modResults.push({
        type: "property",
        key: "org.gradle.jvmargs",
        value: "-Xmx4096m -XX:MaxMetaspaceSize=4096m", // Maybe you should set this to 15?
      });
    } catch (error) {
      console.info("error: ", error);
    }
    return config;
  });
};
