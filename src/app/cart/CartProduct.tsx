"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function CartProduct() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };
  return (
    <div className="flex flex-col lg:flex-row items-start justify-start p-4 gap-4 ">
      <div className="h-52 lg:h-28 w-full lg:w-1/5 rounded-2xl overflow-hidden p-2">
        <Image
          src={"/assets/featureproduct/f13.png"}
          alt=""
          width={900}
          height={900}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col items lg:w-3/5">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">
              Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN
            </h3>
          </div>
          <p className="text-gray-400 text-sm ">
            ANANDAMYDE SPECIAL INTRODUCTORY OFFER
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold">₹ 12,100</span>
          <span className="line-through text-gray-400 font-semibold ">
            ₹ 14,100
          </span>

          <div className="flex items-center ml-auto lg:ml-0 gap-4">
            <button
              className="w-7 h-7 bg-gray-200 text-xl rounded-full"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="text-primary text-3xl font-bold">{quantity}</span>
            <button
              className="w-7 h-7 bg-gray-200 text-xl rounded-full"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/5 lg:h-24 flex flex-row lg:flex-col justify-between items-center">
        <p className="text-sm font-medium text-gray-400">
          Deliver by <span className="text-primary">{"Fri Mar 14"}</span>
        </p>
        <div className="flex items-center gap-1 lg:mt-auto">
          <IoClose className="text-xl text-red-600/50" />
          <span className="text-gray-400 text-sm font-medium">
            Remove From Cart
          </span>
        </div>
      </div>
    </div>
  );
}
