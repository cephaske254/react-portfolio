export const aboutDescription = [
  <>
    I'm a creative fullstack developer with <strong>3+</strong> years of
    experience. I specialise in frontend and backend development for complex
    scalable web and mobile apps.
  </>,
  <>
    Since the beginning of my journey as a freelance developer 3 years ago, I've
    done remote work for agencies, developed for startups, and collaborated with
    talents to create digital products for both business and consumer use.
  </>,
];

export const email = "cephasktoo@gmail.com";
export const phone = "+254798950450";

export const socials = {
  fiver: {
    icon: "",
    link: "https://www.fiverr.com/cephasktoo",
  },
  whatsapp: {
    icon: "",
    link: `https://api.whatsapp.com/send?phone=${phone}`,
  },
  mail: {
    icon: "",
    link: email,
  },
};

export const socialsMap = Object.entries(socials).map(([key, val]) => ({
  ...val,
  key,
}));
