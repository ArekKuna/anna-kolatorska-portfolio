import { NavigationMenu } from "@/components/Layout/Header/headerConfig";
import { MobileNavCategoryItem } from "@/components/Layout/Header/MobileNav/MobileNavCategoryItem";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type MobileNavItemprops = {
  links: NavigationMenu;
  onClick: () => void;
};

export const MobileNavItem = ({ links, onClick }: MobileNavItemprops) => {
  const [NavItemSubcategoryIsOpen, setNavItemSubcategoryIsOpen] =
    useState(false);

  const router = useRouter();
  const activePath = router.pathname;

  const {
    menuLinkStyles,
    activeMenuLinkStyles,
    chevronStyles,
    chevronOpenStyles,
    submenuStyles,
    subMenuOpenStyles,
    subMenuController,
  } = getStyles(NavItemSubcategoryIsOpen, links, activePath);

  return (
    <>
      {links.href ? (
        <Link
          href={links.href}
          onClick={onClick}
          className={`${menuLinkStyles} ${activeMenuLinkStyles}`}
        >
          {links.text}
        </Link>
      ) : (
        <span
          className={`${menuLinkStyles} ${activeMenuLinkStyles} ${subMenuController}`}
          onClick={() => setNavItemSubcategoryIsOpen((prevState) => !prevState)}
        >
          {links.text}
        </span>
      )}
      {links.icon && (
        <span
          onClick={() => setNavItemSubcategoryIsOpen((prevState) => !prevState)}
          className={`${chevronStyles} ${chevronOpenStyles}`}
        >
          {links.icon}
        </span>
      )}
      {links.categories && (
        <ul className={`${submenuStyles} ${subMenuOpenStyles}`}>
          {links.categories?.map((category) => (
            <MobileNavCategoryItem
              key={category.text}
              categories={category}
              onClick={onClick}
            />
          ))}
        </ul>
      )}
    </>
  );
};

const getStyles = (isOpen: boolean, links: NavigationMenu, path: string) => {
  const activePath = path === links.href;

  const menuLinkStyles = "py-3 w-full flex-1";
  const activeMenuLinkStyles = activePath ? "text-sky-400 duration-1000" : "";
  const chevronStyles = "w-[20%] flex justify-center items-center";
  const chevronOpenStyles = isOpen
    ? "rotate-180 duration-200"
    : "rotate-0 duration-200";
  const submenuStyles =
    "w-full flex flex-col justify-center items-start overflow-hidden";
  const subMenuOpenStyles = isOpen
    ? "max-h-72 opacity-1 duration-500"
    : "max-h-0 opacity-0 duration-500";
  const subMenuControllerStyles = path.startsWith("/oferta")
    ? "text-sky-400"
    : null;

  return {
    menuLinkStyles,
    activeMenuLinkStyles,
    chevronStyles,
    chevronOpenStyles,
    submenuStyles,
    subMenuOpenStyles,
    subMenuController: subMenuControllerStyles,
  };
};
