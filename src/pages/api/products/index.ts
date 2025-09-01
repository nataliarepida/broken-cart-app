/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import products from "@/data/products.json";
import { Product, ProductCategory } from "@/lib/types/product";
import { simulateNetworkDelay } from "@/lib/utils/api";

function calculateAverageRating(product: any): number | null {
  if (!product.reviews || product.reviews.length === 0) {
    return null;
  }
  const sum = product.reviews.reduce(
    (acc: number, review: any) => acc + review.rating,
    0
  );
  return Number((sum / product.reviews.length).toFixed(1));
}

function formatProduct(product: any): Product {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { reviews, ...rest } = product;
  return {
    ...rest,
    averageRating: calculateAverageRating(product),
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Product[]; error?: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ data: [], error: "Method not allowed" });
  }

  // Simulate network delay
  await simulateNetworkDelay();

  const { category, search, sortBy } = req.query;

  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === (category as ProductCategory)
    );
  }

  if (search) {
    const searchTerm = (search as string).toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
    );
  }

  if (sortBy) {
    switch (sortBy) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
  }

  return res.status(200).json({
    data: filteredProducts.map(formatProduct),
  });
}
