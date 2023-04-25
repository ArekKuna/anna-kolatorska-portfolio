import Image from "next/image";
type SingleImageProps = {
  imageUrl: string;
};

export const SingleImage = ({ imageUrl }: SingleImageProps) => {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`}
      alt="aaa"
      width={300}
      height={500}
      className="mx-auto rounded-3xl"
    />
  );
};
