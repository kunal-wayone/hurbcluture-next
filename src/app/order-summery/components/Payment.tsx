"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { JSX, useState } from "react";
import Image from "next/image";
import { FaCalendarAlt, FaCreditCard } from "react-icons/fa";

type PaymentMethod = "phonepe" | "googlepay" | "amazonpay" | "card" | "cod";

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null
  );

  const renderDetails = () => {
    if (!selectedMethod) return null;

    let content: JSX.Element;

    switch (selectedMethod) {
      case "phonepe":
        content = (
          <>
            Pay using your PhonePe UPI ID:{" "}
            <input
              type="text"
              className="w-full mt-1 p-2.5 px-8 border-[1.5px] border-gray-400 outline-0 rounded-xl"
              placeholder="UPI Id"
            />
          </>
        );
        break;

      case "googlepay":
        content = (
          <>
            Google Pay UPI ID:{" "}
            <input
              type="text"
              className="w-full mt-1 p-2.5 px-8 border-[1.5px] border-gray-400 outline-0 rounded-xl"
              placeholder="UPI Id"
            />
          </>
        );
        break;

      case "amazonpay":
        content = <>Amazon Pay will redirect to your Amazon wallet.</>;
        break;

      case "card":
        content = (
          <>
            <div className="mb-6 relative">
              <label className="block text-sm font-medium px-3 absolute -top-1.5 left-5 bg-white">
                Card Holder Name
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2.5 px-8 border-[1.5px] border-gray-400 outline-0 rounded-xl"
                placeholder="Enter Cardholder's Name"
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-sm font-medium px-3 absolute -top-1.5 left-5 bg-white">
                Card Number
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2.5 px-8 border-[1.5px] border-gray-400 outline-0 rounded-xl"
                placeholder="1234 5678 9012 3456"
              />
              <FaCreditCard className="absolute text-gray-400 right-5 top-1/2 -translate-y-1/2 " />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2 relative">
                <label className="block text-sm font-medium px-3 absolute -top-1.5 left-5 bg-white">
                  Expiry
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2.5 px-8 border-[1.5px] border-gray-400 outline-0 rounded-xl"
                  placeholder="MM/YY"
                />
              </div>
              <div className="w-1/2 relative">
                <label className="block text-sm font-medium px-3 absolute -top-1.5 left-5 bg-white">
                  CVV
                </label>
                <input
                  type="password"
                  className="w-full mt-1 p-2.5 px-8 border-[1.5px] border-gray-400 outline-0 rounded-xl"
                  placeholder="123"
                />
                <FaCalendarAlt className="absolute text-gray-400 right-5 top-1/2 -translate-y-1/2 " />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <label className="relative inline-block w-10 h-5 cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="bg-gray-300 peer-checked:bg-green-500 w-full h-full rounded-full transition duration-300 ease-in-out"></div>
                <div className="absolute top-1 left-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
              </label>
              <span className="text-sm font-medium">Save this card</span>
            </div>
          </>
        );
        break;

      case "cod":
        content = <>You’ll pay in cash when the order is delivered.</>;
        break;

      default:
        return null;
    }

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedMethod}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-4 w-full sm:w-3/5 rounded-xl "
        >
          {content}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className=" mx-auto p-6 bg-white ">
      <h3 className="text-xl font-bold mb-4">Payment Option</h3>
      <h3 className="text-lg font-semibold mb-4">UPI</h3>

      <div className="space-y-4 mb-8">
        {/* PhonePe */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="phonepe"
            onChange={() => setSelectedMethod("phonepe")}
            className="accent-green-600 w-4 h-4"
          />
          <Image
            src="/assets/payment/ppay.svg"
            alt="PhonePe"
            width={30}
            height={30}
            className="w-20 "
          />
        </label>

        {/* Google Pay */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="googlepay"
            onChange={() => setSelectedMethod("googlepay")}
            className="accent-green-600 w-4 h-4"
          />
          <Image
            src="/assets/payment/gpay.svg"
            alt="Google Pay"
            width={30}
            height={30}
            className="w-20 "
          />
        </label>

        {/* Amazon Pay */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="amazonpay"
            onChange={() => setSelectedMethod("amazonpay")}
            className="accent-green-600 w-4 h-4"
          />
          <Image
            src="/assets/payment/apay.svg"
            alt="Amazon Pay"
            width={30}
            height={30}
            className="w-20 "
          />
        </label>

        {/* Add Card */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="card"
            onChange={() => setSelectedMethod("card")}
            className="accent-green-600 w-4 h-4"
          />

          <span>Add Card</span>
        </label>

        {/* Cash on Delivery */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="cod"
            onChange={() => setSelectedMethod("cod")}
            className="accent-green-600 w-4 h-4"
          />

          <span>Cash on Delivery</span>
        </label>
      </div>

      {renderDetails()}
    </div>
  );
}
