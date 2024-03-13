import { DesktopNav } from "components/Layout/Header/DesktopNav/DesktopNav";
import { hideHeaderVariants } from "components/Layout/Header/headerConfig";
import { MobileNav } from "components/Layout/Header/MobileNav/MobileNav";
import { Logo } from "components/Logo/Logo";
import { Socials } from "components/Socials/Socials";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderProps = {
  mainFont: string;
};

export const Header = ({ mainFont }: HeaderProps) => {
  const [hideHeader, setHideHeader] = useState(false);

  const { scrollY } = useScroll();

  const updateSetHeaderState = () => {
    const current = scrollY.get();
    const prev = scrollY.getPrevious();

    if (!prev) return 0;

    if (current < prev) {
      setHideHeader(false);
    }

    if (current > 100 && current > prev) {
      setHideHeader(true);
    }
  };

  useEffect(() => {
    return scrollY.on("change", () => updateSetHeaderState());
  });

  return (
    <motion.header
      variants={hideHeaderVariants}
      animate={hideHeader ? "hidden" : "visible"}
      className={`fixed bg-white px-4 w-full flex justify-between shadow-lg z-20 md:px-8`}
    >
      <Link href="/">
        <Logo className="w-full h-[90px]" />
      </Link>
      <MobileNav mainFont={mainFont} />
      <DesktopNav mainFont={mainFont} />
      <div className="hidden lg:flex">
        <Socials />
      </div>
    </motion.header>
  );
};
