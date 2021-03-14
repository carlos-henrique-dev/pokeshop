import { useQuery, UseQueryResponse } from "urql";
import Layout from "../components/shared/Layout";
import { Pokemons } from "../generated/graphql";

export default function Home() {
  const [result] = useQuery<UseQueryResponse>({ query: Pokemons });

  const { data, fetching, error } = result;

  return (
    <Layout>
      <div>
        <pre style={{ margin: 0 }}>{JSON.stringify({ data, fetching, error }, null, 2)}</pre>
      </div>
    </Layout>
  );
}
