import React, { useState } from "react";
import ShowCom from "./ShowCom";

const CompletedTasks = () => {
  const [paisis, setPaisi] = useState();
  fetch("https://boiling-basin-12482.herokuapp.com/complete")
    .then((res) => res.json())
    .then((data) => setPaisi(data));
  //   console.log(paisis);
  return (
    <div className="h-screen mb-10">
      <h3 className="text-xl text-center text-orange-400 p-10">
        Completed Tasks
      </h3>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto">
        {paisis?.map((paisi) => (
          <ShowCom paisi={paisi}></ShowCom>
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
