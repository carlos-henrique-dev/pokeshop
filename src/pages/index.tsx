import { useQuery, UseQueryResponse } from "urql";
import Layout from "../components/shared/Layout";
import { Pokemons } from "../generated/graphql";
import Home from "../components/Home";

export default function Index() {
  // const [result] = useQuery<UseQueryResponse>({ query: Pokemons, variables: { limit: 20, offset: 1 } });

  // const { data, fetching, error } = result;

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
