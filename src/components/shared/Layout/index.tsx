import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../../store";
import { selectTheme } from "../../../store/duck/theme";
import { Container, HeaderContainer, ThemesIcons, Logo, Main, Footer } from "./styles";

export type Layout = {
  children: JSX.Element | JSX.Element[];
};

function Header() {
  const { theme } = useSelector((state: ReduxState) => state);
  console.log(theme);

  const dispatch = useDispatch();

  const handleThemeChange = (e: any) => {
    dispatch(selectTheme(e.target.id));
  };

  return (
    <HeaderContainer>
      <Logo>PokeShop</Logo>

      <div>
        <ThemesIcons
          src="/bullbasaur.ico"
          id="BulbasaurTheme"
          onClick={handleThemeChange}
          isActive={theme.theme.name === "BulbasaurTheme"}
        />
        <ThemesIcons
          src="/charmander.ico"
          id="CharmanderTheme"
          onClick={handleThemeChange}
          isActive={theme.theme.name === "CharmanderTheme"}
        />
        <ThemesIcons
          src="/squirtle.ico"
          id="SquirtleTheme"
          onClick={handleThemeChange}
          isActive={theme.theme.name === "SquirtleTheme"}
        />
      </div>
    </HeaderContainer>
  );
}

function Layout({ children }: Layout) {
  return (
    <Container>
      <Head>
        <title>PokeShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>{children}</Main>
      <Footer>Made with ❤ by Carlos Henrique</Footer>
    </Container>
  );
}

export default Layout;
