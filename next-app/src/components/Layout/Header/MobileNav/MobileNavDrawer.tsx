import { motion, AnimatePresence } from "framer-motion";
import { MobileNavMenu } from "@/components/Layout/Header/MobileNav/MobileNavMenu";
import { CloseIcon } from "@/components/Icons/CloseIcon";
import { drawerVariantsMap } from "@/components/Layout/Header/headerConfig";

type MobileNavDrawerProps = {
  onClick: () => void;
  isMobileMenuDrawerOpen: boolean;
};

export const MobileNavDrawer = ({
  isMobileMenuDrawerOpen: isMobileMenuDrawerOpen,
  onClick,
}: MobileNavDrawerProps) => {
  return (
    <AnimatePresence>
      {isMobileMenuDrawerOpen && (
        <motion.div
          variants={drawerVariantsMap}
          initial="initial"
          animate="visible"
          exit="hidden"
          className="fixed top-0 left-0 p-5 w-screen h-screen flex justify-center items-center overflow-y-auto text-white bg-black/90 z-100"
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
