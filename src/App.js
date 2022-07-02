import "./App.css";
import Header from "./Component/Shared/Header";
import { Routes, Route } from "react-router-dom";
import Calender from "./Component/Calender/Calender";
import Footer from "./Component/Shared/Footer";
import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";
import ToDo from "./Component/ToDo/ToDo";
import CompletedTasks from "./Component/CompletedTasks/CompletedTasks";

function App() {
  return (
    <div className="bg-zinc-600">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/calender" element={<Calender />}></Route>
        <Route path="/completed" element={<CompletedTasks />}></Route>
        <Route path="/to-do" element={<ToDo></ToDo>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
