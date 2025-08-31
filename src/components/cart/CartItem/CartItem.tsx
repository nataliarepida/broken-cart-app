import Link from "next/link";
import { CartItem as CartItemType } from "@/lib/types/cart";
import { formatPrice, generateProductImageUrl } from "@/lib/utils/formatters";
import { useCart } from "@/contexts/CartContext";
import {
  CartItemContainer,
  ImageContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  QuantityControls,
  QuantityButton,
  Quantity,
  RemoveButton,
  TotalPrice,
} from "./CartItem.styles";

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.product.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeItem(item.product.id);
  };

  return (
    <CartItemContainer>
      <Link href={`/products/${item.product.id}`} passHref>
        <ImageContainer>
          <ProductImage src={generateProductImageUrl(item.product.image)} />
        </ImageContainer>
      </Link>

      <ProductInfo>
        <Link href={`/products/${item.product.id}`} passHref>
          <ProductName>{item.product.name}</ProductName>
        </Link>
        <ProductPrice>{formatPrice(item.product.price)}</ProductPrice>
        <QuantityControls>
          <QuantityButton
            onClick={handleDecreaseQuantity}
            disabled={item.quantity <= 1}
          >
            -
          </QuantityButton>
          <Quantity>{item.quantity}</Quantity>
          <QuantityButton onClick={handleIncreaseQuantity}>+</QuantityButton>
        </QuantityControls>
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      </ProductInfo>

      <TotalPrice>{formatPrice(item.product.price * item.quantity)}</TotalPrice>
    </CartItemContainer>
  );
};
