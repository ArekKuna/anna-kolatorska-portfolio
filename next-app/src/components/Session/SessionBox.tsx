import { BoxContent } from "@/components/Session/BoxContent";
import {
  SessionParagraphFragment,
  SessionParagraphMultipleImagesAttributesFragment,
} from "@/graphql/generated";
import { SessionImageAttributes } from "@/pages/oferta/[session]";
import { MultipleImages } from "./MultipleImages";
import { SingleImage } from "./SingleImage";

type BoxType = "UPPER" | "MIDDLE" | "LOWER";

type SessionBoxProps = {
  sessionContent:
    | SessionParagraphFragment
    | SessionParagraphMultipleImagesAttributesFragment;
  images: SessionImageAttributes | SessionImageAttributes[];
  boxType?: BoxType;
};

export const SessionBox = ({ sessionContent, images }: SessionBoxProps) => {
  if (!sessionContent.title || !sessionContent.description) {
    return <p>Ładowanie</p>;
  }

  const { description, position, title } = sessionContent;

  return (
    <div className="bg-gray shadow-md rounded-3xl">
      <div className="px-4 py-14 flex flex-col gap-10 items-center sm:px-8 md:px-14 md:py-20 md:gap-20">
        <BoxContent title={title} description={description} />
        {Array.isArray(images) ? (
          <div className="grid grid-cols-3 grid-rows-1 gap-2 sm:px-8 md:h-fit md:px-0 md:col-start-1 md:row-start-1">
            <MultipleImages images={images} />
          </div>
        ) : (
          <div className="">
            <SingleImage image={images} />
          </div>
        )}
      </div>
    </div>
  );
};
