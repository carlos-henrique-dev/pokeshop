import React from "react";
import Link from "next/link";
import { StoreContainer, LoadMore } from "./styles";
import { Card, Name, Image, ActionButtons, AddToPokedexIcon, IsOnPokedexIcon, SeeMore } from "../shared/Card/styles";
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
  data: PokemonInfo[];
  loadMore: (e: any) => void;
};

function Store({ data, loadMore }: Props) {
  const { pokedex } = useSelector((state: ReduxState) => state);

  const dispatch = useDispatch();

  function handleAdd(pokemon: any) {
    dispatch(addToPokedex(pokemon));
  }

  function isOnPokedex(id: number) {
    return pokedex.pokemons.some((pokemon) => pokemon.id === id);
  }

  return (
    <>
      <StoreContainer>
        {data?.map((pokemon: PokemonInfo) => (
          <Card key={pokemon.id + Math.random().toString(36).substring(7)}>
            <Image src={pokemon.image} alt={pokemon.name} />
            <Name>{pokemon.name}</Name>
            <ActionButtons>
              <Link href={`/pokemon/${pokemon.name}`}>
                <SeeMore>Ver Detalhes</SeeMore>
              </Link>
              {isOnPokedex(pokemon.id) ? <IsOnPokedexIcon /> : <AddToPokedexIcon onClick={() => handleAdd(pokemon)} />}
            </ActionButtons>
          </Card>
        ))}
      </StoreContainer>
      <LoadMore onClick={loadMore}>Carregar Mais</LoadMore>
    </>
  );
}

export default Store;
