import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { FormattedLayoutSliderImagesData } from "pages/index";

import "swiper/css";
import "swiper/css/effect-fade";

type Props = {
  data: FormattedLayoutSliderImagesData[];
};

export const HomePageSlider = ({ data }: Props) => {
  const [blurred, setBlurred] = useState(true);

  return (
    <Swiper
      className="col-span-12 h-screen w-screen"
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 3000 }}
      speed={2000}
      fadeEffect={{ crossFade: true }}
      effect="fade"
    >
      {data.map((image) => {
        const { alt, base64, url } = image;
        return (
          <SwiperSlide
            key={url}
            className="w-full h-full flex justify-center items-center"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`}
              alt={alt ?? ""}
              blurDataURL={base64}
              onLoad={() => setBlurred(false)}
              fill
              className={`opacity-70 transition-all duration-1000 ${
                blurred ? "blur-lg" : "blur-none"
              }`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
