import { AppProps } from "next/app";

import client from "../lib/ApolloClient";

import { ApolloProvider } from "@apollo/client";

import { Provider as ReduxProvider, useSelector } from "react-redux";
import { ReduxState, useStore } from "../store";

import { ThemeProvider } from "styled-components";

import "../styles/index.css";

function ThemeWrapper({ children }: { children: JSX.Element }) {
  const { theme } = useSelector((state: ReduxState) => state);

  return <ThemeProvider theme={theme.theme}>{children}</ThemeProvider>;
}

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <ThemeWrapper>
          <Component {...pageProps} />
        </ThemeWrapper>
      </ApolloProvider>
    </ReduxProvider>
  );
}

export default MyApp;
