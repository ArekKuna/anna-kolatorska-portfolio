import { HamburgerIcon } from "@/components/Icons/HamburgerIcon";

type MobileNavTriggerProps = {
  onClick: () => void;
};

export const MobileNavTrigger = ({ onClick }: MobileNavTriggerProps) => {
  return (
    <div
      className="flex justify-center items-center gap-1 font-light"
      onClick={onClick}
    >
      <span className="uppercase">menu</span>
      <HamburgerIcon />
    </div>
  );
};
