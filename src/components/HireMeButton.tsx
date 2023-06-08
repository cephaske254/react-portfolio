import Button, { ButtonProps } from "@mui/material/Button";
import Link from "@mui/material/Link";
import { socials } from "../utils/constants";

export default function HireMeButton(props?: Partial<ButtonProps>) {
  return (
    <Button
      variant="contained"
      sx={{ px: 4 }}
      disableElevation
      href={socials.fiverr.link}
      target="_blank"
      // startIcon={<Iconify icon={socials.fiverr.icon} />}
      component={Link}
      {...(props as any)}
    >
      {props?.children ?? "Hire Me"}
    </Button>
  );
}
