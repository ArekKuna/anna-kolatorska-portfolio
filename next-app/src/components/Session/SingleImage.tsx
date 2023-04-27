import Image from "next/image";
import { IGetPlaiceholderReturn } from "plaiceholder";
import { useState } from "react";

type SingleImageProps = {
  image: IGetPlaiceholderReturn;
  imageAlt: string;
};

export const SingleImage = ({ image, imageAlt }: SingleImageProps) => {
  const [blurred, setBlurred] = useState(true);
  return (
    <Image
      src={image.img.src}
      alt={imageAlt}
      width={300}
      height={500}
      blurDataURL={image.base64}
      style={{ width: "auto", height: "auto" }}
      onLoad={() => setBlurred(false)}
      className={`mx-auto rounded-3xl ${
        blurred ? "blur-lg" : null
      } transition-all duration-700`}
    />
  );
};
