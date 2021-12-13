import React from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const {name, gender, fruit, id, deletePokemon, trainer_id} = props

  return(
    <div>
      <h2>{name}</h2>
      <p><b>Gender: </b>{gender}</p>
      <p><b>Favorite Fruit:</b> {fruit}</p>
      <p>Trainer ID: {trainer_id}</p>
      <Link to = {`/trainers/${props.trainer_id}/pokemons/${props.id}/edit`}>Edit</Link>
      <button onClick = {() => deletePokemon(id)}>delete</button>
    </div>
  )
}

export default Pokemon;