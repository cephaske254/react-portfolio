import icons from "./icons";

export const years_of_experience = new Date().getFullYear() - 2020;

export const aboutDescription = [
  <>
    A creative full-stack developer with <strong>4+</strong> years of experience
    adept at working both remotely and in-office.
  </>,
  <>
    Since the beginning of my journey as a software developer, I've done remote
    work for agencies, developed for startups, and collaborated with talents to
    create digital products for both business and consumer use.
  </>,
];

export const email = "cephasktoo@gmail.com";
export const phone = "+254750124636";
export const technologies = [
  "go",
  "django",
  "react",
  "vue",
  "angular",
  "react native",
  "flutter",
];

export const socials = {
  fiverr: {
    icon: icons.fiverr,
    link: "https://www.fiverr.com/s/3ERAZB",
  },
  resume: {
    icon: icons.download,
    link: "/Cephas K Too - Resume.pdf",
  },
  portfolio: {
    icon: icons.download,
    link: "/Cephas-Too-PDF-Portfolio.pdf",
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
} as const;

type SocialsMap = {
  icon: string;
  link: string;
  prefix?: string;
  key: string;
};
export const socialsMap: SocialsMap[] = (() => {
  const data: SocialsMap[] = [];

  for (const key in socials) {
    if (key === "resume" || key === "portfolio") continue;

    data.push({ key, ...socials[key as keyof typeof socials] });
  }

  return data;
})();

export const APPBAR = {
  defaultHeight: 50,
};
