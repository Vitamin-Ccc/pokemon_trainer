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
    return pokemons.map((p) => <Pokemon deletePokemon={deletePokemon} updatePokemon={updatePokemon} trainerId={trainer.id} key={p.id} {...p} />)
  }

  const addPokemon = (pokemon) => {
    setPokemons([pokemon, ...pokemons]);
  }

  const deletePokemon = async (id) => {
    await axios.delete(`/api/trainers/${trainer.id}/pokemons/${id}`)
    setPokemons(pokemons.filter((p) => p.id !== id));
  }

  const updatePokemon = (pokemon) => {
    let updatedPokemons = pokemons.map((p) => (p.id == pokemon.id ? pokemon : p));
    setPokemons(updatedPokemons);
  }

  return (
    <div>
      <h1>Pokemons for {trainer.name}</h1>
      <PokemonNew trainerId={trainer.id} addPokemon={addPokemon} />
      <hr />
      {renderPokemons()}
    </div>
  )
}

export default Pokemons;