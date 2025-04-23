"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import FeatureCard from "./FeatureCard";

export default function FeatureProductSection({ data, scale }: any) {
  const [, setSwiperRef] = useState<any>(null);

  return (
    <div className="max-w-7xl m-auto p-4 lg:pb-0 lg:px-16 h-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        navigation={false}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        pagination={false}
        modules={[Autoplay, Navigation, Pagination]}
        className="overflow-visible h-full lg:top-[-2rem]"
      >
        {data &&
          data.map((featureproduct: any, index: any) => (
            <SwiperSlide key={index} className="flex h-full">
              <FeatureCard key={index} scale={scale} data={featureproduct} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
