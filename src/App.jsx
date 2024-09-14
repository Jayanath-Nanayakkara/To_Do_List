import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import wallpapper from "./assets/Wallpapper.jpg";
import Login from "./components/Login";
import Register from "./components/Register";
import To_do from "./components/To_do";

const App = () => {
  return (
    <div
      className="text-white h-screen w-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpapper})` }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/to-do-list" element={<To_do />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </div>
  );
};

export default App;
