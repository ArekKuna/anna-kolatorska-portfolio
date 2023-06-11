import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export const SessionSection = ({ children }: SectionProps) => {
  return (
    <section className="px-4 grid grid-cols-1 sm:px-10 sm:grid-cols-4 md:px-14 md:grid-cols-8 lg:px-0 lg:grid-cols-10">
      {children}
    </section>
  );
};
