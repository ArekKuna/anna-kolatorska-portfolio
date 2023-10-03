import { Contacts } from "components/Layout/Footer/Contacts";
import { Logo } from "components/Logo/Logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pb-5 flex flex-col gap-4">
      <Link href="/" className="flex justify-center">
        <Logo className="w-full h-[90px]" />
      </Link>
      <Contacts />
    </footer>
  );
};
