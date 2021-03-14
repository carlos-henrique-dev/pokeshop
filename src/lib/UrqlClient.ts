import { NextUrqlContext, SSRExchange, withUrqlClient, NextComponentType } from "next-urql";

const UrqlHOC = (children: NextComponentType) =>
  withUrqlClient((_ssrExchange: SSRExchange, ctx: NextUrqlContext | undefined) => ({
    url: "https://graphql-pokeapi.vercel.app/api/graphql",
  }))(children);

export { UrqlHOC };
