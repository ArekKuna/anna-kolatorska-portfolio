import { BoxContent } from "@/components/Session/BoxContent";
import { SessionParagraphFragment } from "@/graphql/generated";
import { SessionImageAttributes } from "@/pages/oferta/[session]";
import { SingleImage } from "./SingleImage";

type SingleImageBoxProps = {
  sessionContent: SessionParagraphFragment;
  image: SessionImageAttributes;
};

export const SingleImageBox = ({
  sessionContent,
  image,
}: SingleImageBoxProps) => {
  if (!sessionContent.title || !sessionContent.description) {
    return <p>Ładowanie</p>;
  }

  return (
    <div className="px-4 py-10 my-6 bg-gray rounded-3xl space-y-10">
      <BoxContent
        title={sessionContent.title}
        description={sessionContent.description}
      />
      <SingleImage image={image} />
    </div>
  );
};
