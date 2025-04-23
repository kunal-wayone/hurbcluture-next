import Image from "next/image";
import React from "react";
import Breadcrumbs from "../../components/common/BreadCrumb";
import ProductSlider from "../../components/common/ProductSlider";
import { getData } from "../../../utils/server";

const Page = async () => {
  const subCategory = await getData("/api/sub-category");
  const path = [
    { label: "Home", href: "/" },
    { label: "Category", href: `/category` },
    { label: "Sub Category", href: `/category/sub-category` },
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

      <ProductSlider
        title={""}
        products={[]}
        viewCard={4}
        cardSize={"lg:h-32"}
        containerClass={"p-4 lg:px-16 py-8"}
        cardClassName={{
          card: "",
          image: "",
          bestSeller: "h-8 w-16 text-[10px]",
          content: { box: "", title: "", text: "text-xs" },
          price: { hide: false, text: "" },
        }}
        useSlider={false}
        useCategorySlider={false}
        categories={subCategory?.result}
        useSideCategory={true}
        sideCategoryTitle={"Sub Category"}
      />
    </div>
  );
};

export default Page;
