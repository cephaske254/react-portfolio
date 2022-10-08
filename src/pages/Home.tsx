import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import Iconify from "../components/Iconify";
import ImageComponent from "../components/ImageComponent";
import AboutSection from "../sections/About";
import { fonts } from "../theme/typography";
import icons from "../utils/icons";

const technologies = [
  "django",
  "react",
  "vue",
  "angular",
  "react native",
  "flutter",
];

export default function Home({ pathname }: any) {
  return (
    <Fragment>
      {/*  */}
      <Container
        sx={({ breakpoints }) => ({
          height: `100vh`,
          userSelect: "none",
          // padding: [spacing(APPBAR.defxaultHeight / 8), 0, 0, 0],
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

        <Box position="absolute" bottom={50} paddingLeft={2}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" sx={{ px: 4 }} disableElevation>
              Hire Me
            </Button>
            <Button
              variant="text"
              sx={{ px: 3 }}
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
              <Typography component="span" color="grey.200" variant="button">
                Start Tour
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Container>

      <AboutSection />
    </Fragment>
  );
}
