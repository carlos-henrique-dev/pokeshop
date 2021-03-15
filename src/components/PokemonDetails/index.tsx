import React from "react";
import { AddToPokedexButton, BackButton, ButtonsContainer, DetailContainer, GoToPokedexButton } from "./styles";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../store";
import { addToPokedex } from "../../store/duck/pokedex";
import Link from "next/link";

type Props = {
  data: any;
};

function PokemonDetails({ data }: Props) {
  const { pokemon } = data;
  const { pokedex } = useSelector((state: ReduxState) => state);

  const router = useRouter();
  const dispatch = useDispatch();

  function handleAdd(pokemon: any) {
    const { id, name, sprites } = pokemon;

    const image = sprites.front_default;

    dispatch(addToPokedex({ id, name, image, url: "" }));
  }

  function isOnPokedex(id: number) {
    return pokedex.pokemons.some((pokemon) => pokemon.id === id);
  }

  if (!pokemon) {
    return null;
  }

  return (
    <DetailContainer>
      <ButtonsContainer>
        <BackButton onClick={() => router.back()}>Voltar</BackButton>
        <Link href="/pokedex">
          <GoToPokedexButton>Ver minha pokedex</GoToPokedexButton>
        </Link>
        {!isOnPokedex(pokemon.id) && (
          <AddToPokedexButton onClick={() => handleAdd(pokemon)}>Adicionar na pokedex</AddToPokedexButton>
        )}
      </ButtonsContainer>
      <img src={pokemon.sprites.front_default} alt="" />
      <span>{pokemon.name}</span>

      <div>
        <h1>Tipos</h1>
        <ul>
          {pokemon.types.map((type: any) => (
            <li>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Habilidades</h1>
        <ul>
          {pokemon.abilities.map((ability: any) => (
            <li>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Formas</h1>
        <ul>
          {pokemon.forms.map((form: any) => (
            <li>{form.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Status</h1>
        <ul>
          {pokemon.stats.map((stat: any) => (
            <li>
              Descrição: {stat.stat.name} - Esforço: {stat.effort} - Status base: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Movimentos</h1>
        <ul>
          {pokemon.moves.map((move: any) => (
            <li>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </DetailContainer>
  );
}

export default PokemonDetails;
