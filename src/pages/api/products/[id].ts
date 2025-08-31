/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import products from "@/data/products.json";
import { Product } from "@/lib/types/product";
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
  res: NextApiResponse<{ data: Product | null; error?: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ data: null, error: "Method not allowed" });
  }

  // Simulate network delay
  await simulateNetworkDelay();

  const { id } = req.query;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ data: null, error: "Product not found" });
  }

  return res.status(200).json({ data: formatProduct(product) });
}
