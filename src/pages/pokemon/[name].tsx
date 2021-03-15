import { useRouter } from "next/router";
import { useQuery, UseQueryResponse } from "urql";
import Layout from "../../components/shared/Layout";
import { GetPokemon } from "../../generated/graphql";
import Loading from "../../components/shared/Loading";
import Error from "../../components/shared/Error";
import PokemonDetails from "../../components/PokemonDetails";

const Pokemon = () => {
  const router = useRouter();
  const { name } = router.query;

  const [result] = useQuery<UseQueryResponse>({ query: GetPokemon, variables: { name } });

  const { data, fetching, error } = result;

  return (
    <Layout>
      {fetching && <Loading />}
      {!fetching && data && <PokemonDetails data={data} />}
      {!fetching && error && <Error />}
    </Layout>
  );
};

export default Pokemon;
