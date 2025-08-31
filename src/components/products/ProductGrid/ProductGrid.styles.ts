import styled from "styled-components";

export const GridWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const LoadingGrid = styled(Grid)`
  opacity: 0.6;
  pointer-events: none;
`;

export const LoadingSkeleton = styled.div`
  height: 400px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.surface} 25%,
    ${({ theme }) => theme.colors.border} 50%,
    ${({ theme }) => theme.colors.surface} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing["3xl"]};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const EmptyTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const EmptyDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin: 0;
`;
