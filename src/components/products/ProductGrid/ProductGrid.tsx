import { Product } from "@/lib/types/product";
import { ProductCard } from "../ProductCard";
import {
  Grid,
  LoadingGrid,
  LoadingSkeleton,
  GridWrapper,
  EmptyState,
  EmptyTitle,
  EmptyDescription,
} from "./ProductGrid.styles";

type ProductGridProps = {
  products: Product[];
  isLoading?: boolean;
};

export const ProductGrid = ({
  products,
  isLoading = false,
}: ProductGridProps) => {
  if (isLoading) {
    return (
      <GridWrapper>
        <LoadingGrid>
          {Array.from({ length: 8 }).map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </LoadingGrid>
      </GridWrapper>
    );
  }

  if (products.length === 0) {
    return (
      <GridWrapper>
        <EmptyState>
          <EmptyTitle>No products found</EmptyTitle>
          <EmptyDescription>
            Try adjusting your filters or search criteria
          </EmptyDescription>
        </EmptyState>
      </GridWrapper>
    );
  }

  return (
    <GridWrapper>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </GridWrapper>
  );
};
