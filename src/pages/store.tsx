import React from "react";
import { useGetPokemonsLazyQuery } from "../generated/graphql";
import Layout from "../components/shared/Layout";
import Store from "../components/Store";
import Loading from "../components/shared/Loading";
import Error from "../components/shared/Error";
import { useDispatch, useSelector } from "react-redux";
import { addToPokeStore, incrementOffset } from "../store/duck/pokeStore";
import { ReduxState } from "../store";

function store() {
  const dispatch = useDispatch();

  const { pokeStore } = useSelector((state: ReduxState) => state);
  const { pokemons, offset, limit } = pokeStore;

  const [loadMore, { loading, error, data }] = useGetPokemonsLazyQuery({
    variables: { limit, offset },
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      if (data.pokemons?.results) {
        dispatch(addToPokeStore(data?.pokemons?.results));
        console.log("after", [...pokemons, ...data.pokemons.results]);
      }
    },
  });

  React.useEffect(() => {
    loadMore();
  }, []);

  async function onLoadMore(e: any) {
    e.preventDefault();
    await dispatch(incrementOffset());
    loadMore();
  }

  return (
    <Layout>
      {loading && <Loading />}
      {!loading && data && <Store data={pokemons} loadMore={onLoadMore} />}
      {!loading && error && <Error />}
    </Layout>
  );
}

export default store;
