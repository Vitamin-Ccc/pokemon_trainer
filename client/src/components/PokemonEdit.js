import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const PokemonEdit = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [fruit, setFruit] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  console.log(params)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get(`/api/trainers/${params.trainer_id}/pokemons/${params.id}`)
    console.log("props: ", props) 
    setName(res.data.name);
    setGender(res.data.gender);
    setFruit(res.data.fruit);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.put(`/api/trainers/${params.trainer_id}/pokemons/${params.id}`, {
      name,
      gender,
      fruit,
    });
    navigate(`/trainers/${params.trainer_id}/pokemons`)
  }

  return (
    <div>
      <h1>Edit </h1>
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
        <button type="submit">Update</button>
      </form>
    </div>
  )

}

export default PokemonEdit;