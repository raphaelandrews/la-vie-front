import React, { useState } from "react";
import AtendimentosCreate from "../Home/AtendimentosCreate";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Acessar = () => {
  const [user, setUser] = useState();

  if (user) {
    return <AtendimentosCreate loggedInUser={user} />;
  }

  return window.location.pathname === "/signup" 
  ? <Signup signInUser={setUser} />
  : <Login signInUser={setUser} />
};

export default Acessar;
