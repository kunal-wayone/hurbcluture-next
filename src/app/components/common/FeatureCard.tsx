import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

export default function FeatureCard({ data, scale }: any) {
  return (
    <div
      className={`p-4 bg-[#F2F3F7] ${
        scale && "lg:scale-y-110 lg:top-[-1rem]"
      } z-[10] border-[1.5px] border-gray-300 relative`}
    >
      <h2 className="text-dark-primary text-xl font-bold font-[raleway] mb-4">
        {data?.title}
      </h2>
      {data?.isProduct ? (
        <ProductCard
          product={data?.content}
          cardSize={"lg:h-32"}
          cardClassName={{
            card: "",
            image: "",
            bestSeller: "hidden",
            content: { box: "", title: "", text: "text-xs" },
            price: { show: false, text: "" },
          }}
        />
      ) : (
        <div className="grid grid-cols-2 gap-2 ">
          {data &&
            data?.content.map((product: any, index: any) => (
              <div key={index} className="rounded-md">
                <Image
                  src={product?.image}
                  width={800}
                  height={800}
                  className="w-full lg:h-20 mb-2"
                  alt={"image"}
                />
                <h3 className="text-secondary font-thin font-[raleway]">
                  Feature 1
                </h3>
              </div>
            ))}
        </div>
      )}
      {data?.isProduct ? null : (
        <Link
          href={"/"}
          className="text-primary font-medium font-[raleway] outline-0 mt-6 inline-block hover:text-primary duration-300"
        >
          See more
        </Link>
      )}
    </div>
  );
}
