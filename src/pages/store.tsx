import React from "react";
import { useQuery, UseQueryResponse } from "urql";
import { GetPokemons } from "../generated/graphql";
import Layout from "../components/shared/Layout";
import Store from "../components/Store";
import Loading from "../components/shared/Loading";
import Error from "../components/shared/Error";

function store() {
  const [result] = useQuery<UseQueryResponse>({ query: GetPokemons, variables: { limit: 20, offset: 0 } });

  const { data, fetching, error } = result;

  return (
    <Layout>
      {fetching && <Loading />}
      {!fetching && data && <Store data={data} />}
      {!fetching && error && <Error />}
    </Layout>
  );
}

export default store;
