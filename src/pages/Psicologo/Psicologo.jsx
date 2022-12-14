import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
id = window.location.href.split("os/")[1]


const Psicologo = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/psicologos/${id}`);
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="max-w-[70%] my-20 mx-auto">
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
                  <a href={`${import.meta.env.VITE_API_HOST}/psicologos/${psicologos.psicologo_id}`}>OOO</a>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-lg bg-purple hover:!bg-darkPurple px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
                  >
                    Ver Perfil
                  </button>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Psicologo;