import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useProducts } from "@/hooks/useProducts";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductSort } from "@/components/products/ProductSort";
import { ProductCategory, Product } from "@/lib/types";
import { GetServerSideProps } from "next";
import { productsApi } from "@/lib/api/products";
import {
  Container,
  PageHeader,
  PageSubtitle,
  PageTitle,
} from "@/components/layout/page.styles";
import {
  FiltersSection,
  ResultsCount,
  ResultsInfo,
} from "@/components/layout/home.styles";

interface HomePageProps {
  initialProducts: Product[];
  initialCategories: string[];
}

export default function HomePage({
  initialProducts,
  initialCategories,
}: HomePageProps) {
  const router = useRouter();
  const {
    products,
    categories,
    filters,
    sortBy,
    isLoading,
    updateFilters,
    setSortBy,
  } = useProducts({ initialProducts, initialCategories });

  useEffect(() => {
    const { category } = router.query;
    if (category) {
      updateFilters({ category: category as ProductCategory });
    }
  }, [router.query, updateFilters]);

  const handleCategoryChange = (category?: ProductCategory) => {
    updateFilters({ category });

    const newQuery = { ...router.query };
    if (category) {
      newQuery.category = category;
    } else {
      delete newQuery.category;
    }

    router.push(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  const getPageTitle = () => {
    if (filters.category) {
      return `${
        filters.category.charAt(0).toUpperCase() + filters.category.slice(1)
      } Products`;
    }
    return "All Products";
  };

  const getPageSubtitle = () => {
    if (filters.category) {
      return `Discover our selection of ${filters.category} products`;
    }
    return "Discover our complete product catalog";
  };

  return (
    <>
      <Head>
        <title>{getPageTitle()} - RapidCart</title>
        <meta name="description" content={getPageSubtitle()} />
      </Head>

      <Container>
        <PageHeader>
          <PageTitle>{getPageTitle()}</PageTitle>
          <PageSubtitle>{getPageSubtitle()}</PageSubtitle>
        </PageHeader>

        <FiltersSection>
          <ProductFilters
            categories={categories}
            selectedCategory={filters.category}
            onCategoryChange={handleCategoryChange}
          />
          <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
        </FiltersSection>

        <ResultsInfo>
          <ResultsCount>
            {isLoading ? "Loading..." : `${products.length} products found`}
          </ResultsCount>
        </ResultsInfo>

        <ProductGrid products={products} isLoading={isLoading} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({
  query,
}) => {
  const category =
    typeof query.category === "string"
      ? (query.category as ProductCategory)
      : undefined;
  const sortBy = typeof query.sort === "string" ? query.sort : "name-asc";

  const [productsResponse, categoriesResponse] = await Promise.all([
    productsApi.getProducts({ category }, sortBy),
    productsApi.getCategories(),
  ]);

  return {
    props: {
      initialProducts: productsResponse.data || [],
      initialCategories: categoriesResponse.data || [],
    },
  };
};
