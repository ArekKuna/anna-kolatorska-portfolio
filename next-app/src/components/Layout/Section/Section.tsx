import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <section>{children}</section>;
};
