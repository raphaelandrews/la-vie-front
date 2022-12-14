import React, { useState, useEffect } from "react";
import "../src/assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarIndex } from "../components/navbar/index";
import HomeIndex from "./pages/Home/Home";
import Psicologo from "./pages/Psicologo/Psicologo";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavbarIndex />
        <Routes>
          <Route exact path="/" element={<HomeIndex />}></Route>
          <Route path="/psicologos/:id" element={<Psicologo />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
