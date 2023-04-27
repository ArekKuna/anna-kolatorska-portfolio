import { BoxContent } from "@/components/Session/BoxContent";
import { SessionParagraphFragment } from "@/graphql/generated";
import { IGetPlaiceholderReturn } from "plaiceholder";
import { SingleImage } from "./SingleImage";

type SingleImageBoxProps = {
  sessionContent: SessionParagraphFragment;
  image: IGetPlaiceholderReturn;
  imageAlt: string;
};

export const SingleImageBox = ({
  sessionContent,
  image,
  imageAlt,
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
      <SingleImage image={image} imageAlt={imageAlt} />
    </div>
  );
};
