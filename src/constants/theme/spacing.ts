import { scaleWidth } from "@constants/theme";

export const sizeKeys = {
  min: 0.1,
  xxtiny: 1,
  xtiny: 2,
  tiny: 4,
  xxsmall: 8,
  xsmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 28,
  huge: 40,
  xhuge: 50,
  xxhuge: 80,
  massive: 100,
  xmassive: 200,
  xxmassive: 343,
  max: 375,
  xmax: 700,
};

// leave this comment, it can help if you want to change how you name these.
// const finalObj: { [key: string]: number } = {};
// const keys = Object.keys(sizeKeys);
// const values = Object.values(sizeKeys);
// for (let i = 0; i < values.length; i++) {
//   // finalObj[`${keys[i]}Width`] = scaleWidth(values[i]);
//   // finalObj[`${keys[i]}WidthNegative`] = -1 * scaleWidth(values[i]);
//   // finalObj[`${keys[i]}Height`] = scaleHeight(values[i]);
//   // finalObj[`${keys[i]}HeightNegative`] = -1 * scaleHeight(values[i]);
//   finalObj[`${keys[i]}`] = scaleWidth(values[i]);
// }

const SPACING = {
  none: 0,
  // xxtiny
  xxtinyWidth: scaleWidth(sizeKeys.xxtiny),
  xxtinyWidthNegative: -scaleWidth(sizeKeys.xxtiny),
  xxtinyHeight: scaleWidth(sizeKeys.xxtiny),
  xxtinyHeightNegative: -scaleWidth(sizeKeys.xxtiny),
  xxtiny: scaleWidth(sizeKeys.xxtiny),

  //xtiny
  xtinyWidth: scaleWidth(sizeKeys.xtiny),
  xtinyWidthNegative: -scaleWidth(sizeKeys.xtiny),
  xtinyHeight: scaleWidth(sizeKeys.xtiny),
  xtinyHeightNegative: -scaleWidth(sizeKeys.xtiny),
  xtiny: scaleWidth(sizeKeys.xtiny),

  //tiny
  tinyWidth: scaleWidth(sizeKeys.tiny),
  tinyWidthNegative: -scaleWidth(sizeKeys.tiny),
  tinyHeight: scaleWidth(sizeKeys.tiny),
  tinyHeightNegative: -scaleWidth(sizeKeys.tiny),
  tiny: scaleWidth(sizeKeys.tiny),

  //xsmall
  xxsmallWidth: scaleWidth(sizeKeys.xxsmall),
  xxsmallWidthNegative: -scaleWidth(sizeKeys.xxsmall),
  xxsmallHeight: scaleWidth(sizeKeys.xxsmall),
  xxsmallHeightNegative: -scaleWidth(sizeKeys.xxsmall),
  xxsmall: scaleWidth(sizeKeys.xxsmall),

  //xsmall
  xsmallWidth: scaleWidth(sizeKeys.xsmall),
  xsmallWidthNegative: -scaleWidth(sizeKeys.xsmall),
  xsmallHeight: scaleWidth(sizeKeys.xsmall),
  xsmallHeightNegative: -scaleWidth(sizeKeys.xsmall),
  xsmall: scaleWidth(sizeKeys.xsmall),

  //small
  smallWidth: scaleWidth(sizeKeys.small),
  smallWidthNegative: -scaleWidth(sizeKeys.small),
  smallHeight: scaleWidth(sizeKeys.small),
  smallHeightNegative: -scaleWidth(sizeKeys.small),
  small: scaleWidth(sizeKeys.small),

  //medium
  mediumWidth: scaleWidth(sizeKeys.medium),
  mediumWidthNegative: -scaleWidth(sizeKeys.medium),
  mediumHeight: scaleWidth(sizeKeys.medium),
  mediumHeightNegative: -scaleWidth(sizeKeys.medium),
  medium: scaleWidth(sizeKeys.medium),

  //large
  largeWidth: scaleWidth(sizeKeys.large),
  largeWidthNegative: -scaleWidth(sizeKeys.large),
  largeHeight: scaleWidth(sizeKeys.large),
  largeHeightNegative: -scaleWidth(sizeKeys.large),
  large: scaleWidth(sizeKeys.large),

  //xlarge
  xlargeWidth: scaleWidth(sizeKeys.xlarge),
  xlargeWidthNegative: -scaleWidth(sizeKeys.xlarge),
  xlargeHeight: scaleWidth(sizeKeys.xlarge),
  xlargeHeightNegative: -scaleWidth(sizeKeys.xlarge),
  xlarge: scaleWidth(sizeKeys.xlarge),

  //xxlarge
  xxlargeWidth: scaleWidth(sizeKeys.xxlarge),
  xxlargeWidthNegative: -scaleWidth(sizeKeys.xxlarge),
  xxlargeHeight: scaleWidth(sizeKeys.xxlarge),
  xxlargeHeightNegative: -scaleWidth(sizeKeys.xxlarge),
  xxlarge: scaleWidth(sizeKeys.xxlarge),

  //huge
  hugeWidth: scaleWidth(sizeKeys.huge),
  hugeWidthNegative: -scaleWidth(sizeKeys.huge),
  hugeHeight: scaleWidth(sizeKeys.huge),
  hugeHeightNegative: -scaleWidth(sizeKeys.huge),
  huge: scaleWidth(sizeKeys.huge),

  // xhuge
  xhugeWidth: scaleWidth(sizeKeys.xhuge),
  xhugeWidthNegative: -scaleWidth(sizeKeys.xhuge),
  xhugeHeight: scaleWidth(sizeKeys.xhuge),
  xhugeHeightNegative: -scaleWidth(sizeKeys.xhuge),
  xhuge: scaleWidth(sizeKeys.xhuge),

  // xxxhuge: 80,
  xxhugeWidth: scaleWidth(sizeKeys.xxhuge),
  xxhugeWidthNegative: -scaleWidth(sizeKeys.xxhuge),
  xxhugeHeight: scaleWidth(sizeKeys.xxhuge),
  xxhugeHeightNegative: -scaleWidth(sizeKeys.xxhuge),
  xxhuge: scaleWidth(sizeKeys.xxhuge),
  // massive: 100,
  massiveWidth: scaleWidth(sizeKeys.massive),
  massiveWidthNegative: -scaleWidth(sizeKeys.massive),
  massiveHeight: scaleWidth(sizeKeys.massive),
  massiveHeightNegative: -scaleWidth(sizeKeys.massive),
  massive: scaleWidth(sizeKeys.massive),
  // xxmassive: 200,
  xmassiveWidth: scaleWidth(sizeKeys.xmassive),
  xmassiveWidthNegative: -scaleWidth(sizeKeys.xmassive),
  xmassiveHeight: scaleWidth(sizeKeys.xmassive),
  xmassiveHeightNegative: -scaleWidth(sizeKeys.xmassive),
  xmassive: scaleWidth(sizeKeys.xmassive),
  // xxmassive: 343,
  xxmassiveWidth: scaleWidth(sizeKeys.xxmassive),
  xxmassiveWidthNegative: -scaleWidth(sizeKeys.xxmassive),
  xxmassiveHeight: scaleWidth(sizeKeys.xxmassive),
  xxmassiveHeightNegative: -scaleWidth(sizeKeys.xxmassive),
  xxmassive: scaleWidth(sizeKeys.xxmassive),
  // max: 375,
  maxWidth: scaleWidth(sizeKeys.max),
  maxWidthNegative: -scaleWidth(sizeKeys.max),
  maxHeight: scaleWidth(sizeKeys.max),
  maxHeightNegative: -scaleWidth(sizeKeys.max),
  max: scaleWidth(sizeKeys.max),
  // xmax: 700,
  xmaxWidth: scaleWidth(sizeKeys.xmax),
  xmaxWidthNegative: -scaleWidth(sizeKeys.xmax),
  xmaxHeight: scaleWidth(sizeKeys.xmax),
  xmaxHeightNegative: -scaleWidth(sizeKeys.xmax),
  xmax: scaleWidth(sizeKeys.xmax),
};

export { SPACING };
