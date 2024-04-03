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
    <div className="flex gap-20">
      <div className="w-1/2 flex flex-col justify-center gap-4">
        <h3 className="font-didactGothic text-5xl text-[#757575] self-end">
          {title}
        </h3>
        <p className="whitespace-pre-line text-end">{parse(clean)}</p>
      </div>
      <div className="w-1/2">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
          alt={image.alt ?? ""}
          width={500}
          height={500}
          blurDataURL={image.base64}
          onLoad={() => setBlurred(false)}
          className={`transition-all duration-1000 h-full w-full ${
            blurred ? "blur-lg" : "blur-none"
          }`}
        />
      </div>
    </div>
  );
};
