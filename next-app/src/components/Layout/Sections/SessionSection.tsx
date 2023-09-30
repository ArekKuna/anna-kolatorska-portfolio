import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export const SessionSection = ({ children }: SectionProps) => {
  return (
    <section className="max-w-7xl pt-20 col-span-1 sm:col-span-4 md:pt-[130px] md:col-span-8 lg:col-span-12">
      {children}
    </section>
  );
};
