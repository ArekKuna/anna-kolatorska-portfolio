import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export const SessionSection = ({ children }: SectionProps) => {
  return (
    <section className="max-w-7xl pt-20 flex flex-col gap-20 col-span-1 sm:col-span-4 md:col-span-8 lg:gap-0 lg:col-span-11">
      {children}
    </section>
  );
};
