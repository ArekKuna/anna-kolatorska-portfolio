import { DesktopNavMenuItem } from "components/Layout/Header/DesktopNav/DesktopNavMenuItem";
import { useHeader } from "components/Layout/Header/useHeader";

export const DesktopNavMenu = () => {
  const { navigationMap } = useHeader();
  return (
    <ul className="flex items-center gap-4 list-none text-base font-normal uppercase">
      {navigationMap.map((link) => (
        <li key={link.id} className="relative items-center">
          <DesktopNavMenuItem links={link} />
        </li>
      ))}
    </ul>
  );
};
