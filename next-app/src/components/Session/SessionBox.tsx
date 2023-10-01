import { BoxContent } from "@/components/Session/BoxContent";
import {
  SessionParagraphFragment,
  SessionParagraphMultipleImagesAttributesFragment,
} from "@/graphql/generated";
import { SessionImageAttributes } from "@/pages/oferta/[session]";
import { MultipleImages } from "./MultipleImages";
import { SingleImage } from "./SingleImage";

type SessionBoxProps = {
  sessionContent:
    | SessionParagraphFragment
    | SessionParagraphMultipleImagesAttributesFragment;
  images: SessionImageAttributes | SessionImageAttributes[];
};

export const SessionBox = ({ sessionContent, images }: SessionBoxProps) => {
  if (!sessionContent.title || !sessionContent.description) {
    return <p>Ładowanie</p>;
  }

  const { description, imagePositionLeft, title, backgroundColor, marginTop } =
    sessionContent as SessionParagraphFragment;

  return (
    <div
      className={`shadow-md rounded-3xl lg:rounded-l-none 2xl:rounded-3xl ${
        marginTop ? "lg:-mt-[6%] 2xl:-mt-[5%]" : ""
      } ${
        backgroundColor ? "bg-gray" : "bg-gray lg:bg-transparent lg:shadow-none"
      }`}
    >
      <div
        className={`px-4 py-14 flex flex-col gap-10 items-center sm:px-8 md:px-14 lg:justify-evenly lg:px-4 lg:py-10 lg:gap-0 ${
          imagePositionLeft ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <BoxContent title={title} description={description} />
        {Array.isArray(images) ? (
          <div className="w-full flex flex-wrap gap-1 lg:w-[30%]">
            <MultipleImages images={images} />
          </div>
        ) : (
          <div
            className={`h-full w-full flex justify-center z-10 lg:w-[30%] ${
              marginTop ? "xl:-mt-[5%]" : ""
            }`}
          >
            <SingleImage image={images} marginTop={marginTop} />
          </div>
        )}
      </div>
    </div>
  );
};
