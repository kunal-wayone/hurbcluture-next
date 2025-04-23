import React from "react";

export default function ProductCardSkeleton({ cardSize, cardClassName }) {
  return (
    <div
      className={`animate-pulse relative w-full lg:p-2 m-auto h-auto font-[raleway] ${cardClassName?.card}`}
    >
      {/* Image Skeleton */}
      <div
        className={`relative bg-gray-200 rounded-lg m-auto ${
          cardClassName?.image || ""
        } ${cardSize || "lg:h-40 lg:w-full"} mb-3`}
      ></div>

      {/* Content Skeleton */}
      <div
        className={`${
          cardClassName?.content?.box || "text-gray-800 text-center"
        } ${cardSize} m-auto`}
      >
        {/* Title */}
        <div
          className={`h-5 bg-gray-200 rounded mb-2 ${
            cardClassName?.content?.title || "w-3/4"
          }`}
        ></div>

        {/* Rating + Reviews */}
        <div
          className={`mt-4 flex items-center justify-between gap-4 ${
            cardClassName?.content?.text || "text-lg"
          }`}
        >
          <div className="flex gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 bg-gray-200 rounded-full"
                ></div>
              ))}
          </div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>

        {/* Bought Info */}
        <div className="mt-2 h-4 w-40 bg-gray-200 rounded mb-1"></div>

        {/* Price */}
        {!cardClassName?.price?.hide && (
          <div
            className={`h-6 w-24 bg-gray-200 rounded ${
              cardClassName?.price?.text || ""
            }`}
          ></div>
        )}
      </div>
    </div>
  );
}
