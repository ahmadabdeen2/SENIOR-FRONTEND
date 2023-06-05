export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "AYM",
  description:
    "Senior Design Project, Istanbul Bilgi University, 2022-2023",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Sign Up",
      href: "/sign-up",
    },
    {
      title: "Login",
      href: "/login",
    },
  ],

  loggedInNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],


  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    about: "/about",
    signUp: "/sign-up",
    login: "/login",
    dashboard: "/dashboard",
  },
}
