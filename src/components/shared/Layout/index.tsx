import Head from "next/head";
import { useDispatch } from "react-redux";
import { selectTheme } from "../../../store/duck/theme";
import { CharmanderTheme } from "../../../theme";
import { Container, Header } from "./styles";

export type Layout = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: Layout) {
  const dispatch = useDispatch();

  const handleThemeChange = (theme: string) => {
    dispatch(selectTheme(theme));
  };

  return (
    <Container>
      <Head>
        <title>PokeShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <button onClick={() => handleThemeChange("BulbasaurTheme")}>Bulbasaur</button>
        <button onClick={() => handleThemeChange("CharmanderTheme")}>Charmander</button>
        <button onClick={() => handleThemeChange("SquirtleTheme")}>Squirtle</button>
      </Header>
      <main>{children}</main>
      <footer>Made with ❤ in Switzerland</footer>
    </Container>
  );
}

export default Layout;
