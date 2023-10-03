import { NavigationMenuCategory } from "components/Layout/Header/headerConfig";
import Link from "next/link";

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
