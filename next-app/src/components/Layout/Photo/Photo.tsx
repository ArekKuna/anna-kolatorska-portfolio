import Image from "next/image";
import { useState } from "react";

type Props = {
  url: string;
  alt: string;
  width: number;
  height: number;
  base64: string;
  size?: number;
};

export const Photo = ({ alt, base64, height, url, width, size }: Props) => {
  const [blurred, setBlurred] = useState(true);

  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`}
      alt={alt ?? ""}
      width={width}
      height={height}
      blurDataURL={base64}
      onLoad={() => setBlurred(false)}
      className={`transition-all duration-1000 ${
        blurred ? "blur-lg" : "blur-none"
      } ${size && `w-[${size}%]`}`}
    />
  );
};
