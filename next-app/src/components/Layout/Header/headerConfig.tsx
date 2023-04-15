import { ChevronDownIcon } from "@/components/Icons/ChevronDownIcon";

export type MobileNavigationMenuCategory = {
  text: string;
  href: string;
};

export type MobileNavigationMenu = {
  id: number;
  text: string;
  href?: string;
  categories?: MobileNavigationMenuCategory[];
  icon?: JSX.Element;
};

export const MobileMenuMap: MobileNavigationMenu[] = [
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
        text: "sesje biznesowe",
        href: "/oferta/sesje-biznesowe",
      },
      {
        text: "sesje portretowe",
        href: "/oferta/sesje-portretowe",
      },
      {
        text: "sesje rodzinne",
        href: "/oferta/sesje-rodzinne",
      },
      {
        text: "sesje reportażowe",
        href: "/oferta/sesje-reportazowe",
      },
      {
        text: "sesje kobiece",
        href: "/oferta/sesje-kobiece",
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
