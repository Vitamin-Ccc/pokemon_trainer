import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to = "/">Home</Link>
      <Link to = "/trainers">Trainers</Link>
    </div>
  );
};

export default Navbar;