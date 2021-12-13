import React from "react";

const Pokemon = (props) => {
  const {name, gender, fruit} = props
  return(
    <div>
      <h2>{name}</h2>
      <p><b>Gender: </b>{gender}</p>
      <p><b>Favorite Fruit:</b> {fruit}</p>
    </div>
  )
}

export default Pokemon;