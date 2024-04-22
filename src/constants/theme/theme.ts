import {
  BREAKPOINTS,
  BUTTON_VARIANTS,
  CARD_VARIANTS,
  PALETTE,
  SHADOW_VARIANTS,
  SPACING,
  TEXT_INPUT_VARIANTS,
  TEXT_VARIANTS,
  Z_INDICES,
} from "@constants/theme";
import { createTheme } from "@shopify/restyle";

const BASE_THEME = {
  colors: PALETTE,
  spacing: SPACING,
  widths: SPACING,
  heights: SPACING,
  borders: SPACING,
  borderRadii: SPACING,
  textVariants: TEXT_VARIANTS,
  textInputVariants: TEXT_INPUT_VARIANTS,
  cardVariants: CARD_VARIANTS,
  buttonVariants: BUTTON_VARIANTS,
  shadowVariants: SHADOW_VARIANTS,
  breakpoints: BREAKPOINTS,
  zIndices: Z_INDICES,
};

const theme = createTheme(BASE_THEME);

export type Theme = typeof theme;
export default theme;
