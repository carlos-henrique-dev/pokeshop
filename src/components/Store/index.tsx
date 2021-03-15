import React from "react";
import Link from "next/link";
import { Card, Name, StoreContainer, Image, ActionButtons, AddToPokedexIcon, IsOnPokedexIcon, SeeMore } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addToPokedex } from "../../store/duck/pokedex";
import { ReduxState } from "../../store";

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
  const { pokedex } = useSelector((state: ReduxState) => state);

  const dispatch = useDispatch();

  function handleAdd(pokemon: any) {
    dispatch(addToPokedex(pokemon));
  }

  function isOnPokedex(id: number) {
    return pokedex.pokemons.some((pokemon) => pokemon.id === id);
  }

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
            {isOnPokedex(pokemon.id) ? <IsOnPokedexIcon /> : <AddToPokedexIcon onClick={() => handleAdd(pokemon)} />}
          </ActionButtons>
        </Card>
      ))}
    </StoreContainer>
  );
}

export default Store;
