import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import me from "../assets/me.png";

const Image = styled("img")(() => ({}));

const About = (props: any) => {
  return (
    <Box sx={({ transitions }) => ({})}>
      <Image src={me} alt="me" sx={{ height: 200 }} />
    </Box>
  );
};

export default About;
