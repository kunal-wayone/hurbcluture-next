import React from "react";
import Breadcrumbs from "../../components/common/BreadCrumb";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdBriefcase, IoMdCheckmark } from "react-icons/io";
import DoctorProfileSection from "../components/DoctorProfileSection";
import ProductSlider from "../../components/common/ProductSlider";
import { products2 } from "../../page";
import AuthGuard from "../../components/common/AuthGuard";
import Wrapper from "../../components/common/Wrapper";

export default async function page(ctx: any) {
  const { doctor } = await ctx.params;
  const path = [
    { label: "Home", href: "/" },
    { label: "Doctor Consultation", href: `/doctor-consultation` },
    { label: doctor, href: `/products/${doctor}` },
  ];

  return (
    <AuthGuard>
      <Wrapper>
        <div className=" bg-white">
          <Breadcrumbs paths={path} />
          <div className="max-w-7xl p-4 lg:px-16 m-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full lg:w-1/4">
                <Image
                  src={"/assets/profile/profile.svg"}
                  alt="Doctor"
                  width={900}
                  height={900}
                  className="h-60 w-64 m-auto object-contain mb-8 rounded-2xl"
                />

                <div className="flex flex-row md:flex-col justify-between md:justify-start items-start pt-4 gap-4 mb-8">
                  <div className="text-left">
                    <p className="text-base font-semibold text-gray-800">
                      {"1 Session x 60 Min"}
                    </p>
                    <p className="text-2xl font-medium text-gray-800">₹ {"900"}</p>
                  </div>
                  <button
                    // onClick={()=>console.log("Book Session")}
                    className="bg-primary hover:bg-primary/90 transition text-white px-8 py-3 rounded-xl text-sm font-medium"
                  >
                    Book a Session
                  </button>
                </div>

                <p className="text-xl font-medium text-gray-800">Language</p>
                <div className="flex items-center gap-4 py-4">
                  <p className="text-sm bg-[#E4FFE4] text-primary w-full text-center rounded-lg p-2 px-8 text-gray-500">
                    {"English"}
                  </p>
                  <p className="text-sm bg-[#E4FFE4] text-primary w-full text-center rounded-lg p-2 px-8 text-gray-500">
                    {"Hindi"}
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-4/5">
                <div className="flex flex-col justify-center md:text-left gap-1 ">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {"Dr. Satish Verma"}
                  </h2>

                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-xs bg-[#E4FFE4] text-primary rounded-lg p-1.5 px-3 text-gray-500">
                      {" "}
                      {"MBBS"}
                    </p>
                    <p className="text-xs bg-[#E4FFE4] text-primary rounded-lg p-1.5 px-3 text-gray-500">
                      {" "}
                      {"Cardio"}
                    </p>
                    <p className="text-base text-gray-500 flex items-center gap-2">
                      <IoMdBriefcase /> {"7+ Years"}
                    </p>
                    <div className="flex justify-start items-center md:hidden gap-1 md:mt-1 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-base ${i < 4 ? "text-yellow-400" : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex justify-start items-center gap-1 mt-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-base ${i < 4 ? "text-yellow-400" : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-500 ">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature from
                    45 BC, making it over 2000 years old. Richard McClintock, a
                    Latin professor at Hampden-Sydney College in Virginia, looked up
                    one of the more obscure Latin words, consectetur, from a Lorem
                    Ipsum passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source. Lorem
                    Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus
                    Bonorum et Malorum.
                  </p>
                </div>
                <div className="py-4 md:p-4 md:px-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {"Package Include:"}
                  </h2>
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="flex items-center gap-4 mb-4">
                        <span className="rounded-full p-1 flex itece justify-center bg-[#5BB35B69]/80">
                          <IoMdCheckmark className="text-primary" />{" "}
                        </span>
                        <p className="text-gray-500">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical Latin
                          literature from 45 BC, making it over 2000 years old.
                          Richard McClintock,
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <DoctorProfileSection title={"Recomended Doctor"} />
          </div>

          <ProductSlider
            title={"Doctor Recommended"}
            products={products2}
            viewCard={5}
            cardSize={""}
            containerClass={"bg-white p-4 lg:px-16 py-8"}
            cardClassName={{
              card: "",
              image: "",
              bestSeller: "h-8 w-16 text-[10px]",
              content: { box: "", title: "", text: "text-xs" },
              price: { hide: false, text: "" },
            }}
            useSlider={true}
            useCategorySlider={true}
            categories={[]}
          />

          <ProductSlider
            title={"Recommended for you"}
            products={products2}
            viewCard={5}
            cardSize={""}
            containerClass={"bg-white p-4 lg:px-16 py-8"}
            cardClassName={{
              card: "",
              image: "",
              bestSeller: "h-8 w-16 text-[10px]",
              content: { box: "", title: "", text: "text-xs" },
              price: { hide: false, text: "" },
            }}
            useSlider={true}
            useCategorySlider={true}
            categories={[]}
          />
        </div>
      </Wrapper>
    </AuthGuard>
  );
}
