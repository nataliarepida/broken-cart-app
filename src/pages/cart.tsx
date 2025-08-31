import Head from "next/head";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Container,
  PageHeader,
  PageTitle,
} from "@/components/layout/page.styles";
import {
  CartContent,
  CartItems,
  CartItemsHeader,
  ClearCartButton,
  ContinueShoppingButton,
  EmptyCart,
  EmptyCartDescription,
  EmptyCartIcon,
  EmptyCartTitle,
  ItemsCount,
} from "@/components/layout/cart.styles";

export default function CartPage() {
  const { items, itemCount, clearCart } = useCart();

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      clearCart();
    }
  };

  if (items.length === 0) {
    return (
      <>
        <Head>
          <title>Shopping Cart - RapidCart</title>
          <meta name="description" content="Your shopping cart is empty" />
        </Head>

        <Container>
          <PageHeader>
            <PageTitle>Shopping Cart</PageTitle>
          </PageHeader>

          <Card>
            <EmptyCart>
              <EmptyCartIcon>🛒</EmptyCartIcon>
              <EmptyCartTitle>Your cart is empty</EmptyCartTitle>
              <EmptyCartDescription>
                Looks like you haven&apos;t added any items to your cart yet.
                Start shopping to fill it up!
              </EmptyCartDescription>
              <ContinueShoppingButton>
                <Link href="/" passHref>
                  <Button>Continue Shopping</Button>
                </Link>
              </ContinueShoppingButton>
            </EmptyCart>
          </Card>
        </Container>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Shopping Cart ({itemCount} items) - RapidCart</title>
        <meta
          name="description"
          content={`Your shopping cart with ${itemCount} items`}
        />
      </Head>

      <Container>
        <PageHeader>
          <PageTitle>Shopping Cart</PageTitle>
        </PageHeader>

        <CartContent>
          <CartItems>
            <CartItemsHeader>
              <ItemsCount>
                {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
              </ItemsCount>
              <ClearCartButton>
                <Button variant="ghost" size="sm" onClick={handleClearCart}>
                  Clear Cart
                </Button>
              </ClearCartButton>
            </CartItemsHeader>

            <Card padding="sm">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </Card>

            <div style={{ marginTop: "2rem" }}>
              <Link href="/" passHref>
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          </CartItems>

          <CartSummary />
        </CartContent>
      </Container>
    </>
  );
}
