import React, { useState } from "react";
import { useGetPokemonLazyQuery, useGetPokemonsLazyQuery } from "../generated/graphql";
import Layout from "../components/shared/Layout";
import Store from "../components/Store";
import Loading from "../components/shared/Loading";
import Error from "../components/shared/Error";
import { useDispatch, useSelector } from "react-redux";
import { addQueryToPokeStore, addToPokeStore, incrementOffset, resetOffset } from "../store/duck/pokeStore";
import { ReduxState } from "../store";

function StorePage() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const { pokeStore } = useSelector((state: ReduxState) => state);
  const { pokemons, offset, limit } = pokeStore;

  const [loadMore, { loading, error, data }] = useGetPokemonsLazyQuery({
    variables: { limit, offset },
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      if (data.pokemons?.results) {
        setMessage("");
        dispatch(addToPokeStore(data?.pokemons?.results));
      }
    },
  });

  const [queryPokemon] = useGetPokemonLazyQuery({
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      if (data?.pokemon?.id) {
        setMessage("");
        const { id, name, sprites } = data.pokemon;

        const image = sprites?.front_default || "";
        dispatch(addQueryToPokeStore({ id, name, image, url: "" }));
      } else {
        setMessage("Pokemon não encontrado");
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

  async function handleQuery(query: any) {
    if (query === "") {
      await dispatch(resetOffset());
      loadMore();
    } else {
      queryPokemon({ variables: { name: query } });
    }
  }

  return (
    <Layout alignCenter={false}>
      {loading && <Loading />}
      {!loading && data && <Store data={pokemons} loadMore={onLoadMore} onQuery={handleQuery} message={message} />}
      {!loading && error && <Error />}
    </Layout>
  );
}

export default StorePage;
