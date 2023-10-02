import { ChevronDownIcon } from "@/components/Icons/ChevronDownIcon";

export type NavigationMenuCategory = {
  text: string;
  href: string;
};

export type NavigationMenu = {
  id: number;
  text: string;
  href?: string;
  categories?: NavigationMenuCategory[];
  icon?: JSX.Element;
};

export const navigationMap: NavigationMenu[] = [
  {
    id: 1,
    text: "home",
    href: "/",
  },
  {
    id: 2,
    text: "oferta",
    categories: [
      {
        text: "sesja biznesowa",
        href: "/oferta/sesja-biznesowa",
      },
      {
        text: "sesja portretowa",
        href: "/oferta/sesja-portretowa",
      },
      {
        text: "sesja rodzinna",
        href: "/oferta/sesja-rodzinna",
      },
      {
        text: "sesja reportażowa",
        href: "/oferta/sesja-reportazowa",
      },
      {
        text: "sesja kobieca",
        href: "/oferta/sesja-kobieca",
      },
    ],
    icon: <ChevronDownIcon />,
  },
  {
    id: 3,
    text: "o mnie",
    href: "/omnie",
  },
  {
    id: 4,
    text: "kontakt",
    href: "/kontakt",
  },
];

export const drawerVariantsMap = {
  initial: { x: "100%", opacity: 1 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { x: "100%", opacity: 1, transition: { duration: 0.5 } },
};

export const hideHeaderVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.1, 0.25, 0.3, 1], duration: 0.5 },
  },
  hidden: {
    opacity: 0,
    y: -25,
    transition: { ease: [0.1, 0.25, 0.3, 1], duration: 0.5 },
  },
};
