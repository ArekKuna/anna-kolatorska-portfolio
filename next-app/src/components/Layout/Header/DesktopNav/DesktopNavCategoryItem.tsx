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
    <li className="p-2 flex hover:opacity-50">
      <Link href={categories.href} onClick={onClick} className="w-full">
        {categories.text}
      </Link>
    </li>
  );
};
