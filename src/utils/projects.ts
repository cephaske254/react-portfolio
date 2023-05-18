import blnng from "../assets/blnng/blnng.png";
import casa from "../assets/casa/casa.png";
import ipix from "../assets/ipix/ipix.png";
import planrr from "../assets/planrr/planrr.png";
import shyro from "../assets/shyro/shyro.png";
import twosister from "../assets/twosister/twosister.png";

const projects = {
  planrr: {
    name: "Planrr",
    techs: ["react native", "expo"],
    images: [planrr],
  },
  casa: {
    name: "Casa",
    techs: ["react native", "django", "postgres"],
    images: [casa],
  },
  blnng: {
    name: "BLNNG",
    techs: ["react native", "django", "postgres"],
    images: [blnng],
  },
  shyro: {
    name: "Shyro",
    techs: ["flutter"],
    images: [shyro],
  },
  inspireTs: {
    name: "Inspire Ts",
    techs: ["flutter", "django"],
    images: [twosister],
  },
  iPix: {
    name: "iPix",
    techs: ["react native", "django"],
    images: [ipix],
  },
};

const projectList = Object.entries(projects).map(([key, val]) => ({
  ...val,
  key,
}));

export { projectList };
export default projects;
