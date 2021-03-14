import { AppProps } from "next/app";

import { NextComponentType } from "next-urql";
import { UrqlHOC } from "../lib/UrqlClient";

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
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </ReduxProvider>
  );
}

export default UrqlHOC(MyApp as NextComponentType);
