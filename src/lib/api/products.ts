import { Product, ProductFilters, Review } from "@/lib/types";

const getBaseUrl = () => {
  if (typeof window === "undefined") {
    // Server-side
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  }
  // Client-side
  return "";
};

export const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${getBaseUrl()}/api/products/${id}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch product");
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export const getProductReviews = async (id: string): Promise<Review[]> => {
  try {
    const response = await fetch(`${getBaseUrl()}/api/products/${id}/reviews`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch reviews");
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};

export const productsApi = {
  // Get all products with optional filtering
  async getProducts(
    filters?: ProductFilters,
    sortBy?: string
  ): Promise<{
    data: Product[];
    error?: string;
  }> {
    try {
      // Build query string from filters
      const params = new URLSearchParams();
      if (filters) {
        if (filters.category) {
          params.append("category", filters.category);
        }
        if (filters.minPrice !== undefined) {
          params.append("minPrice", filters.minPrice.toString());
        }
        if (filters.maxPrice !== undefined) {
          params.append("maxPrice", filters.maxPrice.toString());
        }
        if (filters.inStock !== undefined) {
          params.append("inStock", filters.inStock.toString());
        }
      }
      if (sortBy) {
        params.append("sortBy", sortBy);
      }

      const response = await fetch(
        `${getBaseUrl()}/api/products?${params.toString()}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch products");
      }

      return data;
    } catch (error) {
      return {
        data: [],
        error:
          error instanceof Error ? error.message : "Failed to fetch products",
      };
    }
  },

  // Get product categories
  async getCategories(): Promise<{
    data: string[];
    error?: string;
  }> {
    try {
      const response = await fetch(`${getBaseUrl()}/api/products/categories`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch categories");
      }

      return data;
    } catch (error) {
      return {
        data: [],
        error:
          error instanceof Error ? error.message : "Failed to fetch categories",
      };
    }
  },
};
