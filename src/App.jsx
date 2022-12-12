import React, { useState } from "react";
import Home from "./Home/index";
import Login from "./Login/index";
import Signup from "./Signup/index";

const App = () => {
  const [user, setUser] = useState("");

  if (user) {
    return <Home />
  }

  return window.location.pathname === '/signup'
  ? <Signup signInUser={setUser} />
  : <Login signInUser={setUser} />
};

export default App;
