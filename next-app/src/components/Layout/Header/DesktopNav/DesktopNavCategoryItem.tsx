import Link from "next/link";
import { NavigationMenuCategory } from "../headerConfig";

type DesktopNavCategoryItemProps = {
  onClick: () => void;
  categories: NavigationMenuCategory;
};

export const DesktopNavCategoryItem = ({
  onClick,
  categories,
}: DesktopNavCategoryItemProps) => {
  return (
    <li className="px-2" onClick={onClick}>
      <Link href={categories.href}>{categories.text}</Link>
    </li>
  );
};
