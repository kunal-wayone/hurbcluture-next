import HeroSection from "./components/common/HeroSectionSlider";
import FeatureProductSection from "./components/common/FeatureProductSection";
import BrowseCategory from "./components/common/BrowseCategory";
import React from "react";
import ProductSlider from "./components/common/ProductSlider";
import NewLaunchSlider from "./components/common/NewLaunchSlider";
import Testimonials from "./components/common/Testimonials";

interface ISlide {
  id: number;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  price?: string;
  rating?: string;
}

interface Product {
  id: number;
  name: string;
  category?: string;
  price?: string;
  image: string;
  rating?: string;
  review?: string;
  bestSeller?: boolean;
}

const heroSlides: ISlide[] = [
  {
    id: 1,
    imageUrl: "/assets/banner/banner1.png", // Make sure to replace with your actual image paths
    altText: "First Slide",
    title: "Explore the World",
    description:
      "Discover the beauty of nature and adventure in every corner of the globe.",
  },
  {
    id: 2,
    imageUrl: "/assets/banner/banner2.png",
    altText: "Second Slide",
    title: "The Future of Technology",
    description:
      "Embrace the digital revolution and be a part of the technological advancements shaping our world.",
  },
  {
    id: 3,
    imageUrl: "/assets/banner/banner3.png",
    altText: "Third Slide",
    title: "Sustainability for Tomorrow",
    description:
      "Together, we can build a greener and more sustainable future for the generations to come.",
  },
];

