import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getTrainers();
  }, []);

  const getTrainers = async () => {
    let res = await axios.get("/api/trainers");
    // console.log(res);
    setTrainers(res.data);
  };

  const deleteTrainer = async (id) => {
    // remove from db
    await axios.delete(`/api/trainers/${id}`);
    // remove from UI
    setTrainers(trainers.filter((t) => t.id !== id));
  };

  const renderTrainers = () => {
    return trainers.map((trainer) => {
      return(
        <div key = {trainer.id}>
          <p>Name: {trainer.name}</p>
          <p>Age: {trainer.age}</p>
          <Link to = {`/trainers/${trainer.id}/edit`} state = {{ trainer }}>Edit</Link>
          <Link to = {`/trainers/${trainer.id}/pokemons`} state = {{ trainer }}>Show</Link>
          <button onClick = {() => deleteTrainer(trainer.id)}>DELETE</button>
        </div>
      );
    });
  };


  return (
    <div>
      <h1>Trainers</h1>
      <Link to = "/trainers/new">New Trainer</Link>
      {renderTrainers()}
    </div>
  );
};

export default Trainers;