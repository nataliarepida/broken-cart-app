import { ProductCategory } from "@/lib/types/product";
import {
  FilterButton,
  FilterLabel,
  FiltersWrapper,
} from "./ProductFilters.styles";
import { formatCategory } from "@/lib/utils/formatters";

type ProductFiltersProps = {
  categories: string[];
  selectedCategory?: ProductCategory;
  onCategoryChange: (category?: ProductCategory) => void;
};

export const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) => {
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      onCategoryChange(undefined); // Clear filter if same category clicked
    } else {
      onCategoryChange(category as ProductCategory);
    }
  };

  const handleClearFilters = () => {
    onCategoryChange(undefined);
  };

  return (
    <FiltersWrapper>
      <FilterLabel>Filter by:</FilterLabel>

      <FilterButton
        variant="outline"
        size="sm"
        $isActive={!selectedCategory}
        onClick={handleClearFilters}
      >
        All Products
      </FilterButton>

      {categories.map((category) => (
        <FilterButton
          key={category}
          variant="outline"
          size="sm"
          $isActive={selectedCategory === category}
          onClick={() => handleCategoryClick(category)}
        >
          {formatCategory(category)}
        </FilterButton>
      ))}
    </FiltersWrapper>
  );
};
