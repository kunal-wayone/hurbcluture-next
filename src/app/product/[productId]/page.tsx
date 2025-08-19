import ViewProduct from "./components/ViewProduct";
import Breadcrumbs from "../../components/common/BreadCrumb";
import ProductSlider from "../../components/common/ProductSlider";
import { products } from "../../page";
import ReviewAndRating from "./components/ReviewAndRating";
import { getData } from "../../../utils/server";
import AuthGuard from "../../components/common/AuthGuard";
import Wrapper from "../../components/common/Wrapper";
import { Product } from "../../../types/products";

const product: Product = {
  id: 5,
  name: "Blue Ashwagandha Root Extract",
  sku: "BLUE-ASHWA-001",
  brandId: 5,
  productCategoryId: 6,
  productSubCategoryId: 1,
  productSubChildCategoryId: 3,
  additionalCategoryIds: null,
  shortDescription: "Supports stress relief and vitality.",
  longDescription:
    "Blue Ashwagandha Root Extract is made with premium, organically sourced Ashwagandha. It helps in managing stress, boosts energy levels, and promotes overall well-being. Formulated by BLUE Herbal Life, it’s a perfect blend of tradition and innovation.",
  keyBenefits: [
    "Reduces cortisol levels",
    "Improves sleep quality",
    "Enhances physical endurance"
  ],
  status: "Active",
  featured: true,
  basePrice: "899.00",
  currentPrice: "749.00",
  costPrice: "420.00",
  taxRate: "5.00",
  hsnCode: "30049011",
  lowStockThreshold: 15,
  maxOrderQuantity: 10,
  weight: "0.30",
  dimensions: {
    length: 12,
    width: 6,
    height: 6
  },
  batchNumber: "BHL-ASHWA-BATCH01",
  manufacturingDate: "2025-06-15",
  expiryDate: "2027-06-15",
  countryOfOrigin: "India",
  legalDisclaimer:
    "For adults only. Consult a physician if pregnant, nursing, or under medication. This is not a substitute for medical advice.",
  searchTags: [
    "ashwagandha",
    "blue herbal life",
    "stress relief",
    "immunity booster"
  ],
  metaTitle:
    "Blue Herbal Ashwagandha Extract - Stress Relief & Energy Booster",
  metaDescription:
    "Buy Blue Herbal Life's Ashwagandha Extract capsules online. Natural stress relief and immunity support with pure Ayurvedic ingredients.",
  systemGenerated: false,
  createdAt: "2025-08-01T08:00:06.105Z",
  updatedAt: "2025-08-01T08:00:06.105Z",
  deletedAt: null,
  category: {
    id: 6,
    name: "Supplementsyyy"
  },
  subCategory: {
    id: 1,
    name: "Protein Powders"
  },
  subChildCategory: {
    id: 3,
    name: "Whey Isolate"
  }
};

export default async function page(ctx: any) {
  const { productId } = ctx.params;

  const path = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: productId, href: `/products/${productId}` },
  ];

  const productData = await getData(`/api/product/${productId}`);

  return (
    <AuthGuard>
      <Wrapper>
        <div className="bg-white text-dark-primary">
          <Breadcrumbs paths={path} color="text-gray-800" />

          {/* ViewProduct should be updated to accept and display all fields from Product */}
          <ViewProduct product={productData || product} />

          <ProductSlider
            title="Similar Products"
            products={products}
            viewCard={0}
            cardSize=""
            useSlider={true}
            useCategorySlider={false}
          />

          <ReviewAndRating />

          <ProductSlider
            title="These Products might attract you"
            products={products}
            viewCard={0}
            cardSize=""
            containerClass="pb-12"
            useSlider={true}
            useCategorySlider={false}
          />
        </div>
      </Wrapper>
    </AuthGuard>
  );
}
