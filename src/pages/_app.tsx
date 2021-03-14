import { NextComponentType } from "next-urql";
import { AppProps } from "next/app";
import { UrqlHOC } from "../lib/UrqlClient";

import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default UrqlHOC(MyApp as NextComponentType);
