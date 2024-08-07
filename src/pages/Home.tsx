import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useInView } from "framer-motion";
import { Fragment, useEffect, useMemo, useRef } from "react";
import CustomAppBar from "../components/AppBar";
import DownloadResumeButton from "../components/DownloadResumeButton";
import Iconify from "../components/Iconify";
import ImageComponent from "../components/ImageComponent";
import AboutSection from "../sections/About";
import FeaturedSection from "../sections/Featured";
import FooterSection from "../sections/Footer";
import HireMeSection from "../sections/HireMe";
import { fonts } from "../theme/typography";
import { APPBAR, technologies } from "../utils/constants";
import icons from "../utils/icons";

export default function Home() {
  const [aboutSectionRef, homeSectionRef, portfolioSectionRef, prev] = [
    useRef<HTMLSpanElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef("home"),
  ];

  const [home, about, portfolio] = [
    useInView(homeSectionRef),
    useInView(aboutSectionRef),
    useInView(portfolioSectionRef),
  ];

  const current = useMemo(() => {
    switch (true) {
      case home:
        return "home";
      case portfolio:
        return "portfolio";
      case about:
        return "about";

      default:
        return prev.current;
    }
  }, [about, home, portfolio, prev]);

  const getRef = (value: string) => {
    switch (value) {
      case "home":
        return homeSectionRef;
      case "portfolio":
        return portfolioSectionRef;
      case "about":
        return aboutSectionRef;

      default:
        return homeSectionRef;
    }
  };

  useEffect(() => {
    prev.current = current;
  }, [current, prev]);

  return (
    <Fragment>
      <span style={{ height: APPBAR.defaultHeight }} ref={homeSectionRef} />

      <Container
        sx={({ breakpoints }) => ({
          position: "relative",
          height: `100vh`,
          userSelect: "none",
          display: "flex",

          [breakpoints.down("sm")]: {
            justifyContent: "center",
            flexDirection: "column-reverse",
          },
          [breakpoints.up("sm")]: {
            alignItems: "center",
            flexDirection: "row",
          },
        })}
      >
        <CustomAppBar
          active={current}
          onNavigate={(to) => {
            const ref = getRef(to);
            window.scrollTo({
              behavior: "smooth",
              top:
                (ref.current?.offsetTop ?? APPBAR.defaultHeight) -
                APPBAR.defaultHeight,
            });
          }}
        />
        <div>
          <Box
            sx={({ palette }) => ({
              borderColor: palette.grey[400],
              borderStyle: "solid",
              borderWidth: 0,
              // borderLeftWidth: 2,
              paddingLeft: 2,
              borderRadius: 0.3,
            })}
          >
            <Typography
              variant="body1"
              fontFamily={fonts.mono}
              color="primary.main"
            >
              Hi, I'm
            </Typography>
            {/* <Typography variant="h3">Hi,</Typography> */}
            <Typography variant="h3">Cephas Too,</Typography>
            <Typography variant="h3">software developer.</Typography>

            <Box>
              <Typography variant="overline" fontWeight={300} color="grey.500">
                {technologies.map((tech, index) => (
                  <span key={tech}>
                    <span>{tech}</span>
                    {index !== technologies.length - 1 && <span>/</span>}{" "}
                  </span>
                ))}
              </Typography>
            </Box>
          </Box>
        </div>

        <ImageComponent />

        <Box position="absolute" bottom={50} right={0} left={0} paddingLeft={2}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent={{
              xs: "space-around",
              md: "start",
            }}
          >
            <DownloadResumeButton />
            <Button
              variant="text"
              sx={{ px: 3 }}
              onClick={() => {
                const top =
                  (aboutSectionRef.current?.offsetTop ?? APPBAR.defaultHeight) -
                  APPBAR.defaultHeight;
                window.scrollTo({
                  top,
                  behavior: "smooth",
                });
              }}
              startIcon={
                <Box
                  sx={({ palette }) => ({
                    border: `1px solid ${palette.primary.main}`,
                    borderRadius: "50%",
                    height: 25,
                    display: "flex",
                    width: 25,
                    alignItems: "center",
                    justifyContent: "center",
                  })}
                >
                  <Iconify
                    icon={icons.play}
                    fill="green"
                    height={15}
                    width={15}
                  />
                </Box>
              }
            >
              <Typography
                component="span"
                color="grey.200"
                variant="button"
                sx={({ breakpoints, palette }) => ({
                  [breakpoints.between("sm", "md")]: {
                    color: palette.primary.main,
                  },
                })}
              >
                Start Tour
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Container>

      <AboutSection>
        <span ref={aboutSectionRef} />
      </AboutSection>
      {/*  */}
      <FeaturedSection>
        <span ref={portfolioSectionRef} />
      </FeaturedSection>

      {/*  */}

      <HireMeSection />
      {/* footer */}
      <FooterSection />
    </Fragment>
  );
}
