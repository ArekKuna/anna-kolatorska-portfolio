import Image from "next/image";
import { useState } from "react";

type Props = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  base64: string;
  fill?: boolean;
  rounded?: boolean;
};

export const BlurredImage = ({
  alt,
  base64,
  height,
  url,
  width,
  fill = false,
  rounded = false,
}: Props) => {
  const [blurred, setBlurred] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={url}
          alt={alt ?? ""}
          blurDataURL={base64}
          fill={fill}
          onLoad={() => setBlurred(false)}
          sizes="100vw"
          className={`transition-all duration-1000 ${
            blurred ? "blur-lg" : "blur-none"
          } ${rounded && "rounded-full"}`}
        />
      ) : (
        <Image
          src={url}
          alt={alt ?? ""}
          width={width}
          height={height}
          blurDataURL={base64}
          onLoad={() => setBlurred(false)}
          className={`transition-all duration-1000 ${
            blurred ? "blur-lg" : "blur-none"
          } ${rounded && "rounded-full"}`}
        />
      )}
    </>
  );
};
