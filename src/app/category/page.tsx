import Image from "next/image";
import React from "react";
import Breadcrumbs from "../components/common/BreadCrumb";
import BrowseCategory from "../components/common/BrowseCategory";
import { getData } from "../../utils/server";

// Add the `searchParams` prop for App Router (server-side)
const Page = async () => {
  const category = await getData("/api/category/sub-category");

  const path = [
    { label: "Home", href: "/" },
    { label: "Category", href: `/category` },
  ];

  return (
    <div className="mt-[9.6rem] bg-white text-dark-primary">
      <div className="relative w-full h-[400px] lg:h-[600px]">
        <Image
          src="/assets/banner/blogbanner1.svg"
          alt="Hero"
          fill
          className="object-cover"
        />
        <div className="absolute top-5 max-w-7xl left-1/2 -translate-x-1/2 w-full">
          <Breadcrumbs paths={path} color="text-gray-100 text-lg" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 lg:p-0">
        <BrowseCategory title={"Browse Category"} data={category} />
      </div>
    </div>
  );
};

export default Page;
