import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return (
    <section className="grid grid-cols-4 col-span-4 sm:grid-cols-6 sm:col-span-6  first:mt-10">
      {children}
    </section>
  );
};
