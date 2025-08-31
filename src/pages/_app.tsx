import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/ui/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
}
