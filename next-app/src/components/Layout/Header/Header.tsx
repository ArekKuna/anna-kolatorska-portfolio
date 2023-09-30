import { hideHeaderVariants } from "@/components/Layout/Header/headerConfig";
import { MobileNav } from "@/components/Layout/Header/MobileNav/MobileNav";
import { Logo } from "@/components/Logo/Logo";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);

  const { scrollY } = useScroll();

  const updateSetHeaderState = () => {
    const current = scrollY.get();
    const prev = scrollY.getPrevious();

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
      className="fixed bg-white py-2 px-4 w-full flex justify-between shadow-lg md:px-8"
    >
      <Link href="/" className="">
        <Logo className="w-full h-[90px]" />
      </Link>
      <MobileNav />
    </motion.header>
  );
};
