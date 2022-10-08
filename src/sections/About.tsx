import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { fonts, fontWeights } from "../theme/typography";
import { aboutDescription } from "../utils/constants";

export default function AboutSection() {
  return (
    <Fragment>
      <Paper sx={{ borderRadius: 0 }}>
        <Container
          sx={{
            pt: 4,
            userSelect: "none",
            px: {
              xs: 2,
              sm: undefined,
            },
          }}
        >
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
                  variant="body1"
                  color="grey.300"
                  fontWeight={fontWeights.primary[300]}
                  key={index}
                  mb={4}
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
              sx={{ display: "flex", flexDirection: "row", mb: 2 }}
            >
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
        </Container>
      </Paper>
    </Fragment>
  );
}
