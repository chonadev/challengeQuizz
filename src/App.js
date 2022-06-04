import React from "react";

import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import Navbar from "./components/Navbar";
import { Questionnaire } from "./components/Questionnaire";
import { Register } from "./components/Register";
import usoToken from "./hooks/usoToken";

function App() {
  
  const {setToken, deleteToken} = usoToken();

  const handleLogout = () => {
    deleteToken();
  }

  return (
      <>
        <Navbar logout={handleLogout} />
        <Routes>
          <Route path="login" element={<Login setToken={setToken} />} />
          <Route path="register" element={<Register />} />        
          <Route path="/" element={<Questionnaire/>} />
        </Routes>
      </>
  );
}

export default App;
