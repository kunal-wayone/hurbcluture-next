const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export interface ProductData {
  result: {
    _id: string;
    name: string;
    description: string;
    coverImage: string;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }[];
}

// End section interface
export const getData = async (url: string, params?: any) => {
  try {
    const queryString = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    const response = await fetch(`${BASE_URL}${url}${queryString}`);
    console.log(response,BASE_URL,url)
    // if (!response?.ok) {
    //   throw new Error("Failed to fetch section data");
    // }

    const res = await response?.json();
    return res?.data;
  } catch (error) {
    console.error("Error fetching section data:", error);
    return null;
  }
};

// Page wise data
export const fetchHomeData = async () => {
  const categoryData: any = await getData("/api/product-category?sortOrder=asc");
  const productData: any = await getData("/api/product");
  const isProductDataEmpty =
    Array.isArray(productData) && productData.length === 0;
  const isCategoryDataEmpty =
    Array.isArray(categoryData) && categoryData.length === 0;

  if (
    isProductDataEmpty || isCategoryDataEmpty) {
    return { loading: false };
  }

  return {
    loading: true,
    productData: productData?.result,
    categoryData: categoryData?.result,
  };
};


// Page wise data
export const fetchBrandData = async () => {
  const brandData: any = await getData("/api/brand/all?sortOrder=asc");
  console.log(brandData,"fdsjfkdsfhdkj")
  const isBrandDataEmpty =
    Array.isArray(brandData?.result) && brandData?.result?.length === 0;

  if (isBrandDataEmpty) {
    return { loading: false };
  }

  return {
    loading: true,
    brandData: brandData?.result,
  };
};
