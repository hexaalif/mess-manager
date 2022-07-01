import React from "react";
import Calender from "../Calender/Calender";
import Login from "../Login/Login";
import ToDo from "../ToDo/ToDo";

const Home = () => {
  return (
    <div>
      <ToDo />
      <Calender />
      <Login />
    </div>
  );
};

export default Home;
