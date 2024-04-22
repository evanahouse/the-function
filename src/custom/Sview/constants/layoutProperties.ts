export type LayoutDimensionPropertiesType =
  | "width"
  | "height"
  | "minWidth"
  | "maxWidth"
  | "minHeight"
  | "maxHeight";

export type LayoutOtherPropertiesType =
  | "overflow"
  | "aspectRatio"
  | "alignContent"
  | "alignItems"
  | "alignSelf"
  | "justifyContent"
  | "flex"
  | "flexBasis"
  | "flexDirection"
  | "flexGrow"
  | "flexShrink"
  | "flexWrap";

const LAYOUT_DIMENSION_PROPERTIES: LayoutDimensionPropertiesType[] = [
  "width",
  "height",
  "minWidth",
  "maxWidth",
  "minHeight",
  "maxHeight",
];

const LAYOUT_OTHER_PROPERTIES: LayoutOtherPropertiesType[] = [
  "overflow",
  "aspectRatio",
  "alignContent",
  "alignItems",
  "alignSelf",
  "justifyContent",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexGrow",
  "flexShrink",
  "flexWrap",
];

export type MyLayoutProps = LayoutDimensionPropertiesType & LayoutOtherPropertiesType;

export { LAYOUT_DIMENSION_PROPERTIES, LAYOUT_OTHER_PROPERTIES };
