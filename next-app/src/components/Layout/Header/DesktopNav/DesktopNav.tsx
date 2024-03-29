import { DesktopNavMenu } from "components/Layout/Header/DesktopNav/DesktopNavMenu";

type DesktopNavProps = {
  mainFont: string;
};

export const DesktopNav = ({ mainFont }: DesktopNavProps) => {
  return (
    <div className={`flex justify-center items-center ${mainFont} font-inter`}>
      <DesktopNavMenu />
    </div>
  );
};
