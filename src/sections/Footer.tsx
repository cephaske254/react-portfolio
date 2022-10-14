import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { fontWeights } from "../theme/typography";

const ALink = styled(Link)(() => ({
  fontSize: "inherit",
  textDecoration: "none",
  color: "inherit",
  fontWeight: fontWeights.primary["600"],
}));

const { mui, netlify, react, iconify } = {
  mui: "https://mui.com/",
  react: "https://reactjs.org/",
  netlify: "https://www.netlify.com/",
  iconify: "https://iconify.design/",
};

export default function FooterSection() {
  return (
    <Container sx={{ display: "flex", py: 4 }}>
      <Box color="grey.400">
        <Typography variant="caption" component="p">
          Designed and developed by Cephas Too.
        </Typography>
        <Typography variant="caption" component="p">
          Built with <ALink href={react}>React</ALink> &{" "}
          <ALink href={mui}>MUI</ALink>, hosted on{" "}
          <ALink href={netlify}>Netlify</ALink>. Icons by{" "}
          <ALink href={iconify}>Iconify</ALink>
        </Typography>
      </Box>
    </Container>
  );
}
