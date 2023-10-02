import { CloseIcon } from "@/components/Icons/CloseIcon";
import { drawerVariantsMap } from "@/components/Layout/Header/headerConfig";
import { MobileNavMenu } from "@/components/Layout/Header/MobileNav/MobileNavMenu";
import { AnimatePresence, motion } from "framer-motion";

type MobileNavDrawerProps = {
  onClick: () => void;
  isMobileMenuDrawerOpen: boolean;
  mainFont: string;
};

export const MobileNavDrawer = ({
  onClick,
  isMobileMenuDrawerOpen: isMobileMenuDrawerOpen,
  mainFont,
}: MobileNavDrawerProps) => {
  return (
    <AnimatePresence>
      {isMobileMenuDrawerOpen && (
        <motion.div
          variants={drawerVariantsMap}
          initial="initial"
          animate="visible"
          exit="hidden"
          className={`fixed top-0 left-0 p-5 w-screen h-screen flex justify-center items-center overflow-y-auto text-white font-lato ${mainFont} bg-black/90 z-100`}
        >
          <CloseIcon
            onClick={onClick}
            className="w-8 h-8 absolute top-10 right-10"
          />
          <MobileNavMenu onClick={onClick} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
