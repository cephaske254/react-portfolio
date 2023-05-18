import icons from "./icons";

export const aboutDescription = [
  <>
    I'm a creative fullstack developer with <strong>3+</strong> years of
    experience. I specialise in frontend and backend development for complex
    scalable web and mobile apps.
  </>,
  <>
    Since the beginning of my journey as a software developer 3 years ago, I've
    done remote work for agencies, developed for startups, and collaborated with
    talents to create digital products for both business and consumer use.
  </>,
];

export const email = "cephasktoo@gmail.com";
export const phone = "+254798950450";

export const socials = {
  fiverr: {
    icon: icons.fiverr,
    link: "https://www.fiverr.com/cephasktoo",
  },
  whatsapp: {
    icon: icons.whatsapp,
    link: `https://wa.me/${phone}`,
  },
  linkedin: {
    icon: icons.linkedin,
    link: "https://linkedin.com/in/cephastoo",
  },
  mail: {
    icon: icons.email,
    link: email,
    prefix: "mailto:",
  },
  github: {
    icon: icons.github,
    link: "https://github.com/cephaske254",
  },
};

export const socialsMap: {
  icon: string;
  link: string;
  prefix?: string;
  key: string;
}[] = Object.entries(socials).map(([key, val]) => ({
  ...val,
  key,
}));
