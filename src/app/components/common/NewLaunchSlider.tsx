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
                <div className="absolute top-0 bg-gradient-to-r from-black/50 to-black/0 w-full h-full z-10"></div>
                <div className="absolute lg:block top-1/2 left-5 lg:left-20 z-20 w-full lg:w-1/2 transform -translate-y-1/2 text-white text-left">
                  <h2 className="text-xl font-[ramabhadra] lg:text-7xl">
                    {slide.title}
                  </h2>
                  <p className="mt-1 lg:mt-4 font-semibold w-3/5 lg:w-4/5 lg:pl-2 text-xs lg:text-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewLaunchSlider;
