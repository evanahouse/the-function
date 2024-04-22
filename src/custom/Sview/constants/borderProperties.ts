export type BorderColorPropertiesType =
  | "borderBottomColor"
  | "borderColor"
  | "borderEndColor"
  | "borderLeftColor"
  | "borderRightColor"
  | "borderStartColor"
  | "borderTopColor";

export type BorderRadiusPropertiesType =
  | "borderBottomEndRadius"
  | "borderBottomLeftRadius"
  | "borderBottomRightRadius"
  | "borderBottomStartRadius"
  | "borderRadius"
  | "borderTopEndRadius"
  | "borderTopLeftRadius"
  | "borderTopRightRadius"
  | "borderTopStartRadius";

export type BorderWidthPropertiesType =
  | "borderBottomWidth"
  | "borderLeftWidth"
  | "borderRightWidth"
  | "borderStyle"
  | "borderTopWidth"
  | "borderWidth"
  | "borderEndWidth"
  | "borderStartWidth";

export type MyBorderProps = BorderColorPropertiesType &
  BorderRadiusPropertiesType &
  BorderWidthPropertiesType;

const BORDER_COLOR_PROPERTIES: BorderColorPropertiesType[] = [
  "borderBottomColor",
  "borderColor",
  "borderEndColor",
  "borderLeftColor",
  "borderRightColor",
  "borderStartColor",
  "borderTopColor",
];

const BORDER_RADIUS_PROPERTIES: BorderRadiusPropertiesType[] = [
  "borderBottomEndRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomStartRadius",
  "borderRadius",
  "borderTopEndRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopStartRadius",
];

const BORDER_WIDTH_PROPERTIES: BorderWidthPropertiesType[] = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderStyle",
  "borderTopWidth",
  "borderWidth",
  "borderEndWidth",
  "borderStartWidth",
];

export {
  BORDER_COLOR_PROPERTIES,
  BORDER_RADIUS_PROPERTIES,
  BORDER_WIDTH_PROPERTIES,
};
