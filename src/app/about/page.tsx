import React from "react";
import HeaderSection from "../components/common/HeaderSection";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-white mt-[9.6rem] max-w-7xl    p-4 lg:p-16">
      <div className="px-10">
        <HeaderSection
          title="About"
          subTitle=""
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
          className={{
            containerClass: "bg-white p-6 rounded-2xl",
            titleClass: "text-2xl font-bold mb-2",
            subTitleClass: "text-lg text-primary mb-1",
            descriptionClass: "text-sm text-gray-600",
          }}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        <div className="md:col-span-2">
          <div className="rounded-2xl overflow-hidden mb-4">
            <Image
              width={900}
              height={900}
              src="/assets/about/about1.svg"
              className="object-cover w-full h-full"
              alt="image"
            />
          </div>
          <div className="rounded-2xl p-5 bg-gray-100">
            <h3 className="text-xl text-dark-primary font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-secondary font-[raleway] text-sm/7 line-clamp-4">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden md:col-span-3">
          {" "}
          <Image
            width={900}
            height={900}
            src="/assets/about/about2.svg"
            className="object-cover w-full h-full"
            alt="image"
          />
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl p-5 bg-gray-100 mb-4">
            <h3 className="text-xl text-dark-primary font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-secondary font-[raleway] text-sm/7 line-clamp-7">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden">
              <Image
                width={900}
                height={900}
                src="/assets/about/about3.svg"
                className="object-cover w-full h-full"
                alt="image"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                width={900}
                height={900}
                src="/assets/about/about4.svg"
                className="object-cover w-full h-full"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
