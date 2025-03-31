"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Image from "next/image";

export default function Testimonials({ clients }: { clients: any[] }) {
  return (
    <div className="max-w-7xl m-auto p-4 lg:px-16 hover:cursor-pointer">
      <h2 className="text-dark-primary text-xl font-bold font-[raleway] mb-4">
        What our customers say
      </h2>
      <div className="mb-6 relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={3.5}
          loop={false}
          grabCursor={true}
          pagination={false}
          navigation={false}
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 3.5 },
          }}
        >
          {clients?.map((client, index) => (
            <SwiperSlide
              key={client.id || index}
              className="flex justify-center"
            >
              <Link href="/" className="text-base font-medium px-4">
                <div className="border-[1.5px]  shadow-md border-gray-300 rounded-lg p-4 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-base mb-2 text-gray-800 font-semibold">{client?.name}</h2>
                      <span className="flex gap-2">
                        {Array(client?.stars || 4)
                          .fill(null)
                          .map((_, index) => (
                            <IoStar
                              key={index}
                              className="text-xl text-yellow-500"
                            />
                          ))}
                        {Array(5 - (client?.stars || 4))
                          .fill(null)
                          .map((_, index) => (
                            <IoStarOutline
                              key={index}
                              className="text-xl text-gray-600"
                            />
                          ))}
                      </span>
                    </div>
                    <div>
                      {client?.image && (
                        <Image
                          src={client.image}
                          alt={client.name}
                          width={64}
                          height={64}
                          className="rounded-full h-14 w-14 m-auto"
                        />
                      )}
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <p className="text-secondary  text-base mb-4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using &apos;Content.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
