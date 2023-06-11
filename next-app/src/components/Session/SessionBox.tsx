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

  const { description, position, title, backgroundColor } = sessionContent;

  const { defaultStyles, bgStripped } = getStyles(backgroundColor as boolean);

  return (
    <div className={`${defaultStyles} ${bgStripped}`}>
      <div className="px-4 py-14 grid grid-cols-1 col-span-1 gap-10 sm:px-8 md:grid-cols-2 md:gap-8 md:items-center">
        <BoxContent title={title} description={description} />
        {Array.isArray(images) ? (
          <div className="grid grid-cols-3 grid-rows-1 gap-2 sm:px-8 md:h-fit md:px-0 md:col-start-1 md:row-start-1">
            <MultipleImages images={images} />
          </div>
        ) : (
          <div
            className={`flex justify-center ${
              position
                ? "md:col-start-1 md:row-start-1"
                : "md:col-start-2 md:row-start-1"
            }`}
          >
            <SingleImage image={images} />
          </div>
        )}
      </div>
    </div>
  );
};

const getStyles = (bgColor: boolean) => {
  const defaultStyles = `my-10 rounded-3xl col-span-1 sm:col-span-4 md:col-span-8 lg:rounded-l-none lg:col-span-9`;
  const bgStripped = bgColor ? "bg-gray" : "bg-gray lg:bg-transparent";

  return {
    defaultStyles,
    bgStripped,
  };
};
