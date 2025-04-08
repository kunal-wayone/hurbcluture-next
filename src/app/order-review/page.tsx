import React from "react";
import Breadcrumbs from "../components/common/BreadCrumb";
import CartProduct from "../cart/CartProduct";
import OrderBillDetails from "./components/OrderBillDetails";
import CustomerInfoCard from "./components/CustomerInfoCard";


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
              showDeliveryDate={false}
              showSubtitle={true}
              showOriginalPrice={false}
              showQuantity={false}
              showRemoveOption={false}
              showThirdSection={false}
              showRate={false}
              classNames={{
                wrapper: "bg-white",
                price: "text-green-600",
                secondSection: "w-full",
              }}
            />

            <hr className="border-gray-300" />
            <OrderBillDetails
              data={{
                price: "14,400",
                discount: "2,300",
                deliveryCharges: "Free",
                tax: "37",
                total: "12,100",
                paidAmount: "12,100",
                invoiceDownloadLink: "/invoice.pdf",
              }}
              showDiscount={true}
              showDeliveryCharges={true}
              showTax={true}
              showInvoiceDownload={true}
              classNames={{
                wrapper: "bg-white",
                total: "text-gray-600",
                invoiceLink: "hover:text-blue-600",
              }}
            />
          </div>
          <span></span>
          <div className="lg:col-span-2">
            <CustomerInfoCard
              customers={[
                {
                  orders: {
                    user: "Prashant",
                    order: "1 Order",
                  },
                  contact: {
                    contactMobile: "+91 9876543210",
                    contactEmail: "prashant@example.com",
                  },
                  shippingAddress: {
                    user: "Prashant",
                    address: "123 MG Road, Mumbai",
                  },
                },
              ]}
              classNames={{
                title: "text-lg ",
                icon: "text-gray-400 w-5 h-5",
                text: "text-sm",
              }}
            />
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
