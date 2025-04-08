"use client";
import React from "react";
import { RiSecurePaymentLine } from "react-icons/ri";

interface OrderBillDetailsData {
  price: string;
  discount?: string;
  deliveryCharges?: string;
  tax?: string;
  total: string;
  paidAmount?: string;
  invoiceDownloadLink?: string;
  paymentStatusText?: string;
  secureText?: string;
}

interface OrderBillDetailsProps {
  data: OrderBillDetailsData;
  showPaymentStatus?: boolean;
  showSecurePaymentText?: boolean;
  showDiscount?: boolean;
  showDeliveryCharges?: boolean;
  showTax?: boolean;
  showPaidAmount?: boolean;
  showInvoiceDownload?: boolean;
  classNames?: {
    wrapper?: string;
    title?: string;
    status?: string;
    secure?: string;
    row?: string;
    label?: string;
    value?: string;
    total?: string;
    invoiceLink?: string;
  };
}

const OrderBillDetails: React.FC<OrderBillDetailsProps> = ({
  data,
  showPaymentStatus = true,
  showSecurePaymentText = true,
  showDiscount = true,
  showDeliveryCharges = true,
  showTax = true,
  showPaidAmount = true,
  showInvoiceDownload = true,
  classNames = {},
}) => {
  return (
    <div className={`lg:col-span-2 ${classNames.wrapper || ""}`}>
      <div className="p-4 rounded-2xl mb-8">
        <h3 className={`text-xl text-left font-bold mb-2 text-gray-800 ${classNames.title || ""}`}>
          Order Summary
        </h3>

        {(showPaymentStatus || showSecurePaymentText) && (
          <div className="flex items-center justify-start gap-6 mb-8">
            {showPaymentStatus && (
              <h3 className={`text-xs text-center bg-green-500/20 text-primary p-1.5 px-3 rounded-lg text-gray-400 ${classNames.status || ""}`}>
                {data.paymentStatusText || "Payment Completed"}
              </h3>
            )}
            {showSecurePaymentText && (
              <span className={`text-gray-400 font-semibold flex items-center gap-2 text-sm ${classNames.secure || ""}`}>
                <RiSecurePaymentLine className="text-xl text-primary" />
                {data.secureText || "100% Secure Payment"}
              </span>
            )}
          </div>
        )}

        <div className={`flex items-center justify-between w-full ${classNames.row || ""}`}>
          <p className={`text-gray-500 mb-2 ${classNames.label || ""}`}>Price (1 item)</p>
          <p className={`text-gray-500 mb-2 ${classNames.value || ""}`}>₹ {data.price}</p>
        </div>

        {showDiscount && data.discount && (
          <div className={`flex items-center justify-between w-full ${classNames.row || ""}`}>
            <p className="text-gray-500 mb-2">Discount</p>
            <p className="text-gray-500 mb-2">₹ {data.discount}</p>
          </div>
        )}

        {showDeliveryCharges && data.deliveryCharges && (
          <div className={`flex items-center justify-between w-full ${classNames.row || ""}`}>
            <p className="text-gray-500 mb-2">Delivery Charges</p>
            <p className="text-gray-500 mb-2">{data.deliveryCharges}</p>
          </div>
        )}

        {showTax && data.tax && (
          <div className={`flex items-center justify-between w-full mb-2 ${classNames.row || ""}`}>
            <p className="text-gray-500 mb-2">Tax</p>
            <p className="text-gray-500 mb-2">₹ {data.tax}</p>
          </div>
        )}

        <div className="flex flex-col gap-4 mb-4">
          <div className="flex justify-between items-center">
            <span className={`text-gray-500 font-bold ${classNames.label || ""}`}>Total:</span>
            <span className={`text-gray-900 font-bold ${classNames.total || ""}`}>₹ {data.total}</span>
          </div>
        </div>

        <hr className="mb-4 border-gray-300" />

        {showPaidAmount && data.paidAmount && (
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Paid by customer:</span>
              <span className="text-gray-500">₹ {data.paidAmount}</span>
            </div>
          </div>
        )}

        {showInvoiceDownload && data.invoiceDownloadLink && (
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Download the payment invoice:</span>
              <a
                href={data.invoiceDownloadLink}
                className={`text-primary cursor-pointer underline ${classNames.invoiceLink || ""}`}
                target="_blank"
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderBillDetails;
