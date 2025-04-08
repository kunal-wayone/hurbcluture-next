"use client";
import Image from "next/image";
import React from "react";
import { BiUser , BiMap, BiPhone, BiEnvelope } from "react-icons/bi";

interface Customer {
  orders?: {
    user: string;
    order: string;
  };
  contact?: {
    contactMobile: string;
    contactEmail: string;
  };
  shippingAddress?: {
    user: string;
    address: string;
  };
}

interface CustomerInfoCardsProps {
  customers: Customer[];
  classNames?: {
    card?: string;
    title?: string;
    row?: string;
    icon?: string;
    text?: string;
  };
}

const CustomerInfoCards: React.FC<CustomerInfoCardsProps> = ({
  customers,
  classNames = {},
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Order Info Card */}
      <div className={`border border-gray-300 rounded-2xl shadow-md p-4 px-6 ${classNames.card || ""}`}>
        <h3 className={`font-semibold mb-4 ${classNames.title || ""}`}>Order Info</h3>
        {customers.map((customer, idx) =>
          customer.orders ? (
            <div key={idx} className="mb-4">
              <p className={`flex items-center gap-4 text-gray-400 mb-2 ${classNames.row || ""}`}>
                <BiUser className={classNames.icon || ""} />
                <span className={classNames.text || ""}>{customer.orders.user}</span>
              </p>
              <p className={`flex items-center gap-4 text-gray-400 ${classNames.row || ""}`}>
                <Image alt="" src={"/assets/icons/order.svg"} width={900} height={900} className={classNames.icon || "w-5 h-5"} />
                <span className={classNames.text || ""}>{customer.orders.order}</span>
              </p>
            </div>
          ) : null
        )}
      </div>

      {/* Contact Info Card */}
      <div className={`border border-gray-300 rounded-2xl shadow-md p-4 px-6 ${classNames.card || ""}`}>
        <h3 className={`font-semibold mb-4 ${classNames.title || ""}`}>Contact Info</h3>
        {customers.map((customer, idx) =>
          customer.contact ? (
            <div key={idx} className="mb-4">
              <p className={`flex items-center gap-4 text-gray-400 mb-2 ${classNames.row || ""}`}>
                <BiPhone className={classNames.icon || ""} />
                <span className={classNames.text || ""}>{customer.contact.contactMobile}</span>
              </p>
              <p className={`flex items-center gap-4 text-gray-400 ${classNames.row || ""}`}>
                <BiEnvelope className={classNames.icon || ""} />
                <span className={classNames.text || ""}>{customer.contact.contactEmail}</span>
              </p>
            </div>
          ) : null
        )}
      </div>

      {/* Shipping Address Card */}
      <div className={`border border-gray-300 rounded-2xl shadow-md p-4 px-6 ${classNames.card || ""}`}>
        <h3 className={`font-semibold mb-4 ${classNames.title || ""}`}>Shipping Address</h3>
        {customers.map((customer, idx) =>
          customer.shippingAddress ? (
            <div key={idx} className="mb-4">
              <p className={`flex items-center gap-4 text-gray-400 mb-2 ${classNames.row || ""}`}>
                <BiUser className={classNames.icon || ""} />
                <span className={classNames.text || ""}>{customer.shippingAddress.user}</span>
              </p>
              <p className={`flex items-center gap-4 text-gray-400 ${classNames.row || ""}`}>
                <BiMap className={classNames.icon || ""} />
                <span className={classNames.text || ""}>{customer.shippingAddress.address}</span>
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default CustomerInfoCards;
