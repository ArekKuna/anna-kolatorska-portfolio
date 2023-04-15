import { ReactNode } from "react";
import { Header } from "./Header/Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-[2000px]">{children}</main>
    </>
  );
};
