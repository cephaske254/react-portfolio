import { ButtonProps } from "@mui/material/Button";
import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface BTP extends ButtonProps {
    something: true;
  }
}
const Button = (theme: Theme): ThemeOptions["components"] => {
  return {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  };
};

export default Button;
