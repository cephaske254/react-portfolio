import Button, { ButtonProps } from "@mui/material/Button";
import { socials } from "../utils/constants";

export default function HireMeButton(props?: Omit<ButtonProps, "children">) {
  return (
    <Button
      variant="contained"
      sx={{ px: 4 }}
      disableElevation
      href={socials.fiverr.link}
      target="_blank"
      {...(props as any)}
    >
      Hire Me
    </Button>
  );
}
