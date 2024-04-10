import { Footer } from "components/Layout/Footer/Footer";
import { Header } from "components/Layout/Header/Header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  fontInter: string;
  fontDidactGothic: string;
  fontJomhuria: string;
  fontKoho: string;
};

export const Layout = ({
  children,
  fontInter,
  fontDidactGothic,
  fontJomhuria,
  fontKoho,
}: LayoutProps) => {
  return (
    <>
      <Header mainFont={fontInter} />
      <main
        className={`font-didactGothic text-xl ${fontInter} ${fontDidactGothic} ${fontJomhuria} ${fontKoho} gap-y-40 overflow-x-hidden grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
