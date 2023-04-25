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
        className={`pt-[106px] min-h-[2000px] grid grid-cols-4 font-lato ${mainFont}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
