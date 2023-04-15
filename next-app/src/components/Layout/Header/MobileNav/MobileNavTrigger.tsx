import { HamburgerIcon } from "@/components/Icons/HamburgerIcon";

type MobileNavTriggerProps = {
  onClick: () => void;
};

export const MobileNavTrigger = ({ onClick }: MobileNavTriggerProps) => {
  return (
    <div
      className="flex justify-center items-center font-light"
      onClick={onClick}
    >
      <span className="px-1 uppercase">menu</span>
      <HamburgerIcon />
    </div>
  );
};
