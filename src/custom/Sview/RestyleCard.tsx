import {
  BORDER_COLOR_PROPERTIES,
  BORDER_RADIUS_PROPERTIES,
  BORDER_WIDTH_PROPERTIES,
  BorderColorPropertiesType,
  BorderRadiusPropertiesType,
  BorderWidthPropertiesType,
  LAYOUT_DIMENSION_PROPERTIES,
  LAYOUT_OTHER_PROPERTIES,
  LayoutDimensionPropertiesType,
  LayoutOtherPropertiesType,
  MyBorderProps,
  MyLayoutProps,
} from "@/custom/Sview/constants";
import { Theme } from "@constants/theme";
import {
  BackgroundColorProps,
  OpacityProps,
  PositionProps,
  ShadowProps,
  SpacingProps,
  VisibleProps,
  backgroundColor,
  composeRestyleFunctions,
  createRestyleFunction,
  opacity,
  position,
  shadow,
  spacing,
  useRestyle,
  visible,
} from "@shopify/restyle";
import { View, ViewProps } from "react-native";

type RestyleProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  OpacityProps<Theme> &
  VisibleProps<Theme> &
  ShadowProps<Theme> &
  PositionProps<Theme> &
  MyBorderProps &
  MyLayoutProps;

const borderColor = BORDER_COLOR_PROPERTIES.map(
  (property: BorderColorPropertiesType) => {
    return createRestyleFunction({
      property: property,
      themeKey: "colors",
      styleProperty: property,
    });
  },
);

const borderRadius = BORDER_RADIUS_PROPERTIES.map(
  (property: BorderRadiusPropertiesType) => {
    return createRestyleFunction({
      property: property,
      themeKey: "spacing",
      styleProperty: property,
    });
  },
);

const borderWidth = BORDER_WIDTH_PROPERTIES.map(
  (property: BorderWidthPropertiesType) => {
    return createRestyleFunction({
      property: property,
      themeKey: "spacing",
      styleProperty: property,
    });
  },
);

const layoutDimensions = LAYOUT_DIMENSION_PROPERTIES.map(
  (property: LayoutDimensionPropertiesType) => {
    return createRestyleFunction({
      property: property,
      themeKey: "spacing",
      styleProperty: property,
    });
  },
);

const layoutOther = LAYOUT_OTHER_PROPERTIES.map(
  (property: LayoutOtherPropertiesType) => {
    return createRestyleFunction({
      property: property,
    });
  },
);
const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
//   backgroundColor,
//   opacity,
//   visible,
  spacing,
//   layoutDimensions,
//   layoutOther,
//   position,
//   borderColor,
//   borderRadius,
//   borderWidth,
//   shadow,
]);

export type RestyleCardProps = RestyleProps & ViewProps;
export const RestyleCard = ({ ...rest }: RestyleCardProps) => {
  const restyleProps = useRestyle(restyleFunctions, rest);

  return <View {...restyleProps} />;
};
