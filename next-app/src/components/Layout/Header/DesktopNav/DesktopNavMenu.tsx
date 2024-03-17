import { DesktopNavMenuItem } from "components/Layout/Header/DesktopNav/DesktopNavMenuItem";
import { useHeader } from "components/Layout/Header/useHeader";

export const DesktopNavMenu = () => {
  const { navigationMap } = useHeader();

  return (
    <ul className="flex items-center gap-8 list-none text-base font-normal uppercase">
      {navigationMap.map((link) => (
        <DesktopNavMenuItem key={link.id} link={link} />
      ))}
    </ul>
  );
};
