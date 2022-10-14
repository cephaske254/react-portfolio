import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { lighten } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
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
            background: `-webkit-linear-gradient(30deg, ${
              palette.primary.main
            }, ${lighten(palette.primary.light, 0.4)})`,
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
          <IconButton
            color="primary"
            centerRipple
            LinkComponent={Link}
            href={socials.whatsapp.link}
          >
            <Iconify icon={socials.whatsapp.icon} />
          </IconButton>
          <Button
            component={Link}
            href={socials.fiverr.link}
            target="_blank"
            disableElevation
            sx={{ px: 4 }}
          >
            Fiverr
          </Button>
        </Stack>
      </Container>
    </Paper>
  );
}
