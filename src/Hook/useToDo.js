import { useEffect, useState } from "react";

const useToDo = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toDo")
      .then((res) => res.json())
      .then((data) => setToDos(data));
  }, []);
  return [toDos, setToDos];
};

export default useToDo;
