import Button from "@mui/material/Button";
import { socials } from "../utils/constants";

export default function HireMeButton() {
  return (
    <Button
      variant="contained"
      sx={{ px: 4 }}
      disableElevation
      onClick={() => {
        window.location.href = socials.fiver.link;
      }}
    >
      Hire Me
    </Button>
  );
}
