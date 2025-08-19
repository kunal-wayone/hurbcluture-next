export interface Product {
  id: number;
  name: string;
  sku: string;
  brandId: number;
  productCategoryId: number;
  productSubCategoryId: number;
  productSubChildCategoryId: number;
  additionalCategoryIds: number[] | null;
  shortDescription: string;
  longDescription: string;
  keyBenefits: string[];
  status: 'Active' | 'Inactive' | string; // could be narrowed down if more statuses are known
  featured: boolean;
  basePrice: string; // assuming prices are strings; could be number if used that way
  currentPrice: string;
  costPrice: string;
  taxRate: string;
  hsnCode: string;
  lowStockThreshold: number;
  maxOrderQuantity: number;
  weight: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  batchNumber: string;
  manufacturingDate: string; // ISO date string
  expiryDate: string; // ISO date string
  countryOfOrigin: string;
  legalDisclaimer: string;
  searchTags: string[];
  metaTitle: string;
  metaDescription: string;
  systemGenerated: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  deletedAt: string | null;
  category: {
    id: number;
    name: string;
  };
  subCategory: {
    id: number;
    name: string;
  };
  subChildCategory: {
    id: number;
    name: string;
  };
}




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