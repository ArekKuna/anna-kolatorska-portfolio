import { SVGProps } from "react";

export const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 25"
      className="inline-block w-6 h-6 stroke-current"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
};
