import React from "react";
import Link from "next/link";
import { Card, Name, StoreContainer, Image, ActionButtons, CartIcon, SeeMore } from "./styles";

type PokemonInfo = {
  id: number;
  url: string;
  name: string;
  image: string;
};

type Props = {
  data: {
    [key: string]: any;
    pokemons?: {
      [key: string]: any;
      results: PokemonInfo[];
    };
  };
};

function Store({ data }: Props) {
  const { pokemons } = data;

  return (
    <StoreContainer>
      {pokemons?.results.map((pokemon: PokemonInfo) => (
        <Card key={pokemon.id}>
          <Image src={pokemon.image} alt={pokemon.name} />
          <Name>{pokemon.name}</Name>
          <ActionButtons>
            <Link href="#">
              <SeeMore>Ver Detalhes</SeeMore>
            </Link>
            <CartIcon />
          </ActionButtons>
        </Card>
      ))}
    </StoreContainer>
  );
}

export default Store;
