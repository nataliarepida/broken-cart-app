import { GetServerSideProps } from "next";
import { ProductDetails } from "@/components/products/ProductDetails";
import { Product } from "@/lib/types/product";
import { getProduct } from "@/lib/api/products";

type ProductPageProps = {
  product: Product;
};

export default function ProductPage({ product }: ProductPageProps) {
  return <ProductDetails product={product} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id as string;
    const product = await getProduct(id);

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
