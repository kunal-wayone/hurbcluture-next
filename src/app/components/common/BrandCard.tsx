import React from "react";
import { Brand } from "../../../types/brand";
import Image from "next/image";
import Link from "next/link";

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  return (
    <div>
      <Link href={`/brands/${brand?.id}`} className="flex flex-col relative items-center justify-between space-y-2">

        <Image
          width={900}
          height={900}
          src={brand?.logoUrl}
          alt={brand?.name}
          className="h-32 w-32  p-2 hover:shadow-md transition  rounded-full object-cover shadow-2xl mb-2"
        />
        <h3 className="font-semibold text-lg mb-1">{brand?.name}</h3>
        {/* 
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {brand.description || <span className="text-gray-300">No description</span>}
        </p> */}

        <div className="mb-2 flex flex-wrap items-center gap-2 text-sm min-h-[20px]">
          {brand?.isVerified && (
            <span className="text-green-600 text-xs">✔ Verified</span>
          )}
          {brand?.isCertified && (
            <span className="text-blue-500 text-xs">📜 Certified</span>
          )}
          {brand.isTrending && (
            <span className="text-red-500 text-xs">🔥 Trending</span>
          )}
        </div>

        {brand.promotion && (
          <div className="mb-2 flex justify-center items-center text-center absolute top-0 right-1/4 w-10 h-10 rounded-full z-50 text-[10px] bg-primary text-white p-2 font-semibold ">
            {/* {brand.promotion} */}
            15% Off
          </div>
        )}
      </Link>
    </div>
  );
};

export default BrandCard;
