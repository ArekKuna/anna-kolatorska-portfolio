import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Logo } from "@/components/Logo/Logo";
import { MobileNav } from "@/components/Layout/Header/MobileNav/MobileNav";
import { hideHeaderVariants } from "@/components/Layout/Header/headerConfig";

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
      className="fixed p-2 w-full grid grid-cols-4 shadow-bottom shadow-black bg-white"
    >
      <Link href="/" className="flex justify-center col-span-3">
        <Logo className="w-full h-[90px]" />
      </Link>
      <MobileNav />
    </motion.header>
  );
};
