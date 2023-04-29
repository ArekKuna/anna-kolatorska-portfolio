import { SessionImageAttributes } from "@/pages/oferta/[session]";
import Image from "next/image";
import { useState } from "react";

type xx = {
  images: SessionImageAttributes[];
};

export const MultipleImages = ({ images }: xx) => {
  const [blurred, setBlurred] = useState(true);
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image) => (
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
          alt={image.alt}
          width={300}
          height={600}
          blurDataURL={image.base64}
          style={{ width: "auto", height: "auto" }}
          onLoad={() => setBlurred(false)}
          className={`h-full w-full rounded-3xl ${
            blurred ? "blur-lg" : null
          } transition-all duration-700`}
        />
      ))}
    </div>
  );
};
