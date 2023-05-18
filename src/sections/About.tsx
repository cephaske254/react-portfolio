import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";
import Iconify from "../components/Iconify";
import { fonts, fontWeights } from "../theme/typography";
import { aboutDescription, socials } from "../utils/constants";
import icons from "../utils/icons";

const getYearsOfExperience = () => {
  const date = Date.now();
  const from = new Date("2020-02-28").getTime();

  return Math.round((date - from) / (60 * 60 * 1000 * 24) / 365);
};

export default function AboutSection({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Fragment>
      <Paper elevation={0} sx={{ borderRadius: 0 }}>
        <Container
          sx={{
            pt: 4,
            pb: 5,
            userSelect: "none",
            px: {
              xs: 2,
              sm: undefined,
            },
          }}
        >
          {children}
          <Typography
            variant="h2"
            fontFamily={fonts.mono}
            fontWeight={fontWeights.mono[700]}
            mb={1}
            color="grey.50"
          >
            about()
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              {aboutDescription.map((desc, index) => (
                <Typography
                  variant="body2"
                  color="grey.300"
                  key={index}
                  mb={
                    index !== aboutDescription.length - 1
                      ? {
                          xs: 3,
                          sm: 4,
                          md: 6,
                        }
                      : 0
                  }
                  letterSpacing={1}
                >
                  {desc}
                </Typography>
              ))}
            </Grid>

            {/*  */}

            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", flexDirection: "column", mb: 2 }}
            >
              <Typography
                variant="caption"
                fontFamily={fonts.mono}
                mb={0.5}
                color="primary.light"
              >
                ~ What I do
              </Typography>
              <Stack spacing={1} width="100%">
                {[
                  {
                    title: "Websites & Webapps",
                    desc: "I develop back-end & front-end applications with Python Django, Node & GO",
                  },
                  {
                    title: "Mobile Applications",
                    desc: "I do iOS and android app development with Flutter and React Native",
                  },
                ].map((stack, index) => {
                  return (
                    <Box
                      key={index}
                      sx={({ palette: { primary } }) => ({
                        background: `linear-gradient(  30deg, ${alpha(
                          "#2d2e32",
                          0.4
                        )}, ${alpha(primary.light, 0.1)})`,
                        color: "grey.300",
                        width: "100%",
                        borderRadius: 1,
                        padding: 3,
                      })}
                    >
                      <Typography
                        variant="body2"
                        fontFamily={fonts.mono}
                        fontWeight={fontWeights.mono[700]}
                        color="grey.200"
                      >
                        {stack.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        fontFamily={fonts.mono}
                        fontWeight={fontWeights.mono[400]}
                        color="grey.400"
                      >
                        {stack.desc}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Grid>
          </Grid>

          {/*spacer  */}
          <Box marginTop={5} />
          <Typography color="grey.300" variant="h6" mb={1}>
            <Span>Tools</Span> &{" "}
            <Typography
              component="span"
              color="primary.main"
              fontWeight={fontWeights.primary[400]}
            >
              technologies
            </Typography>
          </Typography>

          <Stack direction="row" justifyContent="space-between">
            {sections.map((section) => (
              <Box key={section.name} sx={{ paddingLeft: 0 }}>
                <List>
                  {section.items.map((item) => (
                    <ListItem disablePadding key={item}>
                      <ListItemText
                        primaryTypographyProps={{
                          variant: "body2",
                          sx: {
                            color: "grey.500",
                            fontFamily: fonts.mono,
                            fontWeight: fontWeights.mono[400],
                          },
                        }}
                      >
                        {item}
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Stack>

          <Box height={40} />

          <Stack
            direction="row"
            spacing={2}
            px={0}
            justifyContent={{ xs: "space-between", md: "center" }}
          >
            {[
              {
                number: getYearsOfExperience(),
                descs: ["Years of", "Experience"],
              },
              {
                number: 30,
                descs: ["Projects", "Completed"],
              },
            ].map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h1"
                  color="grey.200"
                  component="div"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  overflow="hidden"
                >
                  {info.number}
                  <span>+</span>
                </Typography>
                <div>
                  {info.descs.map((desc) => (
                    <Typography
                      key={desc}
                      variant="body2"
                      color="grey.500"
                      textAlign="justify"
                    >
                      {desc.toUpperCase()}
                    </Typography>
                  ))}
                </div>
              </Box>
            ))}

            {/*  */}
          </Stack>
          <Box display="flex" justifyContent="center" mt={1}>
            <Button
              disableElevation
              color="primary"
              variant="text"
              startIcon={<Iconify icon={icons.github} />}
              component={Link}
              href={socials.github.link}
              target="_blank"
            >
              Github
            </Button>
          </Box>
        </Container>
      </Paper>
    </Fragment>
  );
}

const sections = [
  { name: "Frontend", items: ["React", "Angular", "Vue", "Ember", "Gatsby"] },
  {
    name: "Backend",
    items: ["Django", "Flask", "PHP Laravel", "Node Express"],
  },
  { name: "Mobile", items: ["React Native", "Flutter", "Expo"] },
];

const Span = styled("span")(({ theme: { palette } }) => ({
  borderColor: palette.primary.main,
  borderWidth: 0,
  borderBottomWidth: 3,
  // borderStyle: "solid",
}));
