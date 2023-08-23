import { Theme } from "@mui/material/styles";
import Button from "./Button";
import Link from "./Link";

const overrides = (theme: Theme): Theme["components"] =>
  Object.assign({} as any, Button(theme), Link(theme));

export default overrides;
