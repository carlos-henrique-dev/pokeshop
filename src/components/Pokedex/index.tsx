import React from "react";
import Link from "next/link";
import { PokedexContainer, PokedexItems, Statistics, Title } from "./styles";
import { Card, Name, Image, ActionButtons, SeeMore, RemoveFromPokedexIcon } from "../shared/Card/styles";
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

  function renderPokedexSize() {
    return <span>Total de pokemons: {pokemons.length}</span>;
  }

  function renderPokedexStatistics() {
    return <span>Total de pokemons: {pokemons.length}</span>;
  }

  return (
    <PokedexContainer>
      <Title>Minha Pokedex</Title>

      <Statistics>
        {renderPokedexSize()}
        {renderPokedexStatistics()}
      </Statistics>
      <PokedexItems>
        {pokemons.map((pokemon: PokemonInfo) => (
          <Card key={pokemon.id}>
            <Image src={pokemon.image} alt={pokemon.name} />
            <Name>{pokemon.name}</Name>
            <ActionButtons>
              <Link href={`/pokemon/${pokemon.name}`}>
                <SeeMore>Ver Detalhes</SeeMore>
              </Link>
              <RemoveFromPokedexIcon onClick={() => handleAdd(pokemon.id)} />
            </ActionButtons>
          </Card>
        ))}
      </PokedexItems>
    </PokedexContainer>
  );
}

export default Pokedex;
