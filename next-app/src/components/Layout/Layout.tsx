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
        className={`pt-[106px] px-5 grid grid-cols-1 sm:px-14 sm:grid-cols-4 md:px-20 md:grid-cols-8 lg:px-0 lg:grid-cols-12 text-font font-lato ${mainFont}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
