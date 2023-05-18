import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { ReactNode } from "react";
import overrides from "./overrides";
import theme from "./theme";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const themeOptions: ThemeOptions = (() => {
    const t = createTheme(theme);
    t.components = overrides(t);
    return t;
  })();

  return <MuiThemeProvider theme={themeOptions}>{children}</MuiThemeProvider>;
};
