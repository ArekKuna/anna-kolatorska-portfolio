import Link from "next/link";
import { SVGProps } from "react";

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
  const facebookURL = "fb://profile/100049219012909";

  return (
    <Link
      href={facebookURL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center hover:opacity-50"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        version="1.1"
        viewBox="0 0 16 16"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path>
      </svg>
    </Link>
  );
};
