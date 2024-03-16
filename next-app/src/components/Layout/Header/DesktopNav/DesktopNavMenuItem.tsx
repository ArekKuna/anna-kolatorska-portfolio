import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationMenu } from "components/Layout/Header/useHeader";

type DesktopNavMenuItemProps = {
  link: NavigationMenu;
};

export const DesktopNavMenuItem = ({ link }: DesktopNavMenuItemProps) => {
  const router = useRouter();
  const path = router.pathname;
  const activePath = path === link.href;

  return (
    <li
      className={`hover:opacity-50 cursor-pointer ${
        activePath ? "font-bold" : "font-medium"
      }`}
    >
      {link.href ? (
        <Link href={link.href ?? ""}>{link.text}</Link>
      ) : (
        <>{link.text}</>
      )}
    </li>
  );
};
