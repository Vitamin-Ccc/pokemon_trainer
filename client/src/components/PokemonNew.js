import axios from "axios";
import React, { useState } from "react";

const PokemonNew = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [fruit, setFruit] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPokemon = { name, gender, fruit }
    let res = await axios.post(`/api/trainers/${props.trainerId}/pokemons`, newPokemon)
    console.log(res)
    props.addPokemon(res.data)
  }

  return (
    <div>
      <h1>New Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Gender</p>
        <input
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <p>Favorite Fruit</p>
        <input
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
        />
        <br />
        <br />
        <button>Add</button>
      </form>
    </div>
  )
};

export default PokemonNew;