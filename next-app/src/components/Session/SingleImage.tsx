import Image from "next/image";
import { SessionImageAttributes } from "pages/oferta/[session]";
import { useState } from "react";

type SingleImageProps = {
  image: SessionImageAttributes;
  marginTop: boolean;
};

export const SingleImage = ({ image, marginTop }: SingleImageProps) => {
  const [blurred, setBlurred] = useState(true);

  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
      alt={image.alt}
      width={500}
      height={500}
      blurDataURL={image.base64}
      onLoad={() => setBlurred(false)}
      className={`rounded-3xl shadow-lg lg:w-full ${
        blurred ? "blur-lg" : ""
      } transition-all duration-700`}
    />
  );
};
