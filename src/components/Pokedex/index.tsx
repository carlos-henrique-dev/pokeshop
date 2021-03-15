import React from "react";
import Link from "next/link";
import { Card, Name, StoreContainer, Image, ActionButtons, RemoveFromPokedexIcon, SeeMore } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPokedex } from "../../store/duck/pokedex";
import { ReduxState } from "../../store";

type PokemonInfo = {
  id: number;
  url: string;
  name: string;
  image: string;
};

function Pokedex() {
  const { pokedex } = useSelector((state: ReduxState) => state);
  const { pokemons } = pokedex;

  const dispatch = useDispatch();

  function handleAdd(pokemonId: number) {
    dispatch(removeFromPokedex(pokemonId));
  }

  return (
    <StoreContainer>
      {pokemons.map((pokemon: PokemonInfo) => (
        <Card key={pokemon.id}>
          <Image src={pokemon.image} alt={pokemon.name} />
          <Name>{pokemon.name}</Name>
          <ActionButtons>
            <Link href="#">
              <SeeMore>Ver Detalhes</SeeMore>
            </Link>
            <RemoveFromPokedexIcon onClick={() => handleAdd(pokemon.id)} />
          </ActionButtons>
        </Card>
      ))}
    </StoreContainer>
  );
}

export default Pokedex;
