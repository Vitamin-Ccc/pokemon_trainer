import axios from "axios";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router";

const TrainerForm = () => {
  const location = useLocation();
  const { trainer } = location.state ? location.state : {};

  const [name, setName] = useState( trainer ? trainer.name : "");
  const [age, setAge] = useState( trainer ? trainer.age : "");

  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let trainerData = {name, age};
    if (params.id) {
      await axios.put(`/api/trainers/${params.id}`, trainerData);
      // let response = await axios.put(`/api/trainers/${params.id}`, trainer);
      // udpateTrainer(response.data)
    }
    else {
      await axios.put(`/api/trainers`, trainerData);
      // let response = await axios.put(`/api/trainers`, trainer);
      // addTrainer(response.data)
    }
  }

  return (
    <div>
      <h1>{params.id ? "Update" : "New"} Trainer Form</h1>
      <p>id: {params.id}</p>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input 
        value = {name} 
        onChange = {(e) => {
          setName(e.target.value);
        }}
        />
        <p>Age</p>
        <input 
        value = {age} 
        onChange = {(e) => {
          setAge(e.target.value);
        }}
        />
        <br />
        <br />
        <button>{params.id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default TrainerForm;