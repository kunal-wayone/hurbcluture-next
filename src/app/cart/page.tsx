import React from "react";
import CartProduct from "./CartProduct";
import { RiSecurePaymentLine } from "react-icons/ri";
import Link from "next/link";
import AuthGuard from "../components/common/AuthGuard";
import Wrapper from "../components/common/Wrapper";
import BreadcrumbsFromQuery from "../components/common/BreadcrumbsFromQuery";

export default function page() {
  // const path = [
  //   { label: "Home", href: "/" },
  //   { label: "Cart", href: "/cart" },
  // ];
  return (
    <AuthGuard>
      <Wrapper>
        <div className=" bg-white text-dark-primary">
          <BreadcrumbsFromQuery />
          <div className="max-w-7xl p-4 lg:px-16 m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
              <div className="lg:col-span-6">
                <div className="flex items-center justify-between w-full bg-gray-300/30 p-4 rounded-2xl mb-8">
                  <div className="text-gray-500">
                    <h3>
                      <b className="mr-4 text-gray-900">Deliver to:</b>Prashant,
                      132001
                    </h3>
                    <p>Nilgiri Apartment, Delhi, 110019, India</p>
                  </div>
                  <div className="flex flex-col justify-center  text-center text-primary">
                    <span className="font-semibold">Change Address</span>
                  </div>
                </div>

                <CartProduct
                  product={{
                    image: "/assets/featureproduct/f13.png",
                    title:
                      "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
                    subtitle: "ANANDAMYDE SPECIAL INTRODUCTORY OFFER",
                    price: 12100,
                    originalPrice: 14100,
                    deliveryDate: "Fri Mar 14",
                  }}
                  showSubtitle={true}
                  showOriginalPrice={true}
                  showQuantity={true}
                  showRemoveOption={true}
                  showRate={false}
                  classNames={{
                    wrapper: "bg-white",
                    price: "text-green-600",
                  }}
                />

                <hr className="text-gray-200 border-[1px]" />
                <CartProduct
                  product={{
                    image: "/assets/featureproduct/f13.png",
                    title:
                      "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
                    subtitle: "ANANDAMYDE SPECIAL INTRODUCTORY OFFER",
                    price: 12100,
                    originalPrice: 14100,
                    deliveryDate: "Fri Mar 14",
                  }}
                  showSubtitle={true}
                  showOriginalPrice={true}
                  showQuantity={true}
                  showRemoveOption={true}
                  showRate={false}
                  classNames={{
                    wrapper: "bg-white",
                    price: "text-green-600",
                  }}
                />
              </div>

              <div className="lg:col-span-2">
                <div className="p-4 rounded-2xl shadow-md bg-gray-300/30 border border-gray-300/30">
                  <h3 className="font-bold mb-4 text-center text-gray-400">
                    Price details
                  </h3>
                  <hr className="mb-4 border-gray-300" />
                  <div className="flex items-center justify-between w-full">
                    <p className="text-gray-500 mb-2">Price (1 item)</p>
                    <p className="text-gray-500 mb-2">₹ 14,400</p>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <p className="text-gray-500 mb-2">Discount</p>
                    <p className="text-gray-500 mb-2">₹ 2,300</p>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <p className="text-gray-500 mb-2">Price (1 item)</p>
                    <p className="text-gray-500 mb-2">Free</p>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <p className="text-gray-500 mb-2">Delivery Charges</p>
                    <p className="text-gray-500 mb-2">Free</p>
                  </div>
                  <div className="flex items-center justify-between w-full mb-2">
                    <p className="text-gray-500 mb-2">Tax</p>
                    <p className="text-gray-500 mb-2">₹ 37</p>
                  </div>
                  <hr className="mb-4 border-gray-300" />

                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-bold">Total:</span>
                      <span className="text-gray-900 font-bold">₹ 12,100</span>
                    </div>
                  </div>

                  <Link
                    href={"/order-summery"}
                    className="bg-primary p-2 px-10 text-gray-50 rounded-xl"
                  >
                    Proceed to checkout
                  </Link>

                  <span className="text-gray-400 font-semibold flex items-center gap-2 my-4 mx-auto text-center justify-center">
                    <RiSecurePaymentLine className="text-xl text-primary" /> 100%
                    Secure Payment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </AuthGuard>
  );
}
