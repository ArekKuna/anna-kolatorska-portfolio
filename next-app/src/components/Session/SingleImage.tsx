import Image from "next/image";
type SingleImageProps = {
  imageUrl: string;
};

export const SingleImage = ({ imageUrl }: SingleImageProps) => {
  console.log(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`);
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`}
      alt="aaa"
      width={200}
      height={300}
    />
  );
};
