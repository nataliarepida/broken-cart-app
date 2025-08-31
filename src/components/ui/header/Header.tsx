import Link from "next/link";
import { CartIcon } from "@/components/cart/CartIcon";
import { useCart } from "@/contexts/CartContext";
import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  Navigation,
  NavLink,
  RightSection,
} from "./Header.styles";

const categories = ["electronics", "clothing", "books", "home"];

export const Header = () => {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link href="/" passHref>
          <Logo>RapidCart</Logo>
        </Link>

        <Navigation>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/?category=${category}`}
              passHref
              legacyBehavior
            >
              <NavLink>{category}</NavLink>
            </Link>
          ))}
        </Navigation>

        <RightSection>
          <CartIcon itemCount={itemCount} />
        </RightSection>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
