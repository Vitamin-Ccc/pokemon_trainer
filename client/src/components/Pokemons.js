import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Pokemon from "./Pokemon";

const Pokemons = (props) => {
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
    return pokemons.map((p) => <Pokemon key = {p.id} {...p}/>)
  }

  return (
    <div>
      <h1>Pokemon for {trainer.name}</h1>
      {renderPokemons()}
    </div>
  )
}

export default Pokemons;