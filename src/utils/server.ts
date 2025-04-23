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

    if (!response.ok) {
      throw new Error("Failed to fetch section data");
    }

    const res = await response.json();
    return res.data;
  } catch (error) {
    console.error("Error fetching section data:", error);
    return null;
  }
};

// Page wise data
export const fetchHomeData = async () => {
  const categoryData: any = await getData("/api/category/sub-category");
  const productData: any = await getData("/api/product");
  console.log(categoryData,"ghdsfbjknaml;")
  const isProductDataEmpty =
    Array.isArray(productData) && productData.length === 0;
  const isCategoryDataEmpty =
    Array.isArray(categoryData) && categoryData.length === 0;

  if (isProductDataEmpty || isCategoryDataEmpty) {
    return { loading: false };
  }

  return {
    loading: true,
    productData:productData?.result,
    categoryData:categoryData,
  };
};
