
declare module '*/pokemons.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const pokemons: DocumentNode;

  export default defaultDocument;
}
    