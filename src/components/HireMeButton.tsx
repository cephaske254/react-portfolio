import Button, { ButtonProps } from "@mui/material/Button";
import Link from "@mui/material/Link";
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
      component={Link}
    >
      Hire Me
    </Button>
  );
}
