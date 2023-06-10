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

  const { defaultStyles } = getStyles(position ?? false);

  return (
    <div className={`${defaultStyles}`}>
      <BoxContent title={title} description={description} />
      {Array.isArray(images) ? (
        <div className="grid grid-cols-3 grid-rows-1 gap-2 sm:px-8 md:h-fit md:px-0 md:col-start-1 md:row-start-1">
          <MultipleImages images={images} />
        </div>
      ) : (
        <div
          className={`${
            position
              ? "md:col-start-1 md:row-start-1"
              : "md:col-start-2 md:row-start-1"
          }`}
        >
          <SingleImage image={images} />
        </div>
      )}
    </div>
  );
};

const getStyles = (position: boolean) => {
  const defaultStyles = `px-4 py-14 my-10 bg-gray rounded-3xl grid gap-10 sm:px-8 md:col-span-8 md:grid-cols-2 md:gap-8 md:items-center`;

  return {
    defaultStyles,
  };
};
