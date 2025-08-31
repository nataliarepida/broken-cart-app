import styled from "styled-components";
import { Button } from "@/components/ui/Button";

export const ProductContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 4/3;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StockStatus = styled.span<{ $inStock: boolean }>`
  color: ${({ $inStock, theme }) =>
    $inStock ? theme.colors.success : theme.colors.danger};
`;

export const ReviewsSection = styled.div`
  margin-top: 2rem;
`;

export const ReviewsToggle = styled(Button)`
  margin-bottom: 1rem;
  width: fit-content;
`;

export const ProductTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0;
`;

export const RatingDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.warning};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;
