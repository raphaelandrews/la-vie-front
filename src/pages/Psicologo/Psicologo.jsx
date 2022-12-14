import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import { useParams } from "react-router";

const Psicologo = () => {
  const id = useParams();
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get(
      `${import.meta.env.VITE_API_HOST}/psicologos/${id.id}`
    );
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data.atendimentos);

  return (
    <>
      <div className="max-w-[70%] my-20 mx-auto">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="w-full my-0 mx-auto">
            <Card className="card !bg-black rounded border-[1px] border-gray">
              <h2 className=" text-xl font-medium text-gray-500">
                Psicólogo(a) {data.nome}
              </h2>
              <p className="apresentacao font-regular text-silver">
                {data.apresentacao}
              </p>
              <p className="email font-regular text-silver">{data.email}</p>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-purple hover:!bg-darkPurple px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
              >
                <a href={`mailto:${data.email}`}>Enviar e-mail</a>
               
              </button>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-[70%] my-20 mx-auto">
        <h2>Lista de Atendimentos</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data.atendimentos &&
            data.atendimentos.map((data) => (
              <div className="w-full my-0 mx-auto">
                <Card className="card !bg-black rounded border-[1px] border-gray">
                  <h2 className=" text-xl font-medium text-gray-500">
                    Paciente {data.pacienteId}
                  </h2>
                  <p className="apresentacao font-regular text-silver">
                    {data.data_atendimento}
                  </p>
                  <p className="email font-regular text-silver">
                    {data.observacao}
                  </p>
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
