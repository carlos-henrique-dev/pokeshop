import Layout from "../components/shared/Layout";

import { useQuery } from "urql";

const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}`;

const gqlVariables = {
  limit: 2,
  offset: 1,
};

export default function Home() {
  const [result, reexecuteQuery] = useQuery({
    query: gqlQuery,
    // onError:
  });

  const { data, fetching, error } = result;

  return (
    <Layout>
      <div>
        <pre>{JSON.stringify({ data, fetching, error }, null, 2)}</pre>
      </div>
    </Layout>
  );
}
