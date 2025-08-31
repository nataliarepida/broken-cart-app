import { useState, useEffect } from "react";
import { Product, ProductFilters } from "@/lib/types";
import { productsApi } from "@/lib/api/products";

interface UseProductsProps {
  initialProducts?: Product[];
  initialCategories?: string[];
}

export const useProducts = ({
  initialProducts = [],
  initialCategories = [],
}: UseProductsProps = {}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filters, setFilters] = useState<ProductFilters>({});
  const [sortBy, setSortBy] = useState<string>("name-asc");
  const [isLoading, setIsLoading] = useState(initialProducts.length === 0);
  const [error, setError] = useState<string | null>(null);

  // Fetch products when filters or sorting change
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      const response = await productsApi.getProducts(filters, sortBy);

      if (response.error) {
        setError(response.error);
      } else {
        setProducts(response.data);
      }

      setIsLoading(false);
    };

    fetchProducts();
  }, [filters, sortBy]);

  const [categories, setCategories] = useState<string[]>(initialCategories);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(
    initialCategories.length === 0
  );

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      setIsCategoriesLoading(true);
      const response = await productsApi.getCategories();
      if (!response.error) {
        setCategories(response.data);
      }
      setIsCategoriesLoading(false);
    };

    fetchCategories();
  }, []);

  const updateFilters = (newFilters: Partial<ProductFilters>) => {
    setFilters((current) => ({ ...current, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  return {
    products,
    categories,
    filters,
    sortBy,
    isLoading,
    isCategoriesLoading,
    error,
    updateFilters,
    clearFilters,
    setSortBy,
  };
};
