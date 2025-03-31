"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface ISlide {
  id: number;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
}

interface PageProps {
  heroSlides: ISlide[];
}

const NewLaunchSlider = ({ heroSlides }: PageProps) => {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <div className="relative w-full">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          navigation={false}
          pagination={false}
          modules={[Autoplay, Navigation, Pagination]}
          className="h-auto "
        >
          {heroSlides.map((slide: ISlide, index: number) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="relative w-full h-full rounded-3xl border border-gray-100 overflow-hidden">
                <Image
                  width={1650}
                  height={900}
                  src={slide.imageUrl}
                  alt={slide.altText}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewLaunchSlider;
