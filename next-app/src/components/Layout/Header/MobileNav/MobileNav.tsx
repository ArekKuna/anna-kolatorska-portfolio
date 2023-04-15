import { useState } from "react";
import { MobileNavTrigger } from "@/components/Layout/Header/MobileNav/MobileNavTrigger";
import { Socials } from "@/components/Socials/Socials";
import { MobileNavDrawer } from "@/components/Layout/Header/MobileNav/MobileNavDrawer";

export const MobileNav = () => {
  const [openMobileMenuDrawer, setOpenMobileMenuDrawer] = useState(false);

  const handleOpenMobileMenuDrawer = () => {
    const body = document.getElementById("body");

    setOpenMobileMenuDrawer((prevState) => !prevState);
    body?.classList.toggle(`${openMobileMenuDrawer}` ? "drawer-open" : "");
  };

  return (
    <>
      <div className="w-full flex flex-col flex-wrap justify-around col-span-1">
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
