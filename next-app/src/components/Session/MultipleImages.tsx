import { SessionImageAttributes } from "@/pages/oferta/[session]";
import Image from "next/image";
import { useState } from "react";

type MultipleImagesProps = {
  images: SessionImageAttributes[];
};

export const MultipleImages = ({ images }: MultipleImagesProps) => {
  const [blurred, setBlurred] = useState(true);
  return (
    <>
      {images.map((image) => (
        <Image
          key={image.url}
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
          alt={image.alt}
          width={400}
          height={500}
          blurDataURL={image.base64}
          onLoad={() => setBlurred(false)}
          className={`col-span-1 rounded-3xl w-[32%] ${
            blurred ? "blur-lg" : ""
          } transition-all duration-700`}
        />
      ))}
    </>
  );
};
