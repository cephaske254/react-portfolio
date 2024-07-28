import Button, { ButtonProps } from "@mui/material/Button";
import Iconify from "./Iconify";
import { socials } from "utils/constants";
import useGlobalContext from "hooks/useGlobalContext";

export default function DownloadResumeButton(props?: Partial<ButtonProps>) {
  const { onResumeDownloaded } = useGlobalContext();

  return (
    <Button
      variant="contained"
      size="small"
      sx={{ px: 4 }}
      disableElevation
      {...(props as any)}
      href={props?.href ?? socials.resume.link}
      startIcon={<Iconify icon={socials.resume.icon} />}
      onClick={onResumeDownloaded}
      download
    >
      Resume
    </Button>
  );
}
