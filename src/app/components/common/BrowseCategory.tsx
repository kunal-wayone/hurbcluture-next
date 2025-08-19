"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CategoryCard from "./CategoryCard";

export default function BrowseCategory({ title, data }: any) {
  const [, setSwiperRef] = useState<any>(null);
  return (
    <div className="max-w-7xl m-auto p-4 lg:px-16">
      <h2 className="text-dark-primary text-xl font-bold font-[raleway] mb-4">
        {title}
      </h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          // 640: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
          // },
          // 768: {
          //   slidesPerView: 3,
          //   spaceBetween: 30,
          // },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        navigation={false}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        pagination={false}
        modules={[Autoplay, Navigation, Pagination]}
        className="h-auto "
      >
        {data &&
          data?.map((featureproduct: any, index: any) => (
            <SwiperSlide key={index} className="w-full h-full">
              <CategoryCard key={index} data={featureproduct} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
