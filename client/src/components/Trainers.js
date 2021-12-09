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

  // const addTrainer = (trainer) => {
  //   setTrainers([trainer, ...trainers]);
  // };

  // const udpateTrainer = (trainer) => {
  //   let updatedTrainer = trainers.map((t) => (t.id === trainer.id ? trainer : t));
  //   setTrainers(updatedTrainer);
  // };

  const deleteTrainer = async (id) => {
    await axios.delete(`/api/trainers/${id}`);
    setTrainers(trainers.filter((t) => t.id !== id));
  };

  // const renderTrainers = () => {
  //   if(trainers.length === 0) {
  //     return <p>No Trainers</p>;
  //   }
  //   return trainers.map((trainer) => {
  //     return <Trainer key = {trainer.id} deleteTrainer= {deleteTrainer} {...trainer} />
  //   })
  // };


  const renderTrainers = () => {
    return trainers.map((trainer) => {
      return(
        <div key = {trainer.id}>
          <p>Name: {trainer.name}</p>
          <p>Age: {trainer.age}</p>
          <Link to = {`/trainers/${trainer.id}/edit`} state = {{ trainer, x: 1 }}>Edit</Link>
          {/* <Link to = {`/trainers/${trainer.id}/pokemons`} state = {{ trainer }}>Show</Link> */}
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