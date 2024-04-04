import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FormattedImageData } from "pages/types/types";
import { Photo } from "components/Layout/Photo/Photo";

import "swiper/css";
import "swiper/css/effect-fade";

type Props = {
  data: FormattedImageData[];
};

export const HomePageSlider = ({ data }: Props) => {
  const [blurred, setBlurred] = useState(true);

  return (
    <Swiper
      className="col-span-12 h-screen w-screen"
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 3000 }}
      speed={1000}
      fadeEffect={{ crossFade: true }}
      effect="fade"
    >
      {data.map((image) => {
        const { alt, base64, url, height, width } = image;
        return (
          <SwiperSlide
            key={url}
            className="w-full h-full flex justify-center items-center"
          >
            <Photo
              alt={alt}
              base64={base64}
              height={height}
              url={url}
              width={width}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
