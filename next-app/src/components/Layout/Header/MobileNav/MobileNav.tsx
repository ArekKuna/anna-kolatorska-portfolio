import { MobileNavDrawer } from "@/components/Layout/Header/MobileNav/MobileNavDrawer";
import { MobileNavTrigger } from "@/components/Layout/Header/MobileNav/MobileNavTrigger";
import { Socials } from "@/components/Socials/Socials";
import { useState } from "react";

export const MobileNav = () => {
  const [openMobileMenuDrawer, setOpenMobileMenuDrawer] = useState(false);

  const handleOpenMobileMenuDrawer = () => {
    const body = document.getElementById("body");

    setOpenMobileMenuDrawer((prevState) => !prevState);
    body?.classList.toggle(`${openMobileMenuDrawer}` ? "drawer-open" : "");
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-4">
        <Socials />
        <MobileNavTrigger onClick={handleOpenMobileMenuDrawer} />
      </div>
      <MobileNavDrawer
        onClick={handleOpenMobileMenuDrawer}
        isMobileMenuDrawerOpen={openMobileMenuDrawer}
      />
    </>
  );
};
