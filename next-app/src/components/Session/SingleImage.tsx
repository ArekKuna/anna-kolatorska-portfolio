import { SessionImageAttributes } from "@/pages/oferta/[session]";
import Image from "next/image";
import { useState } from "react";

type SingleImageProps = {
  image: SessionImageAttributes;
};

export const SingleImage = ({ image }: SingleImageProps) => {
  const [blurred, setBlurred] = useState(true);

  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
      alt={image.alt}
      width={300}
      height={500}
      blurDataURL={image.base64}
      style={{ width: "auto", height: "auto" }}
      onLoad={() => setBlurred(false)}
      className={`mx-auto rounded-3xl col-span-4 sm:col-start-2 ${
        blurred ? "blur-lg" : null
      } transition-all duration-700`}
    />
  );
};
