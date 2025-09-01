import { ProductCategory } from "@/lib/types/product";
import {
  CategoriesWrapper,
  FilterButton,
  FilterLabel,
  FiltersWrapper,
} from "./ProductFilters.styles";
import { formatCategory } from "@/lib/utils/formatters";
import { SearchInput } from "@/components/ui/SearchInput";

type ProductFiltersProps = {
  categories: string[];
  selectedCategory?: ProductCategory;
  onCategoryChange: (category?: ProductCategory) => void;
  onSearch: (search: string) => void;
};

export const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onSearch,
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
      <CategoriesWrapper>
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
      </CategoriesWrapper>
      <SearchInput
        onSearch={onSearch}
        placeholder="Search products..."
        debounceMs={500}
      />
    </FiltersWrapper>
  );
};
