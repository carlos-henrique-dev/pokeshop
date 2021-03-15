import { useRouter } from "next/router";
import Layout from "../../components/shared/Layout";
import { useGetPokemonQuery } from "../../generated/graphql";
import Loading from "../../components/shared/Loading";
import Error from "../../components/shared/Error";
import PokemonDetails from "../../components/PokemonDetails";

const Pokemon = () => {
  const router = useRouter();
  const { name = "" } = router.query;

  const { loading, error, data } = useGetPokemonQuery({ variables: { name: name as string } });

  return (
    <Layout>
      {loading && <Loading />}
      {!loading && data && <PokemonDetails data={data} />}
      {!loading && error && <Error />}
    </Layout>
  );
};

export default Pokemon;
