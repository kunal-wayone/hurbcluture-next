import React from "react";
import Breadcrumbs from "../components/common/BreadCrumb";
import HeaderSection from "../components/common/HeaderSection";
import DoctorProfileSection from "./components/DoctorProfileSection";
import ProductSlider from "../components/common/ProductSlider";
import { products2 } from "../page";

export default function page() {
  const path = [
    { label: "Home", href: "/" },
    { label: "Doctor Consultation", href: `/doctor-consultation` },
  ];
  return (
    <div className="mt-[9.6rem] bg-white text-dark-primary">
      <Breadcrumbs paths={path} />
      <div className="max-w-7xl p-4 lg:px-16 m-auto">
        <HeaderSection
          title={"Doctor Consultation"}
          subTitle={""}
          description={
            "Welcome to the hassle-free virtual waiting room of our hemp-based company! Here, we offer personalized consultations with expert hemp doctors who will recommend all-natural hemp products for your unique healthcare needs. Whether you seek relief from chronic pain, anxiety, or sleep issues, our scientifically-backed products promise safe and effective results without traditional medication's side effects. Say goodbye to long wait times and co-pays as our team takes the time to understand you and make tailored recommendations. Embrace the natural healing power of hemp, and let us guide you on your healthcare journey!"
          }
          className={{
            containerClass: "bg-white rounded-2xl",
            titleClass: "text-2xl font-bold mb-2",
            subTitleClass: "text-lg text-primary mb-1",
            descriptionClass: "text-sm text-gray-600",
          }}
        />

        <DoctorProfileSection />
      </div>

      <ProductSlider
        title={"Doctor Recommended"}
        products={products2}
        viewCard={5}
        cardSize={""}
        containerClass={"bg-white py-8"}
        cardClassName={{
          card: "",
          image: "",
          bestSeller: "h-8 w-16 text-[10px]",
          content: { box: "", title: "", text: "text-xs" },
          price: { show: false, text: "" },
        }}
        useSlider={true}
        useCategorySlider={true}
        categories={[]}
      />

      <ProductSlider
        title={"Doctor Recommended"}
        products={products2}
        viewCard={4}
        cardSize={""}
        containerClass={"bg-white py-8"}
        cardClassName={{
          card: "",
          image: "",
          bestSeller: "h-8 w-16 text-[10px]",
          content: { box: "", title: "", text: "text-xs" },
          price: { show: false, text: "" },
        }}
        useSlider={true}
        useCategorySlider={true}
        categories={[]}
        useFilter={true}
      />
    </div>
  );
}
