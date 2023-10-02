import { Footer } from "@/components/Layout/Footer/Footer";
import { ReactNode } from "react";
import { Header } from "./Header/Header";

type LayoutProps = {
  children: ReactNode;
  mainFont: string;
};

export const Layout = ({ children, mainFont }: LayoutProps) => {
  return (
    <>
      <Header mainFont={mainFont} />
      <main
        className={`pt-[106px] text-font font-lato ${mainFont} grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
