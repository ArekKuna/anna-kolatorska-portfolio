import { BlurredImage } from "components/Layout/BlurredImage/BlurredImage";
import { FormattedStrapiImageData } from "types/types";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  sessionDescription: string;
  sessionSubTitle: string;
  imageData: FormattedStrapiImageData;
};

export const SessionCardLtr = ({
  imageData,
  sessionDescription,
  sessionSubTitle,
}: Props) => {
  const { alt, base64, height, url, width } = imageData;

  return (
    <div className="bg-[#D9DBDA]/20 py-10 col-span-full grid grid-cols-12 relative gap-10 text-end">
      <div className="col-span-2 col-start-2 absolute bottom-10">
        <BlurredImage
          url={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`}
          alt={alt}
          base64={base64}
          height={height}
          width={width}
        />
      </div>

      <div className="flex flex-col justify-center gap-10 items-end col-start-4 col-span-8">
        <div className="flex flex-col gap-10">
          <h5 className="text-3xl">{sessionSubTitle}</h5>
          <span>{sessionDescription}</span>
        </div>
        <div className="flex gap-2 items-center justify-end cursor-pointer w-max">
          <span className="text-2xl font-bold">Zobacz więcej</span>
          <FaChevronRight width={24} height={24} />
        </div>
      </div>
    </div>
  );
};
