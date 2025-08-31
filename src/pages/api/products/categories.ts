import { NextApiRequest, NextApiResponse } from "next";
import products from "@/data/products.json";
import { simulateNetworkDelay } from "@/lib/utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: string[]; error?: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ data: [], error: "Method not allowed" });
  }

  // Simulate network delay
  await simulateNetworkDelay();

  // Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  return res.status(200).json({
    data: categories,
  });
}
