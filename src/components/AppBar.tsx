import MuiAppbar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";

import { Link, Outlet, useLocation } from "react-router-dom";
import { fonts, fontWeights } from "../theme/typography";
import { pxToRem } from "../utils/getFontValue";

const AppBar = styled(MuiAppbar)(({ theme: { palette } }) => ({
  backgroundColor: "transparent",
  backdropFilter: "blur(6px)",
  background: alpha(palette.background.default, 0.8),
}));

const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Me",
    path: "/about",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
];

const ButtonLink = styled(Link, {
  shouldForwardProp(propName) {
    return !["active"].includes(propName.toString());
  },
})<{
  active: boolean;
}>(({ theme: { palette }, active }) => ({
  textDecoration: "none",
  color: active ? palette.primary.main : palette.grey[300],
  fontSize: pxToRem(13),
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 15,
}));

export default function CustomAppBar() {
  let active = useLocation().pathname;

  return (
    <Fragment>
      <AppBar elevation={1}>
        <Container>
          <Toolbar disableGutters>
            <Box flexGrow={1}>
              <Typography fontFamily={fonts.mono} fontSize={pxToRem(14)}>
                <span style={{ fontWeight: fontWeights.mono[700] }}>
                  CEPHAS
                </span>{" "}
                TOO
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              {routes.map((route) => {
                return (
                  <ButtonLink
                    key={route.title}
                    active={active === route.path}
                    to={route.path}
                  >
                    {route.title}
                  </ButtonLink>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Fragment>
  );
}
