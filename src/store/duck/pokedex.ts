export const Types = {
  ADD_POKEMON: "ADD_POKEMON",
  REMOVE_POKEMON: "REMOVE_POKEMON",
};

export type PokedexState = {
  pokemons: any[];
};

const initialState: PokedexState = {
  pokemons: [],
};

type Actions = {
  type: string;
  payload: any;
};

export default function stepsReducer(state = initialState, { type, payload }: Actions) {
  switch (type) {
    case Types.ADD_POKEMON:
      return { ...state, pokemons: [...state.pokemons, payload] };
    case Types.REMOVE_POKEMON:
      return { ...state, pokemons: state.pokemons.filter((pokemon: any) => pokemon.id !== payload) };

    default:
      return state;
  }
}

export function addToPokedex(pokemon: any) {
  return { type: Types.ADD_POKEMON, payload: pokemon };
}

export function removeFromPokedex(pokemonID: any) {
  return { type: Types.REMOVE_POKEMON, payload: pokemonID };
}
