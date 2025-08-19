"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Product } from "../../../../types/products";
// import { useRouter } from "next/navigation";
import { useCartStore } from "../../../../store/cartStore";

type Props = {
  product: Product & {
    images?: string[]; // temporary extension for UI thumbnails
  };
};

const ProductDetails = ({ product }: Props) => {
  const [, setHoveredImage] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(product.images?.[0] || "");
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const addToCart = useCartStore(state => state.addToCart);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const isInCart = useCartStore((state: any) => state.isInCart(product.id));
  // const router = useRouter();

  const handleAddToCart = () => {
    addToCart({
      product: {
        id: product.id,
        name: product.name,
        currentPrice: product.currentPrice,
        sku: product.sku,
        basePrice: product.basePrice,
        weight: product.weight,
        taxRate: product.taxRate,
        maxOrderQuantity: product.maxOrderQuantity,
      },
      quantity,
    });
    // router.push("/cart");
  };
  const handleError = () => setImgError(true);

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
              {product.images?.map((img, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredImage(img)}
                  onMouseLeave={() => setHoveredImage(null)}
                  onClick={() => setMainImage(img)}
                  className={`h-20 w-20 cursor-pointer rounded-2xl border-[2px] p-1 ${mainImage === img
                    ? "border-color-primary"
                    : "border-gray-50"
                    } overflow-hidden hover:border-color-primary`}
                >
                  <Image
                    alt={`Thumbnail ${i}`}
                    width={1680}
                    height={1080}
                    src={
                      imgError || !img
                        ? "/assets/products/product1.svg"
                        : `/api/image?url=${img}`
                    }
                    onError={handleError}
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
                src={
                  imgError || !mainImage
                    ? "/assets/products/product1.svg"
                    : `/api/image?url=${mainImage}`
                }
                alt="Zoomed"
                width={800}
                height={800}
                unoptimized
                className="w-full h-full object-cover"
                onError={handleError}
              />
              {isZooming && (
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              )}
            </div>

            {/* Zoomed View */}
            {isZooming && (
              <div className="hidden lg:block absolute top-[calc(100%-105%)] left-[calc(100%-50%)] z-50 w-2/5 h-[90vh] max-h-[700px] border border-gray-300 rounded-xl overflow-hidden bg-white shadow-xl">
                <div className="relative w-full h-full">
                  <Image
                    src={
                      imgError || !mainImage
                        ? "/assets/products/product1.svg"
                        : `/api/image?url=${mainImage}`
                    }
                    alt="Zoomed"
                    width={900}
                    height={900}
                    unoptimized
                    className="object-cover"
                    onError={handleError}
                    style={{
                      transform: `scale(2) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)`,
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Quantity and Buttons */}
          <div className="">
            <div className="flex items-center justify-between lg:justify-start gap-4 mt-4">
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
              {!isInCart ? (
                <button
                  onClick={handleAddToCart}
                  className="text-white flex items-center justify-center gap-4 bg-primary rounded-xl text-center text-base p-3 w-1/2 hover:bg-green-500/50 hover:text-primary transition duration-300"
                >
                  <Image src="/assets/icons/cart.svg" alt="" width={20} height={20} />
                  Add To Cart
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-white flex items-center justify-center gap-4 bg-red-600 rounded-xl text-center text-base p-3 w-1/2 hover:bg-red-700 transition duration-300"
                >
                  Remove from Cart
                </button>
              )}

              <Link
                href="/order-summery"
                className="text-white flex items-center justify-center gap-4 bg-primary rounded-xl text-center text-base p-3 w-1/2 hover:bg-green-500/50 hover:text-primary transition duration-300"
              >
                <Image src="/assets/icons/buy.svg" alt="" width={20} height={20} />
                Buy Now
              </Link>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-4 self-start space-y-4">
          <h2 className="text-xl font-bold">{product?.name}</h2>
          <p className="text-gray-600">{product?.shortDescription}</p>

          <div>
            <span className="text-xl font-semibold">
              ₹{product?.currentPrice}
            </span>
            <span className="text-gray-400 line-through ml-2">
              ₹{product?.basePrice}
            </span>
          </div>

          <div>
            <h3 className="font-semibold">Key Benefits</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {product.keyBenefits?.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">HSN Code</h3>
            <p className="text-sm text-gray-700">{product.hsnCode}</p>
          </div>

          <div>
            <h3 className="font-semibold">Manufacturing & Expiry</h3>
            <p className="text-sm text-gray-700">
              MFG: {product.manufacturingDate} | EXP: {product.expiryDate}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Country of Origin</h3>
            <p className="text-sm text-gray-700">{product.countryOfOrigin}</p>
          </div>

          <div>
            <h3 className="font-semibold">Category</h3>
            <p className="text-sm text-gray-700">
              {product.category?.name} → {product.subCategory?.name} →{" "}
              {product.subChildCategory?.name}
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">Full Description</h3>
            <p className="text-sm text-gray-600">{product?.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
