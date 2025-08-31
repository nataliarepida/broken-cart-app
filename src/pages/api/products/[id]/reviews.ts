import { NextApiRequest, NextApiResponse } from "next";
import products from "@/data/products.json";
import { Review } from "@/lib/types/product";
import { simulateNetworkDelay } from "@/lib/utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Review[]; error?: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ data: [], error: "Method not allowed" });
  }

  // Simulate network delay
  await simulateNetworkDelay();

  const { id } = req.query;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ data: [], error: "Product not found" });
  }

  const reviews: Review[] = product.reviews || [];

  return res.status(200).json({ data: reviews });
}
