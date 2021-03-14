import Head from "next/head";
// import Header from "../shared/Header";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

import { Container } from "./styles";

export type Layout = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: Layout) {
  return (
    <Container>
      <Head>
        <title>PokeShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <footer>Made with ❤ in Switzerland</footer>
    </Container>
  );
}

export default Layout;
