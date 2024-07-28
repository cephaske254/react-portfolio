import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Fragment, ReactNode, useEffect, useRef } from "react";
import { fonts, fontWeights } from "../theme/typography";
import { projectList } from "../utils/projects";
// import useGlobalContext from "hooks/useGlobalContext";

const ImageThumb = styled("img")(() => ({
  width: "100%",
  height: "100%",
}));

export default function FeaturedSection({
  children,
}: {
  children?: ReactNode;
}) {
  // const {hasDownloadedPortfolio} = useGlobalContext();

  return (
    <Fragment>
      <Container sx={{ py: 4 }}>
        <Typography variant="h3" fontFamily={fonts.primary}>
          Portfolio
        </Typography>
        <Typography variant="caption" fontFamily={fonts.mono} color="grey.600">
          ~ Featured projects
        </Typography>
        {children}

        <Grid container marginTop={2} spacing={2}>
          {projectList.map((project, index) => {
            return (
              <FeaturedItem key={project.key} project={project} index={index} />
            );
          })}
        </Grid>
      </Container>
    </Fragment>
  );
}

const ImageComponent = ({
  project: { images, name, techs },
}: {
  project: (typeof projectList)[number];
  index: number;
}) => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Box
        position="absolute"
        paddingLeft={2}
        paddingRight={2}
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
        }}
      >
        <Typography
          variant="h4"
          fontFamily={fonts.mono}
          fontWeight={fontWeights.mono[700]}
          sx={verticalText}
          color="grey.800"
        >
          {name}
        </Typography>
        <Box flexGrow={1} />
        <Typography
          variant="caption"
          // fontFamily={fonts.mono}
          fontWeight={fontWeights.primary[600]}
          sx={verticalText}
          color="grey.900"
          // color="primary.main"
        >
          {techs.join("/").toUpperCase()}
        </Typography>
      </Box>

      <ImageThumb src={images[0]} sx={{ height: "100%", width: "100%" }} />
    </Box>
  );
};

const FeaturedItem = ({
  project,
  index,
}: {
  project: (typeof projectList)[number];
  index: number;
}) => {
  const disableAnimations = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView && !disableAnimations) controls.start("show");
  }, [controls, inView, disableAnimations]);

  const even = index % 2 === 0;

  return (
    <Grid
      ref={ref}
      item
      sm={12 / 2}
      md={12 / 3}
      position="relative"
      display="inline-flex"
      component={motion.div}
      initial="hidden"
      {...(!disableAnimations && {
        animate: controls,
        variants: even ? gridItemVariants : gridItemVariantsOdd,
      })}
    >
      <ImageComponent project={project} index={index} />
    </Grid>
  );
};

const gridItemVariants = {
  hidden: { opacity: 0, translateX: -100, transition: { duration: 1 } },
  show: { opacity: 1, translateX: 0, transition: { duration: 1 } },
};
const gridItemVariantsOdd = {
  ...gridItemVariants,
  hidden: {
    ...gridItemVariants.hidden,
    opacity: 0,
    translateX: 100,
  },
};

const verticalText = {
  writingMode: "vertical-lr",
  paddingTop: 3,
  paddingLeft: 1,
  letterSpacing: 1,
};
