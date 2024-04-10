import { SessionData } from "types/types";
import { SessionTitleLtr } from "components/SessionInfo/SessionInfoLtr/SessionTitleLtr";
import { SessionCardLtr } from "components/SessionInfo/SessionInfoLtr/SessionCardLtr";

type Props = {
  session: SessionData;
};

export const SessionInfoLtr = ({ session }: Props) => {
  const { description, image, subTitle, title } = session;

  return (
    <div className="col-span-full grid grid-cols-12">
      <SessionTitleLtr title={title} />

      <SessionCardLtr
        sessionDescription={description}
        sessionSubTitle={subTitle}
        imageData={image}
      />
    </div>
  );
};
