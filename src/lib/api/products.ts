import { Product, ProductFilters, Review } from "@/lib/types";

const getBaseUrl = () => {
  if (typeof window === "undefined") {
    // Server-side
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  }
  // Client-side
  return "";
};

export const productsApi = {
  async getProducts(
    filters?: ProductFilters,
    sortBy?: string
  ): Promise<{
    data: Product[];
    error?: string;
  }> {
    try {
      const params = new URLSearchParams();
      if (filters) {
        if (filters.category) {
          params.append("category", filters.category);
        }
        if (filters.search !== undefined) {
          params.append("search", filters.search);
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

  async getProduct(id: string): Promise<Product | null> {
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
  },

  async getProductReviews(id: string): Promise<Review[]> {
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
  },
};
