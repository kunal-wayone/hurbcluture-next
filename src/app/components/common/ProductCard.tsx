import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

export default function ProductCard({ product, cardSize, cardClassName }) {
  return (
    <Link href={`/product/${product?.id}`}>
      <div
        className={`relative w-full lg:p-2 m-auto h-auto font-[raleway] ${cardClassName?.card} `}
      >
        <div
          className={`elative rounded-lg  m-auto ${cardClassName?.image} ${
            cardSize || "lg:h-40 lg:w-full"
          } mb-3`}
        >
          <Image
            width={1650}
            height={900}
            src={product?.image}
            alt={product?.title || ""}
            className="object-cover rounded-lg w-full h-full"
          />
          {product?.bestSeller && (
            <span
            // className={`absolute scale-x-110 text-xs flex items-center justify-center text-gray-50 ${
            //   cardClassName?.bestSeller || "h-9 w-20"
            // }  top-0 right-0 bg-[#5BB35B]`}
            >
              <div className="bagde-flag-wrap">
                <p className="bagde-flag">{"Best Seller"}</p>
              </div>
            </span>
          )}
        </div>

        <div
          className={` ${
            cardClassName?.content?.box || "text-gray-800 text-center"
          } ${cardSize} m-auto`}
        >
          <h2
            className={` text-left font-semibold ${
              cardClassName?.content?.title || "text-lg lg:text-sm"
            }`}
          >
            {product?.name}
          </h2>
          <p
            className={`mt-4  flex items-center justify-between  ${
              cardClassName?.content?.text || "text-lg gap-4"
            } `}
          >
            <span className="flex">
              {Array(4)
                .fill(null)
                .map((data, index) => (
                  <IoStar
                    key={index}
                    className={`${
                      cardClassName?.content?.text || "text-lg lg:text-base"
                    } text-yellow-300`}
                  />
                ))}
              {Array(5 - 4)
                .fill(null)
                .map((data, index) => (
                  <IoStarOutline
                    key={index}
                    className={`${
                      cardClassName?.content?.text ||
                      "text-lg lg:text-base text-gray-600"
                    }`}
                  />
                ))}
            </span>
            <span
              className={`${
                cardClassName?.content?.text || "text-lg lg:text-sm"
              }`}
            >
              {product?.review || 400}+ reviews
            </span>
          </p>
          <p className="text-left text-lg lg:text-sm lowercase mb-1">
            {product?.bought || "2k Bouught last Month"}
          </p>
          {cardClassName?.price?.show ? null : (
            <p
              className={`${
                cardClassName?.price?.text || "text-left text-xl lg:text-base"
              }`}
            >
              ₹{product?.price}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
