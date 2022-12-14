import React from "react";
import "../src/assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Psicologo from "./pages/Psicologo/Psicologo";
import Dashboard from "./pages/Dashboard/Dashboard";
import Acessar from "./pages/Acessar/Acessar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Atendimentos1 from "./pages/Home/index";
import NavbarComponent from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/psicologos/:id" element={<Psicologo />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/acessar" element={<Acessar />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/atendimentos" element={<Atendimentos1 />}></Route>
          <Route path="/atualizar-psicologo" element={<Atendimentos1 />}></Route>
          <Route path="/deletar-psicologo" element={<Atendimentos1 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
