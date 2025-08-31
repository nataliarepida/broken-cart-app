import styled, { css } from "styled-components";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        border: 1px solid ${({ theme }) => theme.colors.primary};

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primaryHover};
          border-color: ${({ theme }) => theme.colors.primaryHover};
        }
      `;
    case "secondary":
      return css`
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        border: 1px solid ${({ theme }) => theme.colors.secondary};

        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      `;
    case "outline":
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primary};
          color: white;
        }
      `;
    case "ghost":
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.text.primary};
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.surface};
        }
      `;
    default:
      return css``;
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return css`
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
      `;
    case "md":
      return css`
        padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        border-radius: ${({ theme }) => theme.borderRadius.md};
      `;
    case "lg":
      return css`
        padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
        font-size: ${({ theme }) => theme.typography.fontSize.lg};
        border-radius: ${({ theme }) => theme.borderRadius.lg};
      `;
    default:
      return css``;
  }
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  ${({ $variant }) => getVariantStyles($variant)}
  ${({ $size }) => getSizeStyles($size)}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};
