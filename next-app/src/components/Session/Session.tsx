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

  const { alt, base64, height, url, width } = image;
  return (
    <div className="col-span-full grid grid-cols-12">
      <div className="col-span-full col-end-12">
        <h4 className="text-5xl text-end text-[#757575] leading-relaxed">
          {title}
        </h4>
      </div>

      <div className="bg-[#2a7951]/20 py-10 col-span-full grid grid-cols-12 relative">
        <div className="col-span-2 col-start-2 absolute bottom-10">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`}
            alt={alt ?? ""}
            blurDataURL={base64}
            width={width}
            height={height}
            onLoad={() => setBlurred(false)}
            className={`transition-all duration-1000 rounded-lg w-full ${
              blurred ? "blur-lg" : "blur-none"
            }`}
          />
        </div>

        <div className="flex flex-col justify-center gap-10 text-end col-start-5 col-span-7">
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

// bg-[#D9DBDA]/20
