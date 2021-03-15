import React from "react";
import { Container, Title, Subtitle, Button, ButtonContainer } from "./styles";

function Home() {
  return (
    <Container>
      <Title>Bem vindo(a) à PokeShop</Title>
      <Subtitle>Escolha a ação desejada</Subtitle>
      <ButtonContainer>
        <Button>Ver loja</Button>
        <Button>Ver minha pokedex</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Home;
