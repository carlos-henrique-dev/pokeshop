
declare module '*/pokemons.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetPokemons: DocumentNode;
export const GetPokemon: DocumentNode;

  export default defaultDocument;
}
    