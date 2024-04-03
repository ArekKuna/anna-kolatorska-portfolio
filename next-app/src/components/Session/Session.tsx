import { useState } from "react";
import Image from "next/image";
import { SessionData } from "pages/types/types";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  session: SessionData;
};

export const Session = ({ session }: Props) => {
  const [blurred, setBlurred] = useState(true);

  const { description, image, subTitle, title } = session;
  return (
    <div className="grid grid-cols-12 col-span-full font-didactGothic relative">
      <div className="col-start-5 col-end-12">
        <h4 className="text-5xl text-end text-[#757575] uppercase">{title}</h4>
      </div>

      <div className="grid grid-cols-12 col-span-full bg-[#D9DBDA]/20 py-10 relative">
        <div className="col-span-3 col-start-2 absolute bottom-10">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
            alt={image.alt ?? ""}
            blurDataURL={image.base64}
            width={500}
            height={500}
            onLoad={() => setBlurred(false)}
            className={`transition-all duration-1000 rounded-lg w-auto h-auto ${
              blurred ? "blur-lg" : "blur-none"
            }`}
          />
        </div>

        <div className="col-start-6 col-end-12 flex flex-col justify-center gap-20 text-end">
          <div className="flex flex-col gap-10">
            <h5 className="text-3xl">{subTitle}</h5>
            <span>{description}</span>
          </div>
          <div className="flex gap-2 items-center justify-end">
            <span className="text-2xl font-bold">Zobacz więcej</span>
            <FaChevronRight width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
