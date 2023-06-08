import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MuiIconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { darken, lighten, styled } from "@mui/material/styles";
import Iconify from "../components/Iconify";
import { socials } from "../utils/constants";

export default function HireMeSection() {
  return (
    <Paper elevation={0} sx={{ borderRadius: 0 }}>
      <Container
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
          color: "grey.400",
        }}
      >
        <Typography
          variant="h3"
          mb={3}
          color="primary.main"
          textAlign="center"
          sx={({ palette }) => ({
            background: `-webkit-linear-gradient(45deg, ${
              palette.primary.main
            }, ${lighten(palette.primary.light, 0.5)})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          })}
        >
          What are you working on?
        </Typography>
        <Typography variant="body2" maxWidth={400} textAlign="center">
          Let's have a conversation! I'd love to hear about what you're working
          on and find a way to work together.
        </Typography>

        <Stack
          direction="row"
          spacing={{
            xs: 2,
            md: 4,
          }}
          mt={4}
          alignItems="center"
          justifyItems="center"
        >
          <Button
            centerRipple
            LinkComponent={Link}
            href={socials.fiverr.link}
            startIcon={<Iconify icon={socials.fiverr.icon} />}
            sx={({ palette }) => ({
              fontSize: 12,
              borderRadius: 2,
              "& .MuiButton-startIcon": {
                borderRight: `1px solid ${palette.grey.A200}`,
                paddingRight: 0.5,
                marginRight: 0.5,
              },
            })}
          >
            Hire Me
          </Button>

          <IconButton
            centerRipple
            LinkComponent={Link}
            href={socials.whatsapp.link}
          >
            <Iconify icon={socials.whatsapp.icon} />
          </IconButton>

          <IconButton
            centerRipple
            LinkComponent={Link}
            href={`${socials.mail.prefix ?? ""}${socials.mail.link}`}
          >
            <Iconify icon={socials.mail.icon} />
          </IconButton>
        </Stack>
      </Container>
    </Paper>
  );
}

const IconButton = styled(MuiIconButton)<{
  href: string;
}>(({ theme: { palette } }) => ({
  background: palette.primary.main,
  color: palette.primary.contrastText,
  "&:hover": {
    background: darken(palette.primary.main, 0.1),
  },
}));
