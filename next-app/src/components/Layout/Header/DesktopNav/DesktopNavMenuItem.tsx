import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { NavigationMenu } from "../headerConfig";
import { DesktopNavCategoryItem } from "./DesktopNavCategoryItem";

type DesktopNavMenuItemProps = {
  links: NavigationMenu;
};

export const DesktopNavMenuItem = ({ links }: DesktopNavMenuItemProps) => {
  const [state, setState] = useState(false);

  const router = useRouter();
  const path = router.pathname;
  const activePath = path === links.href;
  console.log(state);
  return (
    <>
      {links.href ? (
        <Link
          href={links.href}
          className={`${activePath ? "font-semibold" : "font-light"}`}
        >
          {links.text}
        </Link>
      ) : (
        <span
          className="cursor-pointer"
          onClick={() => setState((prev) => !prev)}
        >
          {links.text}
        </span>
      )}
      {links.categories && (
        <ul
          className={`absolute -left-[60px] top-[40px] w-[200px] shadow-lg overflow-hidden duration-200 ${
            state ? "max-h-[200px]" : "max-h-0"
          } bg-white`}
        >
          {links.categories?.map((category) => (
            <DesktopNavCategoryItem
              key={category.text}
              categories={category}
              onClick={() => setState((prev) => !prev)}
            />
          ))}
        </ul>
      )}
    </>
  );
};
