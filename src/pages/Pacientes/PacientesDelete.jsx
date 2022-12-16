import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card} from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PacientesDelete = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get(
      `${import.meta.env.VITE_API_HOST}/pacientes/${id.id}`
    );
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  async function deletePaciente() {
    try {
      let confirmDelete = confirm("Deseja excuir o paciente?");
      if (confirmDelete === false) {
        return false;
      } else {
        await axios({
          method: "DELETE",
          url: `${import.meta.env.VITE_API_HOST}/pacientes/${id.id}`,
          headers: {
            "Content-Type": "application/json",
          },
        })
        alert("Paciente excluído!")
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Não foi possível excluir o paciente: " + error);
    }
  }

  return (
    <div className="max-w-[70%] my-20 mx-auto">
      <div className="w-full my-0 mx-auto max-w-[400px]">
        <Card className="card !bg-white rounded-[36px] border-none p-4">
          <h2 className="text-center font-semibold text-xl text-gray-500">
            Deletar paciente
          </h2>
          <div className="p-4 text-lg flex flex-col gap-4">
            <div className="text-center">{data.nome}</div>
            <button
              onClick={deletePaciente}
              className="inline-flex w-full justify-center rounded-[18px] bg-red-500 hover:!bg-red-600 mt-4 px-5 py-2.5 text-white text-center text-sm font-medium focus:outline-none"
            >
              Deletar
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PacientesDelete;
