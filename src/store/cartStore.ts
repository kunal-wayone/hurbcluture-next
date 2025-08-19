// store/cartStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '../types/products';

export interface CartItem {
    product: Pick<
        Product,
        | 'id'
        | 'name'
        | 'currentPrice'
        | 'sku'
        | 'basePrice'
        | 'weight'
        | 'taxRate'
        | 'maxOrderQuantity'
    >;
    quantity: number;
}

interface CartState {
    items: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
    clearCart: () => void
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addToCart: (item) => {
                const existing = get().items.find(i => i.product.id === item.product.id)
                if (existing) {
                    set({
                        items: get().items.map(i =>
                            i.product.id === item.product.id
                                ? { ...i, quantity: i.quantity + item.quantity }
                                : i
                        )
                    })
                } else {
                    set({ items: [...get().items, item] })
                }
            },

            removeFromCart: (productId) => {
                set({ items: get().items.filter(i => i.product.id !== productId) })
            },

            updateQuantity: (productId, quantity) => {
                set({
                    items: get().items.map(i =>
                        i.product.id === productId ? { ...i, quantity } : i
                    )
                })
            },
            isInCart: (productId) => {
                return get().items.some(i => i.product.id === productId);
            },
            clearCart: () => set({ items: [] })
        }),
        { name: 'ecommerce-cart-storage' }
    )
)
