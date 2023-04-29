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
  return (
    <div className="px-4 py-10 my-6 bg-gray rounded-3xl space-y-10">
      <BoxContent
        title={sessionContent.title}
        description={sessionContent.description}
      />
      {Array.isArray(images) ? (
        <MultipleImages images={images} />
      ) : (
        <SingleImage image={images} />
      )}
    </div>
  );
};
