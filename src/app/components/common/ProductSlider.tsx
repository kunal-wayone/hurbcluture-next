"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaMinus } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";

interface Product {
  id: number;
  name: string;
  category?: string;
  price?: string;
  image: string;
  rating?: string;
  review?: string;
  bestSeller?: boolean;
}

interface CardClassName {
  card: string;
  image: string;
  bestSeller: string;
  content: {
    box: string;
    title: string;
    text: string;
  };
  price: {
    show: boolean;
    text: string;
  };
}

interface ProductSliderProps {
  title: string;
  products: Product[];
  viewCard: number;
  cardSize: string;
  containerClass?: string;
  cardClassName?: CardClassName;
  useSlider?: boolean; // New prop to] decide if we use the slider or grid
  useCategorySlider?: boolean;
  categories?: string[];
  useOfferBanner?: boolean;
  offerBanner?: string;
  useFilter?: boolean;
}

const filterSections = [
  "Category",
  "Price",
  "Composition",
  "Size",
  "Pattern",
  "Type",
  "Flavours",
  "Strength",
];

export default function ProductSlider({
  title,
  products,
  viewCard,
  cardSize,
  containerClass,
  cardClassName,
  useSlider, // Destructuring the new prop
  useCategorySlider,
  categories,
  useOfferBanner,
  useFilter = false,
}: ProductSliderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categories && categories[0]
  );
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };
  // Filter products based on category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  // Rendering Swiper slider if useSlider is true
  const renderSlider = () => {
    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={viewCard || 5}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: viewCard || 5,
          },
        }}
        loop={false} // Disable loop in slider when using categories
        navigation={false}
        pagination={false}
        modules={[Navigation, Pagination]}
        className="h-auto"
        grabCursor={true} // Enable mouse drag to scroll
      >
        {filteredProducts.map((product, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <ProductCard
              product={product}
              cardSize={cardSize}
              cardClassName={cardClassName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  // Rendering grid layout if useSlider is false
  const renderGrid = () => {
    return (
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${
          viewCard + " " + "gap-4" || "4 gap-6"
        } `}
      >
        {filteredProducts.map((product, index) => (
          <div key={index} className="flex justify-center">
            <ProductCard
              product={product}
              cardSize={cardSize}
              cardClassName={cardClassName}
            />
          </div>
        ))}
      </div>
    );
  };

  // Rendering Category Selector using Swiper
  const renderCategorySelector = () => (
    <div className="mb-6">
      <Swiper
        spaceBetween={10}
        slidesPerView={5.5}
        loop={false}
        grabCursor={true} // Enable mouse dragging
        pagination={false}
        navigation={false}
        breakpoints={{
          320: { slidesPerView: 3 },
          768: { slidesPerView: 5.5 },
        }}
        modules={[Navigation, Pagination]}
        className="flex gap-4"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <button
              onClick={() => handleCategorySelect(category)}
              className={`text-base font-medium px-4  ${
                selectedCategory === category
                  ? "text-primary border-b boerder-primary "
                  : "bg-transparent text-gray-400 hover:text-black "
              }`}
            >
              {category}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <div
      className={`max-w-7xl m-auto p-4 lg:px-16 hover:cursor-pointer ${containerClass}`}
    >
      <h2 className="text-dark-primary text-xl font-bold font-[raleway] mb-4">
        {title}
      </h2>

      <div
        className={`${
          (useOfferBanner || useFilter) && "grid grid-cols-1 lg:grid-cols-5 "
        }`}
      >
        {useOfferBanner && (
          <div className="col-span-1 mb-8 lg:mb-0">
            <Image
              src={"/assets/offers/offer1.png"}
              alt={title}
              width={400}
              height={200}
              className="object-fill h-full"
            />
          </div>
        )}
        {useFilter && (
          <div className="col-span-1 mb-8 lg:mb-0 w-full max-w-xs p-4 hidden lg:block bg-white">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>
            {filterSections.map((section) => (
              <div key={section} className="mb-4 border-t pt-6 border-gray-300">
                <div
                  className="flex justify-between items-center cursor-pointer "
                  onClick={() => toggleSection(section)}
                >
                  <label className="text-base font-bold text-gray-500">
                    {section}
                  </label>
                  {openSections.includes(section) ? (
                    <FaMinus className="text-gray-500 text-[10px]" />
                  ) : (
                    <IoAdd className="text-gray-500 font-bold" />
                  )}
                </div>

                {openSections.includes(section) && (
                  <div className="mt-2 pl-2">
                    {/* Dummy filter inputs */}
                    <label className="flex items-center text-sm text-gray-600 mb-1">
                      <input type="checkbox" className="mr-2" /> Option 1
                    </label>
                    <label className="flex items-center text-sm text-gray-600 mb-1">
                      <input type="checkbox" className="mr-2" /> Option 2
                    </label>
                    <label className="flex items-center text-sm text-gray-600">
                      <input type="checkbox" className="mr-2" /> Option 3
                    </label>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <div className={`${(useOfferBanner || useFilter) && "col-span-4"}`}>
          {/* Render Category Selector with Swiper */}
          {useCategorySlider && renderCategorySelector()}

          {/* Conditionally render either the Swiper or Grid layout */}
          {useSlider ? renderSlider() : renderGrid()}
          {(useOfferBanner || useFilter) && renderSlider()}
        </div>
      </div>
    </div>
  );
}
