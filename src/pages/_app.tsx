import { NextComponentType } from "next-urql";
import { AppProps } from "next/app";
import { UrqlHOC } from "../lib/UrqlClient";

import { ThemeProvider } from "styled-components";
import theme from "../theme";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default UrqlHOC(MyApp as NextComponentType);
