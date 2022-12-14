import React, { useState } from "react";
import Atendimentos1 from "../Home";

import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Acessar = () => {
  const [user, setUser] = useState();

  if (user) {
    return <Atendimentos1 loggedInUser={user} />;
  }

  return window.location.pathname === "/signup" ? (
    <Signup signInUser={setUser} />
  ) : (
    <Login signInUser={setUser} />
  );
};

export default Acessar;
