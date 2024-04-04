import { Photo } from "components/Layout/Photo/Photo";
import { FormattedImageData } from "pages/types/types";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  sessionDescription: string;
  sessionSubTitle: string;
  imageData: FormattedImageData;
};

export const SessionCardRtl = ({
  imageData,
  sessionDescription,
  sessionSubTitle,
}: Props) => {
  const { alt, base64, height, url, width } = imageData;

  return (
    <div className="bg-[#D9DBDA]/20 py-10 col-span-full grid grid-cols-12 relative gap-10">
      <div className="flex flex-col justify-center gap-10 text-start col-start-2 col-span-7">
        <div className="flex flex-col gap-10">
          <h5 className="text-3xl">{sessionSubTitle}</h5>
          <span>{sessionDescription}</span>
        </div>
        <div className="flex gap-2 items-center justify-start">
          <span className="text-2xl font-bold">Zobacz więcej</span>
          <FaChevronRight width={30} height={30} />
        </div>
      </div>

      <div className="col-span-3 col-start-9 flex justify-end absolute bottom-10">
        <Photo
          alt={alt}
          base64={base64}
          height={height}
          url={url}
          width={width}
          size={80}
        />
      </div>
    </div>
  );
};
