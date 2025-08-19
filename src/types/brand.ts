export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  category: string;
  rating: number;
  isVerified: boolean;
  isCertified: boolean;
  isTrending: boolean;
  promotion?: string;
}
