import { Footer } from "components/Layout/Footer/Footer";
import { Header } from "components/Layout/Header/Header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  mainFont: string;
};

export const Layout = ({ children, mainFont }: LayoutProps) => {
  return (
    <>
      <Header mainFont={mainFont} />
      <main
        className={`font-inter ${mainFont} overflow-x-hidden grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
