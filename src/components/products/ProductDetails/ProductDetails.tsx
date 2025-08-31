import { useState } from "react";
import { Product } from "@/lib/types/product";
import { Button } from "@/components/ui/Button";
import { formatPrice, generateProductImageUrl } from "@/lib/utils/formatters";
import { ReviewList } from "../ReviewList";
import {
  ProductContainer,
  ProductGrid,
  ProductImage,
  ProductInfo,
  Price,
  StockStatus,
  ReviewsSection,
  ReviewsToggle,
  ProductTitle,
  ProductDescription,
  RatingDisplay,
} from "./ProductDetails.styles";
import { useCart } from "@/contexts/CartContext";

type ProductDetailsProps = {
  product: Product;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  const [showReviews, setShowReviews] = useState(false);

  const handleToggleReviews = () => {
    setShowReviews((prev) => !prev);
  };

  return (
    <ProductContainer>
      <ProductGrid>
        <ProductImage src={generateProductImageUrl(product.image)} />
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <Price>{formatPrice(product.price)}</Price>
          {product.averageRating && (
            <RatingDisplay>★ {product.averageRating.toFixed(1)}</RatingDisplay>
          )}
          <ProductDescription>{product.description}</ProductDescription>
          <StockStatus $inStock={product.inStock}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </StockStatus>
          <Button disabled={!product.inStock} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </ProductInfo>
      </ProductGrid>

      <ReviewsSection>
        <ReviewsToggle onClick={handleToggleReviews} variant="secondary">
          {showReviews ? "Hide Reviews" : "Show Reviews"}
        </ReviewsToggle>
        <ReviewList productId={product.id} visible={showReviews} />
      </ReviewsSection>
    </ProductContainer>
  );
};
