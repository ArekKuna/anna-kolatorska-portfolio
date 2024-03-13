import { DesktopNavMenuItem } from "components/Layout/Header/DesktopNav/DesktopNavMenuItem";
import { navigationMap } from "components/Layout/Header/headerConfig";

export const DesktopNavMenu = () => {
  return (
    <ul className="flex items-center gap-x-20 list-none text-base font-light uppercase">
      {navigationMap.map((link) => (
        <li key={link.id} className="relative items-center">
          <DesktopNavMenuItem links={link} />
        </li>
      ))}
    </ul>
  );
};