import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CategoryCard({ data }: any) {
  
  return (
    <div className="lg:p-4 ">
      <div className="flex flex-col lg:flex-row lg:gap-4 ">
        <div className="w-20 h-20 lg:w-1/2 lg:h-52 rounded-2xl overflow-hidden mb-2 lg:mb-0">
          <Image
            src={
              data?.photo
                ? `/api/image?url=${data.photo}`
                : "/assets/featureproduct/f11.png"
            }
            width={100}
            height={100}
            className="object-cover h-full w-full"
            alt={"image"}
          />
        </div>
        <h3 className="text-gray-500 lg:hidden lg:text-black text-sm text-center lg:text-left lg:text-xl font-semibold line-clamp-2 overflow-hidden h-10">
          {data?.name}
        </h3>

        <div className="hidden lg:grid gap-2 place-content-baseline w-full lg:w-1/2">
          <h3 className="text-black text-base font-semibold line-clamp-2 overflow-hidden max-h-12">
            {data?.name}
          </h3>
          {data &&
            data?.subCategories?.map((subCategory: any, index: any) => (
              <Link
                key={index}
                href={`/category/sub-category?id=${subCategory?._id}`}
                className="text-primary font-thin font-[raleway] flex items-center gap-3"
            >
                <span className="line-clamp-1">{subCategory?.name}</span>
                <IoIosArrowRoundForward className="text-2xl" />
              </Link>
            ))}
        </div>
      </div>
      <Link
        href={"/category/sub-category"}
        className=" hidden lg:inline-block text-primary font-medium font-[raleway] outline-0 py-4 hover:text-primary duration-300"
      >
        See more
      </Link>
    </div>
  );
}
