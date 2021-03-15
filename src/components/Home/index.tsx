import Link from "next/link";
import React from "react";
import { Container, Title, Subtitle, StyledLink, ButtonContainer } from "./styles";

function Home() {
  return (
    <Container>
      <Title>Bem vindo(a) à PokeShop</Title>
      <Subtitle>Escolha a ação desejada</Subtitle>
      <ButtonContainer>
        <Link href="/store">
          <StyledLink>Ver loja</StyledLink>
        </Link>
        <Link href="/store">
          <StyledLink href="">Ver minha pokedex</StyledLink>
        </Link>
      </ButtonContainer>
    </Container>
  );
}

export default Home;
