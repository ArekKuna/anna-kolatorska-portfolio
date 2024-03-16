import { DesktopNav } from "components/Layout/Header/DesktopNav/DesktopNav";
import { Logo } from "components/Logo/Logo";
import { Socials } from "components/Socials/Socials";
import { motion } from "framer-motion";
import Link from "next/link";

import { useHeader } from "components/Layout/Header/useHeader";

type HeaderProps = {
  mainFont: string;
};

export const Header = ({ mainFont }: HeaderProps) => {
  const { animateHeaderVariants, isScrolledToTop } = useHeader();

  return (
    <motion.header
      variants={animateHeaderVariants}
      animate={isScrolledToTop ? "hidden" : "visible"}
      className={`fixed p-4 w-full flex justify-between z-20 ${
        isScrolledToTop ? "shadow-none" : "shadow-lg"
      } `}
    >
      <DesktopNav mainFont={mainFont} />
      <Link href="/">
        <Logo className="w-3/4 bg-white rounded-[13px]" />
      </Link>

      <Socials />
    </motion.header>
  );
};
