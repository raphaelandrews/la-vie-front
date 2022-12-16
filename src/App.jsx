import React from "react";
import "../src/assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Psicologo from "./pages/Psicologo/Psicologo";
import Dashboard from "./pages/Dashboard/Dashboard";
import Acessar from "./pages/Acessar/Acessar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AtendimentosCreate from "./pages/Home/AtendimentosCreate";
import PacientesUpdate from "./pages/Pacientes/PacientesUpdate";
import PsicologosUpdate from "./pages/Psicologo/PsicologosUpdate";
import PsicologosDelete from "./pages/Psicologo/PsicologosDelete";
import PacientesDelete from "./pages/Pacientes/PacientesDelete";

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
          <Route path="/atendimentos" element={<AtendimentosCreate />}></Route>
          <Route path="/pacientes-atualizar/:id" element={<PacientesUpdate />}></Route>
          <Route path="/deletar-paciente/:id" element={<PacientesDelete />}></Route>
          <Route path="/atualizar-psicologo/:id" element={<PsicologosUpdate />}></Route>
          <Route path="/deletar-psicologo/:id" element={<PsicologosDelete />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
