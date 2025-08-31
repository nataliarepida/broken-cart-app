export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const formatProductName = (name: string): string => {
  return name.trim();
};

export const formatCategory = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export const generateProductImageUrl = (imagePath: string): string => {
  // Extract the product ID from the image path
  const productId = imagePath.split("/").pop()?.split(".")[0] || "default";
  // Use seed parameter to get consistent images based on product ID
  return `https://picsum.photos/seed/${productId}/400/300`;
};
