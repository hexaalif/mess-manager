import React from "react";
import ToDoDetails from "../ToDoDetails";
import useToDo from "../../Hook/useToData";

const ShowToDo = () => {
  const [toDos, setToDos] = useToDo();

  return (
    <div>
      {toDos.map((toDo) => (
        <ToDoDetails toDo={toDo} />
      ))}
    </div>
  );
};

export default ShowToDo;
