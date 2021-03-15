export const Types = {
  ADD_TO_POKESTORE: "ADD_TO_POKESTORE",
  INCREMENT_OFFSET: "INCREMENT_OFFSET",
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
    case Types.INCREMENT_OFFSET:
      return { ...state, offset: state.offset + state.limit };

    default:
      return state;
  }
}

export function addToPokeStore(pokemons: any) {
  return { type: Types.ADD_TO_POKESTORE, payload: pokemons };
}

export function incrementOffset() {
  return { type: Types.INCREMENT_OFFSET };
}
