import { ReactNode } from "react";
import { Footer } from "@/components/Layout/Footer/Footer";
import { Header } from "@/components/Layout/Header/Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-[2000px] pt-[106px]">{children}</main>
      <Footer />
    </>
  );
};
