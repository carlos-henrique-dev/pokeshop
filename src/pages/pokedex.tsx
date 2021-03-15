import React from "react";
import Pokedex from "../components/Pokedex";
import Layout from "../components/shared/Layout";

function pokedex() {
  return (
    <Layout alignCenter={false}>
      <Pokedex />
    </Layout>
  );
}

export default pokedex;
