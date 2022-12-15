import React, { useState, useEffect } from "react";
import axios from "axios";
import { Home, TableDocument, Setting2, User, Send2 } from "iconsax-react";
import logo from "../../../src/assets/img/logo.svg";
import { Card, Table } from "flowbite-react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/psicologos/`);
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  const [paciente, setpaciente] = useState([]);

  async function getpaciente() {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/pacientes/`);
    setpaciente(res.data);
  }

  useEffect(() => {
    getpaciente();
  }, []);

  return (
    <div>
      <div>
        <div className="relative p-8">
          <h1 className="text-[40px] font-bold text-center mb-10">Dashboard</h1>
          <div className="flex justify-center gap-[120px]">
            <div>
              <div className="text-[28px] font-semibold text-center mb-4">
                Psicólogos
              </div>
              <div className="grid gap-4 grid-cols-1 xl:grid-cols-2 mb-32">
                {data.length &&
                  data.map((psicologos) => (
                    <div className="w-full my-0 mx-auto">
                      <Card className="card !bg-white rounded-[36px] border-none">
                        <h2 className=" text-xl text-gray-500">
                          <User size="24" color="#6F6AF8" />
                          Psicólogo(a) {psicologos.nome}
                        </h2>
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
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-[18px] bg-green-500 hover:!bg-green-600 px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
                          >
                            <a
                              href={`/atualizar-psicologo/${psicologos.psicologo_id}`}
                              className="text-white"
                            >
                              Atualizar
                            </a>
                          </button>
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-[18px] bg-red-500 hover:!bg-red-600 px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
                          >
                            <a
                              href={`/deletar-psicologo/${psicologos.psicologo_id}`}
                              className="text-white"
                            >
                              Deletar
                            </a>
                          </button>
                        </div>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <div className="text-[28px] font-semibold text-center mb-4">
                Pacientes
              </div>
              <div className="grid gap-4 grid-cols-1 xl:grid-cols-2 mb-32">
                {paciente.length &&
                  paciente.map((pacientes) => (
                    <div className="w-full my-0 mx-auto">
                      <Card className="card !bg-white rounded-[36px] border-none">
                        <h2 className=" text-xl text-gray-500">
                          <User size="24" color="#6F6AF8" /> Paciente{" "}
                          {pacientes.nome}
                        </h2>
                        <p className="apresentacao font-regular">
                          {pacientes.idade}
                        </p>
                        <div className="email font-regular hover:text-purple">
                          <div className="flex items-center">
                            <Send2 size="20" color="#6F6AF8" />{" "}
                            <a
                              href={`mailto:${pacientes.email}`}
                              className="underline"
                            >
                              {pacientes.email}
                            </a>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-[18px] bg-purple hover:!bg-darkPurple px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
                        >
                          <a
                            href={`/pacientes/${pacientes.pacientes_id}`}
                            className="text-white"
                          >
                            Ver Perfil
                          </a>
                        </button>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-[18px] bg-green-500 hover:!bg-green-600 px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
                          >
                            <a
                              href={`/psicologos/${pacientes.psicologo_id}`}
                              className="text-white"
                            >
                              Atualizar
                            </a>
                          </button>
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-[18px] bg-red-500 hover:!bg-red-600 px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
                          >
                            <a
                              href={`/psicologos/${pacientes.psicologo_id}`}
                              className="text-white"
                            >
                              Deletar
                            </a>
                          </button>
                        </div>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
