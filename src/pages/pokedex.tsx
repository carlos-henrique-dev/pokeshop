import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokedex from "../components/Pokedex";
import Layout from "../components/shared/Layout";
import { ReduxState } from "../store";

function pokedex() {
  // const dispatch = useDispatch();
  // const { pokedex } = useSelector((state: ReduxState) => state);

  return (
    <Layout>
      <div>Minha Pokedex</div>
      <Pokedex />
    </Layout>
  );
}

export default pokedex;