const featureProductData = [
  {
    title: "Up to 45% off • Get today",
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
  {
    title: "Explore more for pets",
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Product 2",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Product 3",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Product 4",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
  {
    title: "Best seller in body care",
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Product 2",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Product 3",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Product 4",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
  {
    title: "Top Accessories",
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Product 2",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Product 3",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Product 4",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
];

const featureProductData2 = [
  {
    title: "Up to 45% off • Get today",
    isProduct: false,
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
  {
    title: "Explore more for pets",
    isProduct: true,
    content: {
      id: 5,
      name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
      image: "/assets/featureproduct/f14.png",
      price: "3,53,39.00",
      rating: "4",
      review: "400k",
      bestSeller: true,
    },
  },
  {
    title: "Best seller in body care",
    isProduct: false,
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Product 2",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Product 3",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Product 4",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
  {
    title: "Top Accessories",
    isProduct: false,
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Product 2",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Product 3",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Product 4",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
  {
    title: "Top Accessories",
    isProduct: false,
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Product 2",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Product 3",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Product 4",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
  {
    title: "Top Accessories",
    isProduct: false,
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Product 2",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Product 3",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Product 4",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
  {
    title: "Top Accessories",
    isProduct: false,
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Product 2",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Product 3",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Product 4",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
  {
    title: "Top Accessories",
    isProduct: false,
    content: [
      {
        id: 1,
        title: "Paper Products",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f11.png",
      },
      {
        id: 1,
        title: "Product 2",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f12.png",
      },
      {
        id: 1,
        title: "Product 3",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f13.png",
      },
      {
        id: 1,
        title: "Product 4",
        description: "This is a product description.",
        price: "$10.99",
        image: "/assets/featureproduct/f14.png",
      },
    ],
  },
];

const categoryCardData = {
  title: "Up to 45% off • Get today",
  content: [
    {
      id: 1,
      title: "Paper Products",
      category: [
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
      ],
      image: "/assets/featureproduct/f11.png",
    },
    {
      id: 1,
      title: "Product 2",
      category: [
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
      ],
      image: "/assets/featureproduct/f12.png",
    },
    {
      id: 1,
      title: "Product 3",
      category: [
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
      ],
      image: "/assets/featureproduct/f13.png",
    },
    {
      id: 1,
      title: "Product 4",
      image: "/assets/featureproduct/f11.png",
      category: [
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
      ],
    },
    {
      id: 1,
      title: "Product 4",
      image: "/assets/featureproduct/f11.png",
      category: [
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
      ],
    },
    {
      id: 1,
      title: "Product 4",
      image: "/assets/featureproduct/f11.png",
      category: [
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
        {
          name: "Roll Sheet",
          link: "/",
        },
      ],
    },
  ],
};

const products: Product[] = [
  {
    id: 1,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f11.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
  {
    id: 2,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f12.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
  {
    id: 3,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f13.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
  {
    id: 4,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f14.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
  {
    id: 5,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f14.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
  {
    id: 6,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f11.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
  {
    id: 7,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f12.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
  {
    id: 8,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f13.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
  {
    id: 9,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f14.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
  {
    id: 10,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f14.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
];

const products2: Product[] = [
  {
    id: 1,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f11.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: false,
  },
  {
    id: 2,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f12.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: false,
  },
  {
    id: 3,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f13.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: false,
  },
  {
    id: 4,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f14.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: false,
  },
  {
    id: 5,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f14.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: false,
  },
  {
    id: 1,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f11.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: false,
  },
  {
    id: 2,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f12.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: false,
  },
  {
    id: 3,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f13.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: false,
  },
  {
    id: 4,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f14.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
  {
    id: 5,
    name: "Cannabis Pain Relief Oil - 50 ml ( Pack Of 3 ) | MEDICANN",
    image: "/assets/featureproduct/f14.png",
    price: "3,53,39.00",
    rating: "4",
    review: "400k",
    bestSeller: true,
  },
];


const clients = [
  {
    id: 1,
    name: "John Doe",
    stars: 5,
    image: "/assets/profile.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    stars: 4,
    image: "/assets/profile.png",
  },
  {
    id: 3,
    name: "Michael Johnson",
    stars: 3,
    image: "/assets/profile.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    stars: 5,
    image: "/assets/profile.png",
  },
  {
    id: 5,
    name: "Chris Brown",
    stars: 4,
    image: "/assets/profile.png",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    stars: 5,
    image: "/assets/profile.png",
  },
];

export default function Home() {
  return (
    <div className="mt-[9.6rem]">
      <HeroSection heroSlides={heroSlides} />
      <div className="bg-white">
        <FeatureProductSection scale={true} data={featureProductData} />
        <BrowseCategory title={"Browse Category"} data={categoryCardData} />
        <ProductSlider
          title={"Related to items you’ve viewed"}
          products={products}
          viewCard={0}
          cardSize={""}
          useSlider={true}
          useCategorySlider={false}
        />

        <div className="bg-[#F5F5F5]">
          <ProductSlider
            title={"Most Searched Products"}
            products={products2}
            viewCard={6}
            cardSize={"lg:h-32"}
            containerClass={"bg-[#F5F5F5] py-8"}
            cardClassName={{
              card: "",
              image: "",
              bestSeller: "h-8 w-16 text-[10px]",
              content: { box: "", title: "", text: "text-xs" },
              price: { show: false, text: "" },
            }}
            useSlider={true}
            useCategorySlider={false}
          />
        </div>
        <ProductSlider
          title={"Top Picks"}
          products={products2}
          viewCard={5}
          cardSize={""}
          containerClass={"bg-white py-8"}
          cardClassName={{
            card: "",
            image: "",
            bestSeller: "h-8 w-16 text-[10px]",
            content: { box: "", title: "", text: "text-xs" },
            price: { show: false, text: "" },
          }}
          useSlider={true}
          useCategorySlider={true}
          categories={[
            "All",
            "Electronics",
            "Clothing",
            "Home",
            "Toys",
            "Books",
            "Electronics",
            "Clothing",
            "Home",
            "Toys",
            "Books",
            "Electronics",
            "Clothing",
            "Home",
            "Toys",
            "Books",
          ]}
        />

        <ProductSlider
          title={"Special Offers"}
          products={products2}
          viewCard={4}
          cardSize={""}
          containerClass={"bg-white py-8"}
          cardClassName={{
            card: "",
            image: "",
            bestSeller: "h-8 w-16 text-[10px]",
            content: { box: "", title: "", text: "text-xs" },
            price: { show: false, text: "" },
          }}
          useSlider={true}
          useCategorySlider={false}
          categories={[]}
          useOfferBanner={true}
          offerBanner=""
        />

        <ProductSlider
          title={"Hemp Skincare"}
          products={products2}
          viewCard={6}
          cardSize={"lg:h-32"}
          containerClass={"py-8"}
          cardClassName={{
            card: "",
            image: "",
            bestSeller: "h-8 w-16 text-[10px]",
            content: { box: "", title: "", text: "text-xs" },
            price: { show: false, text: "" },
          }}
          useSlider={true}
          useCategorySlider={false}
        />
        <FeatureProductSection scale={false} data={featureProductData2} />

        <div className="bg-[#F5F5F5]">
          <ProductSlider
            title={"Buy Ayurveda Product"}
            products={products2}
            viewCard={6}
            cardSize={"lg:h-32"}
            containerClass={"bg-[#F5F5F5] py-8"}
            cardClassName={{
              card: "",
              image: "",
              bestSeller: "h-8 w-16 text-[10px]",
              content: { box: "", title: "", text: "text-xs" },
              price: { show: false, text: "" },
            }}
            useSlider={true}
            useCategorySlider={false}
          />
        </div>

        <ProductSlider
          title={"THC Select"}
          products={products2}
          viewCard={6}
          cardSize={"lg:h-32"}
          containerClass={"py-8"}
          cardClassName={{
            card: "",
            image: "",
            bestSeller: "h-8 w-16 text-[10px]",
            content: { box: "", title: "", text: "text-xs" },
            price: { show: false, text: "" },
          }}
          useSlider={true}
          useCategorySlider={true}
          categories={[
            "All",
            "Electronics",
            "Clothing",
            "Home",
            "Toys",
            "Books",
            "Electronics",
            "Clothing",
            "Home",
            "Toys",
            "Books",
            "Electronics",
            "Clothing",
            "Home",
            "Toys",
            "Books",
          ]}
        />

        <NewLaunchSlider heroSlides={heroSlides} />

        <ProductSlider
          title={"Recommended Products"}
          products={products}
          viewCard={0}
          cardSize={""}
          useSlider={true}
          useCategorySlider={false}
        />

        <div className="bg-[#F5F5F5]">
          <ProductSlider
            title={"For your Mental Health"}
            products={products2}
            viewCard={6}
            cardSize={"lg:h-32"}
            containerClass={"bg-[#F5F5F5] py-8"}
            cardClassName={{
              card: "",
              image: "",
              bestSeller: "h-8 w-16 text-[10px]",
              content: { box: "", title: "", text: "text-xs" },
              price: { show: false, text: "" },
            }}
            useSlider={true}
            useCategorySlider={false}
          />
        </div>
        <div className="bg-[#F5F5F5]">
          <ProductSlider
            title={"Good for your health"}
            products={products2}
            viewCard={6}
            cardSize={"lg:h-32"}
            containerClass={"bg-[#F5F5F5] py-8"}
            cardClassName={{
              card: "",
              image: "",
              bestSeller: "h-8 w-16 text-[10px]",
              content: { box: "", title: "", text: "text-xs" },
              price: { show: false, text: "" },
            }}
            useSlider={true}
            useCategorySlider={false}
          />
        </div>

        <ProductSlider
          title={"Complete your health package"}
          products={products}
          viewCard={0}
          cardSize={""}
          useSlider={true}
          useCategorySlider={false}
        />

        <Testimonials clients={clients} />
      </div>
    </div>
  );
}
