import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../../store";
import { selectTheme } from "../../../store/duck/theme";
import { Container, HeaderContainer, ThemesIcons, Logo, Main, Footer } from "./styles";
import Link from "next/link";

export type Layout = {
  children: JSX.Element | JSX.Element[] | any;
  alignCenter?: boolean;
};

function Header() {
  const { theme } = useSelector((state: ReduxState) => state).theme;

  const dispatch = useDispatch();

  const handleThemeChange = (e: any) => {
    dispatch(selectTheme(e.target.id));
  };

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>PokeShop</Logo>
      </Link>

      <div>
        <ThemesIcons
          src="/bullbasaur.ico"
          id="BulbasaurTheme"
          onClick={handleThemeChange}
          isActive={theme.name === "BulbasaurTheme"}
        />
        <ThemesIcons
          src="/charmander.ico"
          id="CharmanderTheme"
          onClick={handleThemeChange}
          isActive={theme.name === "CharmanderTheme"}
        />
        <ThemesIcons
          src="/squirtle.ico"
          id="SquirtleTheme"
          onClick={handleThemeChange}
          isActive={theme.name === "SquirtleTheme"}
        />
      </div>
    </HeaderContainer>
  );
}

function Layout({ children, alignCenter = true }: Layout) {
  return (
    <Container>
      <Head>
        <title>PokeShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main alignCenter={alignCenter}>{children}</Main>
      <Footer>Made with ❤ by Carlos Henrique</Footer>
    </Container>
  );
}

export default Layout;
