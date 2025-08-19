import React from "react";
import BrandCard from "./BrandCard";
import { Brand } from "../../../types/brand";

interface BrandCarouselProps {
  brands: Brand[];
}

const BrandCarousel: React.FC<BrandCarouselProps> = ({ brands }) => {
  return (
    <div className="overflow-x-auto scrollbar-hide flex space-x-4 py-4">
      {brands.map((brand) => (
        <div key={brand.id} className="min-w-[250px]">
          <BrandCard brand={brand} />
        </div>
      ))}
    </div>
  );
};

export default BrandCarousel;
