import { DesktopNavCategoryItem } from "components/Layout/Header/DesktopNav/DesktopNavCategoryItem";
import { NavigationMenu } from "components/Layout/Header/headerConfig";
import { useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type DesktopNavMenuItemProps = {
  links: NavigationMenu;
};

export const DesktopNavMenuItem = ({ links }: DesktopNavMenuItemProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const router = useRouter();
  const path = router.pathname;
  const activePath = path === links.href;

  const { scrollY } = useScroll();

  const updateSubmenuOpenState = () => {
    const current = scrollY.get();
    const prev = scrollY.getPrevious();

    if (current > 100 && current > prev) {
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    setIsSubmenuOpen(false);
    return scrollY.on("change", () => updateSubmenuOpenState());
  }, [path]);

  return (
    <>
      {links.href ? (
        <Link
          href={links.href}
          className={`${
            activePath
              ? "font-semibold hover:opacity-50"
              : "font-light hover:opacity-50"
          }`}
        >
          {links.text}
        </Link>
      ) : (
        <span
          className="cursor-pointer hover:opacity-50"
          onClick={() => setIsSubmenuOpen((prev) => !prev)}
        >
          {links.text}
        </span>
      )}
      {links.categories && (
        <ul
          className={`absolute w-[200px] overflow-hidden text-xs rounded-xl shadow-lg divide-y-[1px] divide-black/30 duration-500 ${
            isSubmenuOpen ? "max-h-[200px] pt-[10px]" : "max-h-0"
          } bg-white/90`}
        >
          {links.categories?.map((category) => (
            <DesktopNavCategoryItem
              key={category.text}
              categories={category}
              onClick={() => setIsSubmenuOpen((prev) => !prev)}
            />
          ))}
        </ul>
      )}
    </>
  );
};