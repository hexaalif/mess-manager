import { useEffect, useState } from "react";

const useToDo = () => {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toDo")
      .then((res) => res.json())
      .then((data) => setToDo(data));
  }, []);
  return [toDo, setToDo];
};

export default useToDo;
