import { SessionImageAttributes } from "@/pages/oferta/[session]";
import Image from "next/image";
import { useState } from "react";

type MultipleImagesProps = {
  images: SessionImageAttributes[];
};

export const MultipleImages = ({ images }: MultipleImagesProps) => {
  const [blurred, setBlurred] = useState(true);
  return (
    <div className="grid grid-cols-3 grid-rows-2 col-span-4 gap-2 sm:px-12 sm:grid-cols-6 sm:col-span-6 sm:gap-4 md:px-24">
      {images.map((image) => (
        <Image
          key={image.url}
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
          alt={image.alt}
          width={300}
          height={600}
          blurDataURL={image.base64}
          // style={{ width: "auto", height: "auto" }}
          onLoad={() => setBlurred(false)}
          className={`h-full w-full rounded-3xl col-span-1 sm:col-span-2 ${
            blurred ? "blur-lg" : null
          } transition-all duration-700`}
        />
      ))}
    </div>
  );
};
