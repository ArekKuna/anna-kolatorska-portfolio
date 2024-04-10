import { SessionData } from "types/types";
import { SessionTitleRtl } from "components/SessionInfo/SessionInfRtl/SessionTitleRtl";
import { SessionCardRtl } from "components/SessionInfo/SessionInfRtl/SessionCardRtl";

type Props = {
  session: SessionData;
};

export const SessionInfoRtl = ({ session }: Props) => {
  const { description, image, subTitle, title } = session;

  return (
    <div className="col-span-full grid grid-cols-12">
      <SessionTitleRtl title={title} />

      <SessionCardRtl
        sessionDescription={description}
        sessionSubTitle={subTitle}
        imageData={image}
      />
    </div>
  );
};
