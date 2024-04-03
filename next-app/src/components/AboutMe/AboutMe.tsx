import Image from "next/image";
import { AboutMeSectionData } from "pages/types/types";
import DOMPurify from "isomorphic-dompurify";
import { useState } from "react";
import parse from "html-react-parser";

type Props = {
  data: AboutMeSectionData;
};

export const AboutMe = ({ data }: Props) => {
  const [blurred, setBlurred] = useState(true);

  const { description, image, title } = data;

  const clean = DOMPurify.sanitize(description);

  return (
    <div className="col-start-2 col-end-12 grid grid-cols-12 gap-16">
      <div className="flex flex-col gap-4 col-start-2 justify-end items-end col-span-5">
        <h3 className="font-didactGothic text-5xl text-[#757575]">{title}</h3>
        <p className="whitespace-pre-line text-end">{parse(clean)}</p>
      </div>
      <div className="col-span-5 flex justify-center items-center col-start-7">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
          alt={image.alt ?? ""}
          width={500}
          height={500}
          blurDataURL={image.base64}
          onLoad={() => setBlurred(false)}
          className={`transition-all duration-1000 w-full h-full ${
            blurred ? "blur-lg" : "blur-none"
          }`}
        />
      </div>
    </div>
  );
};
