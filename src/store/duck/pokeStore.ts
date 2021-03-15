export const Types = {
  ADD_TO_POKESTORE: "ADD_TO_POKESTORE",
  ADD_QUERY_TO_POKESTORE: "ADD_QUERY_TO_POKESTORE",
  INCREMENT_OFFSET: "INCREMENT_OFFSET",
  RESET_OFFSET: "RESET_OFFSET",
  CLEAR_POKESTORE: "CLEAR_POKESTORE",
};

export type PokeStoreState = {
  pokemons: any[];
  limit: number;
  offset: number;
};

const initialState: PokeStoreState = {
  pokemons: [],
  limit: 40,
  offset: 0,
};

type Actions = {
  type: string;
  payload: any;
};

export default function stepsReducer(state = initialState, { type, payload }: Actions) {
  switch (type) {
    case Types.ADD_TO_POKESTORE:
      return { ...state, pokemons: [...state.pokemons, ...payload] };
    case Types.ADD_QUERY_TO_POKESTORE:
      return { ...state, pokemons: [payload] };
    case Types.INCREMENT_OFFSET:
      return { ...state, offset: state.offset + state.limit };
    case Types.INCREMENT_OFFSET:
      return { ...state, offset: 0 };
    case Types.CLEAR_POKESTORE:
      return { ...state, pokemons: [] };

    default:
      return state;
  }
}

export function addToPokeStore(pokemons: any) {
  return { type: Types.ADD_TO_POKESTORE, payload: pokemons };
}

export function clearPokeStore() {
  return { type: Types.CLEAR_POKESTORE };
}

export function addQueryToPokeStore(pokemons: any) {
  return { type: Types.ADD_QUERY_TO_POKESTORE, payload: pokemons };
}

export function incrementOffset() {
  return { type: Types.INCREMENT_OFFSET };
}

export function resetOffset() {
  return { type: Types.RESET_OFFSET };
}
