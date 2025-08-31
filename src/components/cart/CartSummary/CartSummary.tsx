import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils/formatters";
import { Button } from "@/components/ui/Button";
import {
  SummaryContainer,
  SummaryTitle,
  SummaryRow,
  TotalRow,
  Label,
  Value,
} from "./CartSummary.styles";

export const CartSummary = () => {
  const { items } = useCart();

  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping for now
  const total = subtotal + shipping;

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  const handleCheckout = () => {
    // TODO: Implement checkout functionality
    alert("Checkout functionality would be implemented here!");
  };

  return (
    <SummaryContainer>
      <SummaryTitle>Cart Summary</SummaryTitle>
      <SummaryRow>
        <Label>Items ({itemCount})</Label>
        <Value>{formatPrice(subtotal)}</Value>
      </SummaryRow>
      <SummaryRow>
        <Label>Shipping</Label>
        <Value>{shipping === 0 ? "Free" : formatPrice(shipping)}</Value>
      </SummaryRow>
      <TotalRow>
        <Label>Total</Label>
        <Value>{formatPrice(total)}</Value>
      </TotalRow>
      <Button fullWidth disabled={items.length === 0} onClick={handleCheckout}>
        Proceed to Checkout
      </Button>
    </SummaryContainer>
  );
};
