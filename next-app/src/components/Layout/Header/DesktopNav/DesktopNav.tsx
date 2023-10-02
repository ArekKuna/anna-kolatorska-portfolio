import { DesktopNavMenu } from "./DesktopNavMenu";

type DesktopNavProps = {
  mainFont: string;
};

export const DesktopNav = ({ mainFont }: DesktopNavProps) => {
  return (
    <div className={`hidden font-lato ${mainFont} lg:flex`}>
      <DesktopNavMenu />
    </div>
  );
};
