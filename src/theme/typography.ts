import { ThemeOptions } from "@mui/material/styles";
import { pxToRem, responsiveFontSizes } from "../utils/getFontValue";

export const fonts = {
  primary: "'Poppins', sans-serif",
  mono: "Space Mono",
};

export const fontWeights = {
  mono: {
    400: 400,
    700: 700,
  },
  primary: {
    300: 300,
    400: 400,
    500: 500,
    600: 600,
  },
};

const typography: ThemeOptions["typography"] = {
  fontFamily: fonts.primary,
  fontWeightRegular: fontWeights.primary[300],
  fontWeightMedium: fontWeights.primary[400],
  fontWeightBold: fontWeights.primary[600],

  allVariants: {
    color: "#fff",
    fontFamily: fonts.primary,
  },
  //
  // fontWeightRegular: 300,
  // fontWeightMedium: 400,
  // fontWeightBold: 500,
  //
  // pxToRem,

  h1: {
    fontWeight: 600,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 600,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 500,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    fontWeight: 300,
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 600,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
} as const;

export default typography;
