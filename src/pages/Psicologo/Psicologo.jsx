import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import { useParams } from "react-router";
import { User, Send2 } from "iconsax-react";

const Psicologo = () => {
  var optionsDate = {
    /*weekday: "short",*/
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };

  var optionsTime = {
    /*timeZoneName: 'short',*/
    hour: "2-digit",
    minute: "2-digit",
  };

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

  return (
    <>
      <div className="max-w-[70%] my-20 mx-auto">
        <h1 className="text-[32px] font-bold text-center mt-28 mb-20">Perfil de {data.nome}</h1>
          <div className="w-full my-0 mx-auto max-w-[400px]">
            <Card className="card !bg-white rounded-[36px] border-none">
              <h3 className=" text-xl text-gray-500">
                <User size="24" color="#6F6AF8" />
                Psicólogo(a) {data.nome}
              </h3>
              <p className="apresentacao font-regular">{data.apresentacao}</p>
              <div className="email font-regular">{data.email}</div>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-[18px] bg-purple hover:!bg-darkPurple px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
              >
                <div className="flex items-center gap-1">
                  <Send2 size="20" color="#ffffff" />{" "}
                  <a href={`mailto:${data.email}`} className="text-white">
                    Enviar e-mail
                  </a>
                </div>
              </button>
            </Card>
          </div>
      </div>

      <div className="max-w-[70%] my-20 mx-auto">
      <h2 className="text-[28px] font-bold text-center mt-28 mb-20">Lista de Atendimentos</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data.atendimentos &&
            data.atendimentos.length &&
            data.atendimentos.map((data) => (
              <div className="w-full my-0 mx-auto">
                <Card className="card !bg-white rounded-[36px] border-none">
                  <h3 className=" text-xl text-gray-500">
                    <User size="24" color="#6F6AF8" />
                    Paciente {data.pacienteId}
                  </h3>
                  <div className="font-regular">
                    {new Date(data.data_atendimento).toLocaleString(
                      "pt-BR",
                      optionsDate
                    )}
                  </div>
                  <div className="apresentacao font-regular">
                    {new Date(data.data_atendimento).toLocaleString(
                      "pt-BR",
                      optionsTime
                    )}
                  </div>
                  <p className="font-regular">{data.observacao}</p>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Psicologo;
