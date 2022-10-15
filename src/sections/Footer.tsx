import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Iconify from "../components/Iconify";
import useResponsive from "../hooks/useResponsive";
import { fontWeights } from "../theme/typography";
import { socialsMap } from "../utils/constants";

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
  const isTablet = useResponsive("up", "md");

  return (
    <Container
      sx={{
        display: "flex",
        py: 4,
        justifyContent: {
          xs: "center",
          md: "space-between",
        },
      }}
    >
      {isTablet && (
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
      )}

      <Stack spacing={2} direction="row">
        {socialsMap.map((social) => (
          <IconButton
            key={social.key}
            sx={({ palette }) => ({ color: palette.grey[500] })}
            href={(social.prefix ?? "") + social.link}
            target="_blank"
          >
            <Iconify icon={social.icon} />
          </IconButton>
        ))}
      </Stack>
    </Container>
  );
}
