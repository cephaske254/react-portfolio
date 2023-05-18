import { Theme, ThemeOptions } from "@mui/material/styles";

export default function Link(_: Theme): ThemeOptions["components"] {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: 15,
        },
      },
    },
  };
}
