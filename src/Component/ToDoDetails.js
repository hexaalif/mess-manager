import React, { useEffect, useState } from "react";

const ToDoDetails = ({ toDo }) => {
  const dataCom = {
    list: toDo.name,
  };

  const handleCheckbox = () => {
    fetch("https://boiling-basin-12482.herokuapp.com/complete", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataCom),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    if (handleCheckbox) {
      fetch("https://boiling-basin-12482.herokuapp.com/toDo", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataCom),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div className="flex space-x-4 justify-center items-center text-white text-2xl">
      <input
        onClick={() => handleCheckbox()}
        type="checkbox"
        name="Dos"
        //   value={checked}
        className="checkbox bg-primary"
      />
      <h1>{toDo.name}</h1>
      {/* <h1>Title: {toDo.title}</h1> */}
      {/* <p>{checked}</p> */}
    </div>
  );
};

export default ToDoDetails;
