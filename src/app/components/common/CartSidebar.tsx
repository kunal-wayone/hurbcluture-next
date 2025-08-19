'use client'

import { useState } from "react"
import { useCartStore } from "../../../store/cartStore"
import { BiCart, BiTrash } from "react-icons/bi"
import { useRouter } from "next/navigation"

const CartDrawer = () => {
    const router = useRouter();
    const { items, removeFromCart, updateQuantity, clearCart } = useCartStore()
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            {/* Toggle button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed flex justify-center items-center w-14 h-14  bottom-4 right-4 z-50 bg-primary text-white px-2 py-2 rounded-full shadow"
            >
                <BiCart size={28} />
                <span>
                    {items.length}
                </span>
            </button>

            {/* Drawer backdrop */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 bg-opacity-50 z-[999]"
                />
            )}

            {/* Drawer panel */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-gray-100 shadow-lg p-4 z-[1000] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Your Cart</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 hover:text-gray-900"
                        aria-label="Close cart"
                    >
                        ✕
                    </button>
                </div>

                {items.length === 0 && <p className="text-gray-600">Cart is empty</p>}

                {items.map(item => (
                    <div
                        key={item.product.id}
                        className="border-b border-gray-300 pb-2 mb-2 flex flex-col"
                    >
                        <h4 className="font-semibold">{item.product.name}</h4>
                        <div className="flex items-center justify-between">

                            <p>Price: ₹{item.product.currentPrice}</p>
                            <div className="flex items-center space-x-2 mt-1">
                                <button
                                    className="px-2 py-1 bg-gray-300 rounded"
                                    onClick={() =>
                                        updateQuantity(item.product.id, item.quantity + 1)
                                    }
                                >
                                    +
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    className="px-2 py-1 bg-gray-300 rounded"
                                    onClick={() =>
                                        item.quantity > 1
                                            ? updateQuantity(item.product.id, item.quantity - 1)
                                            : removeFromCart(item.product.id)
                                    }
                                >
                                    -
                                </button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-red-600 text-sm mt-1 hover:underline"
                            >
                                <BiTrash />
                            </button>
                        </div>
                    </div>
                ))}
                <div className="mt-auto absolute bottom-4 right-4 left-4 border-t-2 pt-2 border-t-gray-200 flex itece justify-between gap-4">

                    {items.length > 0 && (
                        <button
                            onClick={clearCart}
                            className="w-1/2 bg-red-200 text-red-500 font-semibold px-4 py-2 rounded-xl hover:bg-red-300 transition"
                        >
                            Clear Cart
                        </button>
                    )}
                    {items.length > 0 && (
                        <button
                            onClick={() => router.push('/cart')}
                            className="w-1/2 bg-primary text-white font-semibold px-4 py-2 rounded-xl hover:opacity-80 transition"
                        >
                            View In Cart
                        </button>
                    )}
                </div>
            </div>

        </>
    )
}

export default CartDrawer
