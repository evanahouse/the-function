import { ConfigPlugin, withPlugins } from "@expo/config-plugins";
import { withLargerJavaHeap } from "./withLargerJavaHeap";

const withMyPlugins: ConfigPlugin = (config) => {
  // for some reason had to switch the ios plugins in order for
  // them to run in the required order
  return withPlugins(config, [withLargerJavaHeap]);
};

// eslint-disable-next-line import/no-default-export
export default withMyPlugins;
