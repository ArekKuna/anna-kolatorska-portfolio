import { AboutMeSectionData } from "types/types";
import { BlurredImage } from "components/Layout/BlurredImage/BlurredImage";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

type Props = {
  data: AboutMeSectionData;
};

export const AboutMe = ({ data }: Props) => {
  const { description, image, title } = data;

  const { alt, base64, height, url, width } = image;

  const clean = DOMPurify.sanitize(description);

  return (
    <div className="flex gap-10">
      <div className="w-3/4 flex flex-col justify-center gap-4">
        <h3 className="font-koHo text-5xl text-[#757575] uppercase self-end">
          {title}
        </h3>
        <p className="whitespace-pre-line text-end">{parse(clean)}</p>
      </div>

      <div className="flex justify-center relative">
        <BlurredImage
          url={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`}
          alt={alt}
          base64={base64}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};
