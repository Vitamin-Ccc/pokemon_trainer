import React from "react";
import { useLocation } from "react-router";

const Pokemons = () => {
  const location = useLocation();
  const { trainer } = location.state;
  return (
    <div>
      <h1>Pokemon for this trainer</h1>
      {JSON.stringify(trainer)}
    </div>
  )
}

export default Pokemons;