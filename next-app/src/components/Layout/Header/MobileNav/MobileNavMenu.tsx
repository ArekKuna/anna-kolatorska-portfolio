// import { MobileNavItem } from "./MobileNavItem";
import { MobileMenuMap } from "@/components/Layout/Header/headerConfig";
import { MobileNavItem } from "@/components/Layout/Header/MobileNav/MobileNavItem";

type MobileNavMenuProps = {
  onClick: () => void;
};

export const MobileNavMenu = ({ onClick }: MobileNavMenuProps) => {
  return (
    <nav className="flex justify-center items-center font-light uppercase">
      <ul className="h-full flex flex-col justify-center items-start">
        {MobileMenuMap.map((link) => (
          <li
            key={link.id}
            className="w-full flex flex-wrap justify-between items-center border-b-[1px] border-b-white/30"
          >
            <MobileNavItem links={link} onClick={onClick} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
