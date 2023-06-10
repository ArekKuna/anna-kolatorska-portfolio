import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export const SessionSection = ({ children }: SectionProps) => {
  return (
    <section className="grid col-span-1 sm:col-span-4 md:col-span-8">
      {children}
    </section>
  );
};
