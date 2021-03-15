import React from "react";
import { useQuery, UseQueryResponse } from "urql";
import { Pokemons } from "../generated/graphql";
import Layout from "../components/shared/Layout";
import Store from "../components/Store";
import Loading from "../components/shared/Loading";

function store() {
  const [result] = useQuery<UseQueryResponse>({ query: Pokemons, variables: { limit: 20, offset: 0 } });

  const { data, fetching, error } = result;

  return (
    <Layout>
      {fetching && <Loading />}
      {!fetching && data && <Store data={data} />}
    </Layout>
  );
}

export default store;

// {!fetching && error && <span>Desculpe, Houve um erro...</span>}
