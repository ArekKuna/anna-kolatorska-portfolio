import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FormattedStrapiImageData } from "types/types";
import { BlurredImage } from "components/Layout/BlurredImage/BlurredImage";

import "swiper/css";
import "swiper/css/effect-fade";

type Props = {
  data: FormattedStrapiImageData[];
};

export const HomePageSlider = ({ data }: Props) => {
  return (
    <Swiper
      className="col-span-12 h-screen w-screen"
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 2000 }}
      speed={1000}
      effect="fade"
      loop
    >
      {data.map((image) => {
        const { alt, base64, url } = image;
        return (
          <SwiperSlide
            key={url}
            className="w-full h-screen flex justify-center items-center"
          >
            <BlurredImage
              url={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`}
              alt={alt}
              base64={base64}
              fill
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
