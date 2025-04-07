"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoStar, IoStarOutline } from "react-icons/io5";

export default function ReviewAndRating() {
  const [reviewNo, setReviewNo] = useState(2);
  return (
    <div className="p-4 lg:px-16 m-auto max-w-7xl">
      <div className="w-full flex justify-between mb-4">
        <h2 className="text-dark-primary lg:text-2xl font-bold font-[raleway]">
          Customer Review and Rating
        </h2>
        <button className="rounded-2xl  text-xs lg:text-base py-1 lg:py-2 px-4 lg:px-8 text-secondary border border-gray-500">
          Add Review
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 mb-10">
        <div className="w-1/3 lg:w-2/12 lg:p-0  text-center  bg-white ">
          <span className="text-5xl mb-4 inline-block font-semibold">4.0</span>
          <span className="flex items-center justify-center gap-1 mb-4">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <IoStar key={index} className="text-lg text-yellow-400" />
              ))}
            {Array(5 - 4)
              .fill(0)
              .map((_, index) => (
                <IoStarOutline key={index} kernelMatrix={index} className="" />
              ))}
          </span>
          <span className="text-gray-800 text-sm font-medium">
            {"2332 Ratings & 221 Reviews"}
          </span>
        </div>
        <div className="w-1/3 lg:w-3/12 lg:p-0 bg-white ">
          <div className="flex flex-col items-center justify-center gap-y-9 lg:gap-y-10 gap-2">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span
                  key={index}
                  className="relative rounded-full w-full h-1 lg:h-2 bg-gray-300/50"
                >
                  <span
                    className={`absolute rounded-full bg-primary w-${index}/5 h-1 lg:h-2`}
                  ></span>
                </span>
              ))}
          </div>
        </div>
        <div className="w-1/3 lg:w-fit lg:p-4 text-xs lg:text-base space-y-6 bg-white ">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2"
              >
                {5 - index}
                <IoStarOutline className="text-base text-gray-400" />

                {"12k review"}
              </div>
            ))}
        </div>
        <div className="w-full lg:w-5/12 hidden p-4  bg-white lg:grid grid-cols-4 gap-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-center gap-4 w-24 h-24 rounded-2xl ${
                  index === 7 ? "bg-gray-900/70" : "bg-gray-300"
                }`}
              >
                {index === 7 ? (
                  <span className="text-white font-semibold">+341</span>
                ) : (
                  <CiImageOn className="text-5xl text-gray-400" />
                )}
              </div>
            ))}
        </div>
      </div>

      <AnimatePresence>
        {Array(reviewNo)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mb-8"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4">
                <div className="flex items-center gap-6 mb-2 lg:mb-0">
                  <div>
                    <Image
                      src={"/assets/logo/logo.png"}
                      alt={"image"}
                      width={100}
                      height={100}
                      className={"w-10 h-10 object-cover rounded-full"}
                    />
                  </div>
                  <h3 className="text-base lg:text-2xl font-medium">Alexender Billy</h3>
                  <p>2 month ago</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl">4.0</span>
                  <span className="flex items-center gap-1">
                    {Array(4)
                      .fill(0)
                      .map((_, index) => (
                        <IoStar
                          key={index}
                          className="text-base text-yellow-500"
                        />
                      ))}
                    {Array(5 - 4)
                      .fill(0)
                      .map((_, index) => (
                        <IoStarOutline
                          key={index}
                          className="text-base text-gray-400"
                        />
                      ))}
                  </span>
                </div>
              </div>
              <p className=" text-sm mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </p>
              <hr className="w-4/5" />
            </motion.div>
          ))}
      </AnimatePresence>

      <div>
        <span
          className="flex items-center font-medium text-primary cursor-pointer"
          onClick={() => setReviewNo(reviewNo === 2 ? 5 : 2)}
        >
          View All Review
          <IoMdArrowDropdown className="text-2xl" />
        </span>
      </div>
    </div>
  );
}
