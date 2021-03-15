import React, { useState } from "react";
import Link from "next/link";
import { StoreContainer, LoadMore, SearchBar, SearchTip } from "./styles";
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
  onQuery: (e: any) => void;
  message: string;
};

function Store({ data, loadMore, onQuery, message }: Props) {
  const [query, setQuery] = useState("");
  const { pokedex } = useSelector((state: ReduxState) => state);

  const dispatch = useDispatch();

  function handleAdd(pokemon: any) {
    dispatch(addToPokedex(pokemon));
  }

  function isOnPokedex(id: number) {
    return pokedex.pokemons.some((pokemon) => pokemon.id === id);
  }

  function handleKeyPress(event: any) {
    if (event.key === "Enter") {
      onQuery(query);
    }
  }

  function handleChange(e: any) {
    setQuery(e.target.value);
  }

  return (
    <>
      <>
        <SearchBar placeholder="Digite o nome do pokemon" onKeyPress={handleKeyPress} onChange={handleChange} />
        <SearchTip>
          Aperte 'Enter' para buscar
          <br /> (para limpar a busca e mostrar todos, basta fazer uma pesquisa vazia)
        </SearchTip>
      </>
      {message !== "" && <span>{message}</span>}
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
