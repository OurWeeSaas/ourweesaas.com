import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Our wee Saas",
  description: "We build Saas products for humans.",
  url: "https://ourweesaas.com",
  author: "OurWeeSaas",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  // about: {
  //   path: "/about",
  //   label: "About",
  // },
  // blog: {
  //   path: "/blog",
  //   label: "Blog",
  // },
  // projects: {
  //   path: "/projects",
  //   label: "Projects",
  // },
  // contact: {
  //   path: "/contact",
  //   label: "Contact",
  // },
  // documentation: {
  //   path: "https://docs.superwebthemes.com",
  //   label: "Documentation",
  // },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:support@ourweesaas.com",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/ourweesaas",
  },
};
