import { ThemeOptions } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";

const theme: ThemeOptions = {
  breakpoints,
  palette,
  typography,
  shape: {
    borderRadius: 8,
  },
};

export default theme;
