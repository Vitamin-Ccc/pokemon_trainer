import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Pokemon from "./Pokemon";
import PokemonNew from "./PokemonNew";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const location = useLocation();
  const { trainer } = location.state;

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    let res = await axios.get(`/api/trainers/${trainer.id}/pokemons`)
    setPokemons(res.data)
  }

  const renderPokemons = () => {
    return pokemons.map((p) => <Pokemon deletePokemon={deletePokemon} key={p.id} {...p} />)
  }

  const addPokemon = (pokemon) => {
    setPokemons([pokemon, ...pokemons]);
  }

  const deletePokemon = async (id) => {
    await axios.delete(`/api/trainers/${trainer.id}/pokemons/${id}`)
    setPokemons(pokemons.filter((p) => p.id !== id));
  }

  return (
    <div>
      <h1>Pokemon for {trainer.name}</h1>
      <PokemonNew trainerId={trainer.id} addPokemon={addPokemon} />
      {renderPokemons()}
    </div>
  )
}

export default Pokemons;