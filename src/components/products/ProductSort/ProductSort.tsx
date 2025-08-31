import { SortOption } from "@/lib/types/product";
import { SortLabel, SortSelect, SortWrapper } from "./ProductSort.styles";

type ProductSortProps = {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
};

const sortOptions = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
] as { value: string; label: string }[];

export const ProductSort = ({ sortBy, onSortChange }: ProductSortProps) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value as SortOption);
  };

  return (
    <SortWrapper>
      <SortLabel htmlFor="sort-select">Sort by:</SortLabel>
      <SortSelect id="sort-select" value={sortBy} onChange={handleSortChange}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SortSelect>
    </SortWrapper>
  );
};
