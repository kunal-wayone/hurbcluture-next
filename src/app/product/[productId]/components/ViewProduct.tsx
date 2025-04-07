"use client";
import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { useRef, useState } from "react";
import { Product } from "../page";

const ProductDetails = ({ product }: { product: Product }) => {
  const [, setHoveredImage] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(product.mainImage);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const mainImageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = mainImageRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 50;
    const y = ((e.clientY - rect.top) / rect.height) * 50;
    setZoomPosition({ x, y });
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="p-4 lg:px-16 m-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 relative">
        {/* Left Column */}
        <div className="col-span-4 self-start">
          <div className="flex flex-col-reverse lg:flex-row gap-4 mb-8">
            {/* Thumbnails */}
            <div className="lg:w-1/5 flex flex-row lg:flex-col items-center gap-2">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredImage(img)}
                  onMouseLeave={() => setHoveredImage(null)}
                  onClick={() => setMainImage(img)}
                  className={`h-20 w-20 cursor-pointer rounded-2xl border-[2px] p-1 ${
                    mainImage === img
                      ? "border-color-primary"
                      : "border-gray-50"
                  } overflow-hidden hover:border-color-primary`}
                >
                  <Image
                    alt={`Thumbnail ${i}`}
                    width={1680}
                    height={1080}
                    src={img}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div
              className="relative w-full lg:w-4/5 rounded-2xl border border-gray-100 overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              ref={mainImageRef}
            >
              <Image
                alt="Main Product"
                src={mainImage}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
              {/* Optional overlay */}
              {isZooming && (
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              )}
            </div>

            {/* Zoomed Image */}
            {isZooming && (
              <div className="hidden lg:block absolute top-[calc(100%-105%)] left-[calc(100%-50%)] z-50 w-2/5 h-[90vh] max-h-[700px] border border-gray-300 rounded-xl overflow-hidden bg-white shadow-xl">
                <div className="relative w-full h-full">
                  <Image
                    src={mainImage}
                    alt="Zoomed"
                    fill
                    className="object-cover"
                    style={{
                      transform: `scale(2) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)`,
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="">
            <div className="flex items-center justify-between lg:justify-start gap-4  mt-4">
              <div className="flex items-center gap-4 px-4">
                <Image
                  src="/assets/icons/quantity.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span className="text-sm font-semibold">Quantity:</span>
              </div>
              <div className="flex items-center gap-4 px-4">
                <button
                  className="w-7 h-7 bg-gray-200 rounded-full"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="w-7 h-7 bg-gray-200 rounded-full"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="w-full flex items-center gap-4 p-2 mt-4">
              <Link
                href="/cart"
                className="text-white flex items-center justify-center gap-4 bg-primary rounded-xl text-center text-base p-3 w-1/2 hover:bg-green-500/50 hover:text-primary transition duration-300"
              >
                <Image
                  src="/assets/icons/cart.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                Add To Cart
              </Link>
              <Link
                href="/order-summery"
                className="text-white flex items-center justify-center gap-4 bg-primary rounded-xl text-center text-base p-3 w-1/2 hover:bg-green-500/50 hover:text-primary transition duration-300"
              >
                <Image
                  src="/assets/icons/buy.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-4 self-start space-y-4">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center gap-2">
            <span className="bg-primary text-white p-2 rounded flex items-center gap-1">
              {product.rating} <IoStar className="text-sm" />
            </span>
            <span className="text-secondary text-xs">{product.ratingInfo}</span>
          </div>

          <div>
            <span className="text-xl font-semibold">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-gray-400 line-through ml-2">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Offers</h3>
            {product.offers.map((offer, i) => (
              <div
                key={i}
                className="flex items-center text-secondary gap-2 mt-1"
              >
                <Image
                  src="/assets/icons/offers.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <b className="text-dark-primary text-sm hidden lg:block">Special Price</b>
                <span className="text-sm">{offer}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
            <div className="flex flex-row lg:flex-col items-start gap-2">
              <div className="flex items-center justify-start gap-4 w-full">
                <Image
                  src="/assets/icons/deliverto.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span className="font-medium">Deliver To</span>
                <span className="text-primary hidden lg:block">Check</span>
              </div>
              <input
                type="number"
                placeholder="Enter Pincode"
                className="ml-2 w-5/6 lg:w-full border-b-2 border-color-primary outline-none"
              />
              <span className="text-primary block lg:hidden">Check</span>
            </div>

            <div className="flex items-start justify-between lg:justify-start gap-2">
              <Image
                src="/assets/icons/doctor.svg"
                alt=""
                width={20}
                height={20}
              />
              <span className="font-medium">Dr Prescription</span>
              <label
                htmlFor="prescription"
                className="text-secondary cursor-pointer ml-2"
              >
                Upload
              </label>
              <input
                type="file"
                id="prescription"
                name="prescription"
                className="hidden"
              />
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Product Details</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {product.details.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Nutrition Value</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {product.nutrition.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Product Description</h3>
            <p className="text-gray-500 text-sm">{product.additionalInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
