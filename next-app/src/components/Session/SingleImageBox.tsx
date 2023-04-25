import { BoxContent } from "@/components/Session/BoxContent";
import { SingleImage } from "@/components/Session/SingleImage";
import { SessionParagraphFragment } from "@/graphql/generated";

type SingleImageBoxProps = {
  sessionContent: SessionParagraphFragment;
  imageUrl: string;
};

export const SingleImageBox = ({
  imageUrl,
  sessionContent,
}: SingleImageBoxProps) => {
  if (!sessionContent.title || !sessionContent.description) {
    return <p>Ładowanie</p>;
  }

  return (
    <div>
      <BoxContent
        title={sessionContent.title}
        description={sessionContent.description}
      />
      <SingleImage imageUrl={imageUrl} />
    </div>
  );
};
