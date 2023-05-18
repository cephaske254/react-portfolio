import Button, { ButtonProps } from "@mui/material/Button";
import Link from "@mui/material/Link";
import { socials } from "../utils/constants";
import Iconify from "./Iconify";

export default function HireMeButton(props?: Omit<ButtonProps, "children">) {
  return (
    <Button
      variant="contained"
      sx={{ px: 4 }}
      disableElevation
      href={socials.download.link}
      target="_blank"
      {...(props as any)}
      startIcon={<Iconify icon={socials.download.icon} />}
      component={Link}
    >
      Resume
    </Button>
  );
}
