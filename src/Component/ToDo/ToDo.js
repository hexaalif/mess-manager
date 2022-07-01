import React from "react";

const ToDo = () => {
  const taskSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    // name = "";
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
        <input
          type="submit"
          value="Add task"
          className="btn bg-black my-12 input input-bordered w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default ToDo;
