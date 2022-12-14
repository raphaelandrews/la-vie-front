import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import { NavbarIndex } from "../components/navbar/index";
import HomeIndex from "./pages/Home/Home";
import '../src/assets/css/style.css'

const App = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/psicologos/`);
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavbarIndex />
      <HomeIndex />
    </>
  );

  /*
  const [user, setUser] = useState();

  if (user) {
    return <Home loggedInUser={user}/>
  }

  return window.location.pathname === '/signup'
  ? <Signup signInUser={setUser} />
  : <Login signInUser={setUser} />
  */
};

export default App;
