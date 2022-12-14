import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import logo from "../../assets/img/logo.svg";

const HomeIndex = () => {
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
      <div className="max-w-[70%] my-20 mx-auto">
        <div className="text-center my-[120px]">
          <img src={logo} alt="La Vie logo" className="w-60 my-0 mx-auto" />
          <h1 className="text-7xl mt-4 mb-2 font-bold">
            La Vie
          </h1>
          <h2 className="text-3xl semibold">Clínica Psicológica</h2>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data.length &&
            data.map((psicologos) => (
              <div className="w-full my-0 mx-auto">
                <Card className="card !bg-black rounded border-[1px] border-gray">
                  <h2 className=" text-xl font-medium text-gray-500">
                    Psicólogo(a) {psicologos.nome}
                  </h2>
                  <p className="apresentacao font-regular text-silver">
                    {psicologos.apresentacao}
                  </p>
                  <p className="email font-regular text-silver">
                    {psicologos.email}
                  </p>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-lg bg-purple hover:!bg-darkPurple px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
                  >
                    <a
                      href={`http://127.0.0.1:5173/psicologos/${psicologos.psicologo_id}`}
                    >
                      Ver Perfil
                    </a>
                  </button>
                </Card>
              </div>
            ))}
        </div>
      </div>
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

export default HomeIndex;
