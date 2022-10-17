import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Iconify from "../components/Iconify";
import { fonts, fontWeights } from "../theme/typography";
import { socialsMap } from "../utils/constants";
import { pxToRem } from "../utils/getFontValue";

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
  // const isTablet = useResponsive("up", "md");

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },
        alignItems: {
          xs: "center",
        },
        justifyContent: {
          xs: "center",
          md: "space-between",
        },
        pb: 2,
        pt: 2,
      }}
    >
      {/* {isTablet && ( */}

      <Box
        color="grey.400"
        sx={{
          mt: {
            xs: 1,
            md: 0,
          },
        }}
        fontSize={{
          xs: pxToRem(10),
          md: pxToRem(12),
        }}
        fontFamily={fonts.primary}
        fontWeight={fontWeights.primary[300]}
      >
        <Typography fontSize="inherit" component="p">
          Designed and developed by Cephas Too.
        </Typography>
        <Typography fontSize="inherit" component="p">
          Built with <ALink href={react}>React</ALink> &{" "}
          <ALink href={mui}>MUI</ALink>, hosted on{" "}
          <ALink href={netlify}>Netlify</ALink>. Icons by{" "}
          <ALink href={iconify}>Iconify</ALink>
        </Typography>
      </Box>
      {/* )} */}

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
