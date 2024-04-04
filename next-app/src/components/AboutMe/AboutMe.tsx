import { AboutMeSectionData } from "pages/types/types";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";
import { Photo } from "components/Layout/Photo/Photo";

type Props = {
  data: AboutMeSectionData;
};

export const AboutMe = ({ data }: Props) => {
  const { description, image, title } = data;

  const { alt, base64, height, url, width } = image;

  const clean = DOMPurify.sanitize(description);

  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col justify-center gap-4">
        <h3 className="font-didactGothic text-5xl text-[#757575] self-end">
          {title}
        </h3>
        <p className="whitespace-pre-line text-end">{parse(clean)}</p>
      </div>
      <div className="w-1/2 flex justify-center">
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
