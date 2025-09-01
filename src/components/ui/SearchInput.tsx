import { ChangeEvent, useCallback } from "react";
import styled from "styled-components";
import { debounce } from "lodash";

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  width: 100%;
  max-width: 300px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

type SearchInputProps = {
  onSearch: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
};

export const SearchInput = ({
  onSearch,
  placeholder = "Search...",
  debounceMs = 300,
}: SearchInputProps) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      debounce((value: string) => {
        onSearch(value);
      }, debounceMs)(e.target.value);
    },
    [onSearch, debounceMs]
  );

  return (
    <Input type="text" placeholder={placeholder} onChange={handleChange} />
  );
};
