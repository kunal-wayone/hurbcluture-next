import React from "react";
import Breadcrumbs from "../components/common/BreadCrumb";
import CartProduct from "../cart/CartProduct";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function page() {
  const path = [
    { label: "Home", href: "/" },
    { label: "Product Detail", href: `/prduct/${1}` },
    { label: "Order Review", href: `/order-review` },
  ];
  return (
    <div className="mt-[9.6rem] bg-white text-dark-primary">
      <Breadcrumbs paths={path} />
      <div className="max-w-7xl p-4 lg:px-16 m-auto">
        <div className="flex items-start  gap-12">
          <div>
            <h3 className="text-2xl font-[ramabhadra] font-medium mb-5">
              Order ID: 22345332
            </h3>
            <p className="text-gray-400">March 12, 2025 at 3:32 pm</p>
          </div>
          <button className="text-gray-50 bg-primary rounded-xl p-2.5 px-6 text-sm cursor-pointer">
            Track Your Order
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
          <div className="lg:col-span-5">
            <CartProduct />
            <hr className="border-gray-300" />
            <div className="lg:col-span-2">
              <div className="p-4 rounded-2xl mb-8">
                <h3 className="text-xl  text-left font-bold mb-2 rounded-lg text-gray-800">
                  Order Summery
                </h3>{" "}
                <div className="flex items-center  justify-start gap-6 mb-8">
                  <h3 className="text-xs text-center bg-green-500/20 text-primary p-1.5 px-3 rounded-lg text-gray-400">
                    Payment Completed
                  </h3>{" "}
                  <span className="text-gray-400 font-semibold flex items-center gap-2 my-4 text-center justify-center">
                    <RiSecurePaymentLine className="text-xl text-primary" />{" "}
                    100% Secure Payment
                  </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-500 mb-2">Price (1 item)</p>
                  <p className="text-gray-500 mb-2">₹ 14,400</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-500 mb-2">Discount</p>
                  <p className="text-gray-500 mb-2">₹ 2,300</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-500 mb-2">Delivery Charges</p>
                  <p className="text-gray-500 mb-2">Free</p>
                </div>
                <div className="flex items-center justify-between w-full mb-2">
                  <p className="text-gray-500 mb-2">Tax</p>
                  <p className="text-gray-500 mb-2">₹ 37</p>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-bold">Total:</span>
                    <span className="text-gray-900 font-bold">₹ 12,100</span>
                  </div>
                </div>
                <hr className="mb-4 border-gray-300" />
                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 ">Paid by customer:</span>
                    <span className="text-gray-500 ">₹ 12,100</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Download the payment invoice:</span>
                    <span className="text-primary">Download</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
