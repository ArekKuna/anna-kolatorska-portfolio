import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <section className="col-span-4">{children}</section>;
};
