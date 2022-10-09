import { alpha, darken, ThemeOptions } from "@mui/material/styles";

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  //   main: "#38ff95",
  // main: "#FF4B58",
  main: "#f97a57",
  contrastText: GREY[200],
  // contrastText: "#fefdf8",
};

const palette: ThemeOptions["palette"] = {
  grey: GREY,
  primary: PRIMARY,
  background: {
    default: "#202020",
    // paper: "#25262a",
    paper: darken("#1F222C", 0),
  },
};

export default palette;
