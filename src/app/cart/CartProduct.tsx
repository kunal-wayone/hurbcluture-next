"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface ProductData {
  image: string;
  title: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  deliveryDate?: string;
}

interface CartProductProps {
  product: ProductData;
  showImage?: boolean;
  showTitle?: boolean;
  showSubtitle?: boolean;
  showPrice?: boolean;
  showOriginalPrice?: boolean;
  showQuantity?: boolean;
  showDeliveryDate?: boolean;
  showRemoveOption?: boolean;
  showThirdSection?: boolean;
  showRate?: boolean;
  showStatus?: boolean;
  classNames?: {
    wrapper?: string;
    imageWrapper?: string;
    image?: string;
    title?: string;
    subtitle?: string;
    price?: string;
    originalPrice?: string;
    quantity?: string;
    deliveryText?: string;
    remove?: string;
    secondSection?: string;
    rateText?: string;
  };
}

const CartProduct: React.FC<CartProductProps> = ({
  product,
  showImage = true,
  showTitle = true,
  showSubtitle = true,
  showPrice = true,
  showOriginalPrice = true,
  showQuantity = true,
  showDeliveryDate = true,
  showRemoveOption = true,
  showThirdSection = true,
  showRate = false,
  showStatus=true,
  classNames = {},
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div
      className={`flex flex-col lg:flex-row items-start justify-start p-4 gap-2 ${
        classNames?.wrapper || ""
      }`}
    >
      {showImage && (
        <div
          className={`h-52 lg:h-28 w-full lg:w-1/5 rounded-2xl overflow-hidden p-2 ${
            classNames?.imageWrapper || ""
          }`}
        >
          <Image
            src={product?.image}
            alt={product?.title}
            width={900}
            height={900}
            className={`w-full h-full ${classNames?.image || ""}`}
          />
        </div>
      )}

      <div
        className={`flex flex-col items ${
          classNames?.secondSection || "lg:w-3/5"
        }`}
      >
        <div className="mb-6">
          <div className="flex items-center justify-between">
            {showTitle && (
              <h3
                className={`text-base font-semibold ${classNames?.title || ""}`}
              >
                {product?.title}
              </h3>
            )}
          </div>
          {showSubtitle && product?.subtitle && (
            <p
              className={`text-gray-400 text-sm ${classNames?.subtitle || ""}`}
            >
              {product?.subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4">
          {showPrice && (
            <span
              className={`text-2xl font-semibold ${classNames?.price || ""}`}
            >
              ₹ {product?.price.toLocaleString()}
            </span>
          )}
          {showOriginalPrice && product?.originalPrice && (
            <span
              className={`line-through text-gray-400 font-semibold ${
                classNames?.originalPrice || ""
              }`}
            >
              ₹ {product?.originalPrice.toLocaleString()}
            </span>
          )}

          {showQuantity && (
            <div
              className={`flex items-center ml-auto lg:ml-0 gap-4 ${
                classNames?.quantity || ""
              }`}
            >
              <button
                className="w-7 h-7 bg-gray-200 text-xl rounded-full"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="text-primary text-3xl font-bold">
                {quantity}
              </span>
              <button
                className="w-7 h-7 bg-gray-200 text-xl rounded-full"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>

      {showThirdSection && (
        <div className="w-full lg:w-1/5 lg:h-24 flex flex-row lg:flex-col justify-between items-center">
          {showDeliveryDate && product?.deliveryDate && (
            <p
              className={`text-sm font-medium text-gray-400 ${
                classNames?.deliveryText || ""
              }`}
            >
              {showStatus && <span className="w-3 h-3 mr-1 bg-primary inline-block rounded-full font-[ramabhadra]"></span>}{" "}
              Deliver by{" "}
              <span className="text-primary font-normal font-[ramabhadra]">{product?.deliveryDate}</span>
              {showRate && (
                <>
                  <br />
                  <span className="text-sm font-normal mt-1 ml-10 inline-block">
                    Rate the Product
                  </span>
                </>
              )}
            </p>
          )}
          {showRate && (
            <p
              className={`text-sm font-medium text-gray-400 ${
                classNames?.rateText || ""
              }`}
            ></p>
          )}

          {showRemoveOption && (
            <div
              className={`flex items-center gap-1 lg:mt-auto ${
                classNames?.remove || ""
              }`}
            >
              <IoClose className="text-xl text-red-600/50" />
              <span className="text-gray-400 text-sm font-medium">
                Remove From Cart
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartProduct;
