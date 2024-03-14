import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export type NavigationMenu = {
  id: number;
  text: string;
  href?: string;
  icon?: JSX.Element;
};

export const navigationMap: NavigationMenu[] = [
  {
    id: 1,
    text: "o mnie",
    href: "/",
  },
  {
    id: 3,
    text: "portfolio",
  },
  {
    id: 4,
    text: "kontakt",
  },
];

export const animateHeaderVariants = {
  visible: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transition: { duration: 0.3 },
  },
  hidden: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    transition: { duration: 0.3 },
  },
};

export const useHeader = () => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const { scrollY } = useScroll();
  const updateSetHeaderState = () => {
    const current = scrollY.get();

    if (current < 200) {
      setIsScrolledToTop(true);
      return;
    }

    setIsScrolledToTop(false);
  };

  useEffect(() => {
    return scrollY.on("change", () => updateSetHeaderState());
  }, [scrollY]);

  return {
    navigationMap,
    animateHeaderVariants,
    isScrolledToTop,
  };
};
