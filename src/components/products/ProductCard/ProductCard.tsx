import Link from "next/link";
import { Product } from "@/lib/types";
import {
  formatPrice,
  generateProductImageUrl,
  formatCategory,
} from "@/lib/utils/formatters";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useCart } from "@/contexts/CartContext";
import {
  ProductCardWrapper,
  ImageWrapper,
  ProductInfo,
  ProductCategory,
  ProductName,
  ProductDescription,
  ProductPrice,
  StockStatus,
  ProductFooter,
  PriceAndStock,
} from "./ProductCard.styles";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (product.inStock) {
      addItem(product);
    }
  };

  return (
    <ProductCardWrapper>
      <Card hover padding="lg">
        <Link href={`/products/${product.id}`} passHref>
          <ImageWrapper>
            <img
              src={generateProductImageUrl(product.image)}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </ImageWrapper>
        </Link>

        <ProductInfo>
          <ProductCategory>{formatCategory(product.category)}</ProductCategory>
          <Link href={`/products/${product.id}`} passHref>
            <ProductName>{product.name}</ProductName>
          </Link>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductInfo>

        <ProductFooter>
          <PriceAndStock>
            <ProductPrice>{formatPrice(product.price)}</ProductPrice>
            <StockStatus $inStock={product.inStock}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </StockStatus>
          </PriceAndStock>

          <Button
            fullWidth
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </ProductFooter>
      </Card>
    </ProductCardWrapper>
  );
};
