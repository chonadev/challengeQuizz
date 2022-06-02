import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Questionnaire } from "./components/Questionnaire";
import { Register } from "./components/Register";

function App() {

  return (
    <Routes>
      <Route path="questionnaire" element={<Questionnaire/>} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Login />} />          
    </Routes>
  );
}

export default App;
