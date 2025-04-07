import ViewProduct from "./components/ViewProduct";
import Breadcrumbs from "../../components/common/BreadCrumb";
import ProductSlider from "../../components/common/ProductSlider";
import { products } from "../../page";
import ReviewAndRating from "./components/ReviewAndRating";



export interface Product {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  ratingInfo: string;
  mainImage: string;
  images: string[];
  offers: string[];
  nutrition: string[];
  details: string[];
  additionalInfo: string;
}

const product: Product = {
  name: "Cold Pressed Hemp Oil",
  description: "100% Cold pressed hemp seed oil",
  price: 12100,
  originalPrice: 14400,
  rating: 4,
  ratingInfo: "3849 Ratings & 2193 Reviews",
  mainImage: "/assets/products/product1.svg",
  images: [
    "/assets/products/product1.svg",
    "/assets/products/product1-1.svg",
    "/assets/products/product1-2.svg",
    "/assets/products/product1-3.svg",
  ],
  offers: [
    "There are many variations of passages",
    "Buy 1 get 1 free for new users",
    "Extra 10% off on prepaid orders",
  ],
  nutrition: [
    "100% Cold pressed hemp seed oil",
    "Rich in Omega 3 and 6",
    "Contains essential fatty acids",
  ],
  details: [
    "Cold pressed for maximum purity",
    "No added preservatives",
    "Eco-friendly packaging",
  ],
  additionalInfo:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
};

export default async function page(ctx: any) {
  const { productId } = await ctx.params;
  const path = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: productId, href: `/products/${productId}` },
  ];

  return (
    <div className="mt-[9.6rem] bg-white text-dark-primary">
      <Breadcrumbs paths={path} />

      <ViewProduct product={product} />

      <ProductSlider
        title={"Similar Products"}
        products={products}
        viewCard={0}
        cardSize={""}
        useSlider={true}
        useCategorySlider={false}
      />
      <ReviewAndRating />

      <ProductSlider
        title={"These Products might attract you"}
        products={products}
        viewCard={0}
        cardSize={""}
        containerClass="pb-12"
        useSlider={true}
        useCategorySlider={false}
      />

      {/* <ProductSlider
        title={"These Products might attract you"}
        products={products2}
        viewCard={6}
        cardSize={"lg:h-32"}
        containerClass={"pb-14 py-8"}
        cardClassName={{
          card: "",
          image: "",
          bestSeller: "h-8 w-16 text-[10px]",
          content: { box: "", title: "", text: "text-xs" },
          price: { show: false, text: "" },
        }}
        useSlider={true}
        useCategorySlider={false}
      /> */}
    </div>
  );
}
