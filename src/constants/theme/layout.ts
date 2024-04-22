import { Dimensions, PixelRatio } from "react-native";

// seems as though this should be screen.
// https://stackoverflow.com/questions/44978804/whats-the-difference-between-window-and-screen-in-the-dimensions-api
const { height, width } = Dimensions.get("screen");

// paste your mockup sizes (ie. size of entire figma screen)
const MOCKUP_WIDTH = 375;
const MOCKUP_HEIGHT = 812;

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

/**
 * Get size with scale factor
 * will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function scaleWidth(size: number) {
  return PixelRatio.roundToNearestPixel(size * (width / MOCKUP_WIDTH));
}
/**
 * Get size with scale factor
 * will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function scaleHeight(size: number) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}

/**
 * Get font with scale factor
 *  will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function scaleFont(size: number) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}
