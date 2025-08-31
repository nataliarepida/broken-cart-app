import { Button } from "@/components/ui/Button";
import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;

export const FilterLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const FilterButton = styled(Button)<{ $isActive: boolean }>`
  ${({ $isActive, theme }) =>
    $isActive &&
    `
    background-color: ${theme.colors.primary};
    color: white;
    border-color: ${theme.colors.primary};
  `}
`;
