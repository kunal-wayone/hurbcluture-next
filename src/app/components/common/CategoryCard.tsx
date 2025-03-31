import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CategoryCard({ data }: any) {
  return (
    <div className="p-4 ">
      <div className="flex gap-4 ">
        <div className="w-full lg:w-1/2 h-52 rounded-2xl overflow-hidden">
          <Image
            src={data?.image ?? "/assets/featureproduct/f11.png"}
            width={100}
            height={100}
            className="object-cover h-full w-full"
            alt={"image"}
          />
        </div>
        <div className="grid gap-2 w-full lg:w-1/2">
          <h3 className="text-black text-xl font-semibold">{data?.title}</h3>
          {data &&
            data?.category.map((product: any, index: any) => (
              <Link key={index} href={""} className="text-primary font-thin font-[raleway] flex items-center gap-3">
                {product?.name}
                <IoIosArrowRoundForward className="text-2xl" />
              </Link>
            ))}
        </div>
      </div>
      <Link
        href={"/"}
        className="text-primary font-medium font-[raleway] outline-0 py-4 inline-block hover:text-primary duration-300"
      >
        See more
      </Link>
    </div>
  );
}
