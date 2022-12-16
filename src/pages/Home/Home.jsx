import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import logo from "../../assets/img/logo-purple.svg";
import { User, Send2 } from "iconsax-react";

const Home = () => {
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
          <h1 className="text-7xl mt-4 mb-2 font-bold">La Vie</h1>
          <h2 className="text-3xl semibold">Saúde Mental</h2>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data.length &&
            data.map((psicologos, index) => (
              <div key={index + 1} className="w-full my-0 mx-auto">
                <Card className="card !bg-white dark:!bg-black rounded-[36px] dark:rounded border-none dark:border-[1px] dark:border-gray">
                  <div className="flex items-center gap-1">
                    <User size="20" color="#6F6AF8" />
                    <h2 className=" text-xl text-gray-500">
                      {psicologos.nome}
                    </h2>
                  </div>
                  <p className="apresentacao font-regular">
                    {psicologos.apresentacao}
                  </p>
                  <div className="email font-regular hover:text-purple">
                    <div className="flex items-center">
                      <Send2 size="20" color="#6F6AF8" />{" "}
                      <a
                        href={`mailto:${psicologos.email}`}
                        className="underline"
                      >
                        {psicologos.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-[18px] bg-purple hover:!bg-darkPurple px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
                  >
                    <a
                      href={`/psicologos/${psicologos.psicologo_id}`}
                      className="text-white"
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
};

export default Home;
