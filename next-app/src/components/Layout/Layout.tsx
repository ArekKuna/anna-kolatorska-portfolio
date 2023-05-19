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
        className={`pt-[106px] px-4 grid grid-cols-4 text-font font-lato ${mainFont} sm:px-12 sm:grid-cols-6 md:px-8`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
