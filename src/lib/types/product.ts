export type Review = {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
  averageRating: number | null;
};

export type ProductCategory = "electronics" | "clothing" | "books" | "home";

export type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc";

export type ProductFilters = {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
};
