import { Theme, ThemeOptions } from "@mui/material/styles";
import Button from "./Button";
import Link from "./Link";

const overrides = (theme: Theme): ThemeOptions["components"] =>
  Object.assign({}, Button(theme), Link(theme));

export default overrides;
