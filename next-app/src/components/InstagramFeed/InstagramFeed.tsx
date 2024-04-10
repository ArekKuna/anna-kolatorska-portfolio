import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import { useInstagramFeed } from "components/InstagramFeed/useInstagramFeed";
import { InstgramFeedGalleryIcon } from "components/Icons/InstgramFeedGalleryIcon";
import { InstagrFeedVideoIcon } from "components/Icons/InstagrFeedVideoIcon";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { FormattedStrapiImageData, InstagramImageData } from "types/types";
import Image from "next/image";
import Link from "next/link";
import ReactModal from "react-modal";
import dayjs from "dayjs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { BlurredImage } from "components/Layout/BlurredImage/BlurredImage";

type Props = {
  instagramProfileImage: FormattedStrapiImageData;
};

export const InstagramFeed = ({ instagramProfileImage }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeFeed, setActiveFeed] = useState<InstagramImageData | null>(null);

  const { instagramFeedData, error, loadingData } = useInstagramFeed();

  if (loadingData) {
    return <div>DUPA</div>;
  }

  if (!instagramFeedData) {
    return <div>Sraka</div>;
  }

  return (
    <>
      <div className="col-span-12 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <BlurredImage
              url={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${instagramProfileImage.url}`}
              alt={instagramProfileImage.alt}
              width={150}
              height={150}
              base64={instagramProfileImage.base64}
              rounded
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h5 className="text-8xl leading-[50px] font-jomhuria">
              aniakolatorska
            </h5>

            <div className="px-4 py-1 text-base shadow-md shadow-black cursor-pointer rounded-lg active:translate-y-[2px] hover:-translate-y-[2px] duration-200">
              <Link
                href="https://www.instagram.com/aniakolatorska/"
                target="_blank"
              >
                <span className="uppercase">Obserwuj</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="px-[200px] py-10 bg-[#D9DBDA]/20 relative">
          <Swiper
            slidesPerView={4}
            grid={{
              rows: 2,
              fill: "row",
            }}
            navigation
            spaceBetween={10}
            modules={[Grid, Navigation]}
            className="main-instagram-feed !static"
          >
            {instagramFeedData?.map((feeditem) => {
              const { caption, id, media_type, media_url, thumbnail_url } =
                feeditem;

              const isImage =
                media_type === "IMAGE" || media_type === "CAROUSEL_ALBUM";

              return (
                <SwiperSlide key={id} className="cursor-pointer relative group">
                  <Image
                    alt={caption}
                    src={isImage ? media_url : thumbnail_url ?? ""}
                    width={1000}
                    height={1000}
                    className="group-hover:blur-sm w-full h-full rounded-lg"
                  />
                  {media_type === "CAROUSEL_ALBUM" && (
                    <InstgramFeedGalleryIcon
                      height={24}
                      width={24}
                      fill="white"
                      className="absolute top-0 right-0 m-1"
                    />
                  )}
                  {media_type === "VIDEO" && (
                    <InstagrFeedVideoIcon
                      height={24}
                      width={24}
                      fill="white"
                      className="absolute top-0 right-0 m-1"
                    />
                  )}
                  <span
                    onClick={() => {
                      setIsModalOpen(true);
                      setActiveFeed(feeditem);
                      document.body.style.overflow = "hidden";
                    }}
                    className="z-10 rounded-lg bg-black/70 text-white p-5 h-full w-full flex justify-center text-center items-center absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {caption}
                  </span>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <ReactModal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        onRequestClose={() => {
          setIsModalOpen(false);
          document.body.style.overflow = "auto";
        }}
        ariaHideApp={false}
        className="bg-white outline-none"
        style={{
          overlay: {
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0, 0.9)",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            padding: 0,
            borderRadius: "12px",
            width: "70%",
            height: "80%",
          },
        }}
      >
        <div className="w-full h-full flex justify-center items-center overflow-hidden relative rounded-l-xl">
          <div className="h-full w-full overflow-hidden">
            {activeFeed?.media_type === "VIDEO" && (
              <video
                src={activeFeed.media_url}
                autoPlay
                loop
                className="w-full h-full object-fill"
              ></video>
            )}
            {activeFeed?.media_type === "IMAGE" && (
              <Image
                alt={activeFeed.caption}
                src={activeFeed.media_url}
                width={500}
                height={1000}
                className="w-full h-full rounded-l-xl"
              />
            )}
            {activeFeed?.media_type === "CAROUSEL_ALBUM" &&
              activeFeed.children?.data.length && (
                <Swiper
                  slidesPerView={1}
                  className="w-full h-full instagram-feed-sub-gallery"
                  navigation
                  modules={[Navigation]}
                >
                  {activeFeed.children.data.map((item) => (
                    <SwiperSlide className="w-full h-full inline-block">
                      {item.media_type === "IMAGE" ? (
                        <Image
                          alt={activeFeed.caption}
                          src={item.media_url}
                          fill
                          className="w-full h-full rounded-l-xl"
                        />
                      ) : (
                        <video
                          src={item.media_url}
                          controls
                          autoPlay
                          loop
                          className="w-full h-full object-fill rounded-l-xl"
                        ></video>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
          </div>
          <div className="w-1/2 h-full flex flex-col">
            <div className="flex gap-2 justify-start items-center border-b border-b-black p-4">
              <div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${instagramProfileImage.url}`}
                  alt={instagramProfileImage.alt}
                  width={32}
                  height={32}
                  blurDataURL={instagramProfileImage.base64}
                  className="rounded-full"
                />
              </div>

              <div className="flex gap-1">
                <span>aniakolatorska</span>
                <span>|</span>
                <span>Obserwuj</span>
              </div>
            </div>

            <div className="p-4 flex-1 flex border-b border-b-black">
              <div className="mr-4 w-[40px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${instagramProfileImage.url}`}
                  alt={instagramProfileImage.alt}
                  width={150}
                  height={150}
                  blurDataURL={instagramProfileImage.base64}
                  className="rounded-full w-full"
                />
              </div>
              <div className="w-full">
                <span>{activeFeed?.caption}</span>
              </div>
            </div>
            <div className="p-4 flex justify-between">
              <span>Opublikowano</span>
              <span>{dayjs(activeFeed?.timestamp).format("YY-MM-DD")}</span>
            </div>
          </div>

          <div className="absolute top-[10px] right-[10px]">
            <MdClose
              size={32}
              className="cursor-pointer hover:opacity-50"
              onClick={() => {
                setIsModalOpen(false);
                document.body.style.overflow = "auto";
              }}
            />
          </div>
        </div>
      </ReactModal>
    </>
  );
};
