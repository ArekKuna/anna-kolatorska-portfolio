import { Footer } from "@/components/Layout/Footer/Footer";
import { Header } from "@/components/Layout/Header/Header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="pt-[106px] min-h-[2000px] grid grid-cols-4">
        {children}
      </main>
      <Footer />
    </>
  );
};
