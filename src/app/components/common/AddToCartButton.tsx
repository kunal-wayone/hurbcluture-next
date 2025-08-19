import { useCartStore } from "../../../store/cartStore"
import { Product } from "../../../types/products"


interface Props {
  product: Product
}

const AddToCartButton = ({ product }: Props) => {
  const addToCart = useCartStore(state => state.addToCart)

  const handleAdd = () => {
    addToCart({
      product: {
        id: product.id,
        name: product.name,
        currentPrice: product.currentPrice,
        sku: product.sku,
        basePrice: product.basePrice,
        weight: product.weight,
        taxRate: product.taxRate,
        maxOrderQuantity: product.maxOrderQuantity
      },
      quantity: 1
    })
  }

  return (
    <button
      onClick={handleAdd}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Add to Cart
    </button>
  )
}

export default AddToCartButton
