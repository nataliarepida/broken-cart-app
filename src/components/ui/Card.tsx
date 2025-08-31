import styled from "styled-components";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  padding?: "sm" | "md" | "lg";
  shadow?: "sm" | "md" | "lg";
  hover?: boolean;
};

const StyledCard = styled.div<{
  $padding: string;
  $shadow: string;
  $hover: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ $padding }) => $padding};
  box-shadow: ${({ $shadow }) => $shadow};
  transition: all 0.2s ease-in-out;

  ${({ $hover, theme }) =>
    $hover &&
    `
    &:hover {
      box-shadow: ${theme.shadows.lg};
      transform: translateY(-2px);
    }
  `}
`;

export const Card = ({
  children,
  padding = "md",
  shadow = "sm",
  hover = false,
}: CardProps) => {
  const getPaddingValue = () => {
    switch (padding) {
      case "sm":
        return "1rem";
      case "md":
        return "1.5rem";
      case "lg":
        return "2rem";
      default:
        return "1.5rem";
    }
  };

  const getShadowValue = () => {
    switch (shadow) {
      case "sm":
        return "0 1px 2px 0 rgb(0 0 0 / 0.05)";
      case "md":
        return "0 4px 6px -1px rgb(0 0 0 / 0.1)";
      case "lg":
        return "0 10px 15px -3px rgb(0 0 0 / 0.1)";
      default:
        return "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    }
  };

  return (
    <StyledCard
      $padding={getPaddingValue()}
      $shadow={getShadowValue()}
      $hover={hover}
    >
      {children}
    </StyledCard>
  );
};
