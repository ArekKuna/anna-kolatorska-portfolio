import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  variant: "session" | "options";
};

export const SessionSection = ({ children, variant }: SectionProps) => {
  return (
    <section
      className={`max-w-7xl pt-20 flex flex-col gap-20 col-span-1 sm:px-14 sm:col-span-4 md:col-span-8 lg:px-0 lg:pt-32 lg:gap-0 lg:col-span-11 2xl:col-span-12 mx-auto ${
        variant === "session"
          ? "px-5 md:px-20"
          : "md:px-5 lg:px-10 lg:col-span-12"
      }`}
    >
      {children}
    </section>
  );
};
