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
      onLoad={() => setBlurred(false)}
      className={`rounded-3xl ${
        blurred ? "blur-lg" : ""
      } transition-all duration-700`}
    />
  );
};
