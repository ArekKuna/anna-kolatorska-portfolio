import { Footer } from "@/components/Layout/Footer/Footer";
import { Header } from "@/components/Layout/Header/Header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  mainFont: string;
};

export const Layout = ({ children, mainFont }: LayoutProps) => {
  return (
    <>
      <Header />
      <main
        className={`pt-[106px] px-4 grid grid-cols-1 text-font font-lato ${mainFont} sm:grid-cols-4 sm:gap-x-4 sm:px-10 md:grid-cols-8 md:px-14`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
