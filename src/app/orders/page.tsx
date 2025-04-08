import React from "react";
import Breadcrumbs from "../components/common/BreadCrumb";
import CartProduct from "../cart/CartProduct";

export default function page() {
  const path = [
    { label: "Home", href: "/" },
    { label: "Orders", href: `/orders` },
  ];
  return (
    <div className="mt-[9.6rem] bg-white text-dark-primary">
      <Breadcrumbs paths={path} />
      <div className="max-w-7xl p-4 lg:px-16 m-auto">
        <CartProduct
          product={{
            image: "/assets/featureproduct/f13.png",
            title: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
            subtitle: "ANANDAMYDE SPECIAL INTRODUCTORY OFFER",
            price: 12100,
            originalPrice: 14100,
            deliveryDate: "Fri Mar 14",
          }}
          showDeliveryDate={true}
          showSubtitle={true}
          showOriginalPrice={false}
          showQuantity={false}
          showRemoveOption={false}
          showThirdSection={true}
          showRate={true}
          showStatus={true}
          classNames={{
            wrapper: "bg-white",
            price: "text-green-600",
            secondSection: "w-full",
            deliveryText:"text-lg font-semibold"
          }}
        />

        <CartProduct
          product={{
            image: "/assets/featureproduct/f13.png",
            title: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
            subtitle: "ANANDAMYDE SPECIAL INTRODUCTORY OFFER",
            price: 12100,
            originalPrice: 14100,
            deliveryDate: "Fri Mar 14",
          }}
          showDeliveryDate={true}
          showSubtitle={true}
          showOriginalPrice={false}
          showQuantity={false}
          showRemoveOption={false}
          showThirdSection={true}
          showRate={true}
          classNames={{
            wrapper: "bg-white",
            price: "text-green-600",
            secondSection: "w-full",
          }}
        />

        <CartProduct
          product={{
            image: "/assets/featureproduct/f13.png",
            title: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
            subtitle: "ANANDAMYDE SPECIAL INTRODUCTORY OFFER",
            price: 12100,
            originalPrice: 14100,
            deliveryDate: "Fri Mar 14",
          }}
          showDeliveryDate={true}
          showSubtitle={true}
          showOriginalPrice={false}
          showQuantity={false}
          showRemoveOption={false}
          showThirdSection={true}
          showRate={true}
          classNames={{
            wrapper: "bg-white",
            price: "text-green-600",
            secondSection: "w-full",
          }}
        />
      </div>
    </div>
  );
}
