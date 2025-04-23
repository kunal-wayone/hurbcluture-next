"use client"
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getData } from "../../../utils/server";

export interface ISlide {
  _id: string;
  slug: string;
  order: number;
  isOrdered: boolean;
  description: string;
  title: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  image: string;
  link: string;
  position: string;
}

interface PageProps {
  heroSlides?: ISlide[];
}

const HeroSection = ({}: PageProps) => {
  const swiperRef = useRef<any>(null);
  const [data, setData] = useState<ISlide[]>([]);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await getData("/api/banner");
      const data: any = response?.result;
      console.log(data);
      setData(data);
    };

    fetchBanner();
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        navigation={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={false}
        modules={[Autoplay, Navigation, Pagination]}
        className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
      >
        {data.map((slide: ISlide, index: number) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <Image
                width={1650}
                height={900}
                src={
                  slide.image
                    ? imageError || !slide.image
                      ? "/assets/banner/banner1.svg" // fallback image if error
                      : `/api/image?url=${slide?.image}`
                    : "/assets/banner/banner1.svg"
                }
                alt={slide.title}
                unoptimized
                className="object-cover w-full h-full"
                onError={handleImageError} // Handle image load error
              />
              <div className="absolute top-0 bg-gradient-to-r from-black/50 to-black/0 w-full h-full z-10"></div>
              <div className="absolute lg:block top-1/2 left-15 lg:left-20 z-20 w-full lg:w-1/2 transform -translate-y-1/2 text-white text-left">
                <h2 className="text-2xl font-[ramabhadra] lg:text-7xl">
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
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-gray-200 text-black bg-opacity-50 p-4 w-10 h-10 rounded-full mx-2 flex justify-center items-center transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-110 active:scale-95"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-gray-200 text-black bg-opacity-50 p-4 w-10 h-10 rounded-full mx-2 flex justify-center items-center transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-110 active:scale-95"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
