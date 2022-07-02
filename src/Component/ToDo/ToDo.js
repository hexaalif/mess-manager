import React from "react";
import ShowToDo from "./ShowToDo";

const ToDo = () => {
  const taskSubmit = (e) => {
    e.preventDefault();
    const AddingToDo = {
      name: e.target.name.value,
      // title: e.target.title.value,
    };
    console.log(AddingToDo);

    fetch("https://boiling-basin-12482.herokuapp.com/toDo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(AddingToDo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    e.target.reset();
  };

  return (
    <div className="text-center py-16">
      <h1 className="text-5xl text-orange-400 pb-10">To Do</h1>
      <form
        onSubmit={taskSubmit}
        className="form-control mx-auto w-full max-w-xs pb-10"
      >
        <label className="label">
          <span className="label-text text-orange-300">What to do today?</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Type a to-do"
          className="input input-bordered w-full max-w-xs"
        />
        {/* <input
          type="text"
          name="title"
          placeholder="Type a Title"
          className="input input-bordered w-full max-w-xs my-12"
        /> */}
        <input
          type="submit"
          value="Add task"
          className="btn bg-black input input-bordered w-full max-w-xs"
        />
      </form>
      <ShowToDo />
    </div>
  );
};

export default ToDo;
