import React, { useState, useEffect } from "react";
import image from "./logo.png";
import { useFormik } from "formik";
import axios from "axios";

function AtendimentosForm({ loggedInUser, onSucess }) {
  const formik = useFormik({
    onSubmit: async (values, form) => {
      await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_HOST}/atendimentos`,
        headers: {
          authorization: `Bearer ${loggedInUser.acessToken}`,
        },
        data: {
          pacienteId: values.pacienteId,
          data_atendimento: values.data_atendimento,
          observacao: values.observacao,
        },
      });

      form.setFieldValue("text", "");
      onSucess();
    },
    initialValues: {
      text: "",
    },
  });

  function changeText(e) {
    setText(e.target.value);
  }

  return (
    <div className="border-b border-silver p-4 space-y-6">
      <div className="flex space-x-5">
        <img src={image} className="w-7" />
        <h1 className="font-bold text-xl">Página Inicial</h1>
      </div>

      <form
        className="pl-12 text-lg flex flex-col"
        onSubmit={formik.handleSubmit}
      >
        <input
          type="number"
          step="1"
          name="pacienteId"
          value={formik.values.pacienteId}
          placeholder="Id do paciente"
          className="bg-transparent outline-none"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
        />

        <input
          name="data_atendimento"
          value={formik.values.data_atendimento}
          placeholder="Data"
          className="bg-transparent outline-none"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
        />

        <input
          name="observacao"
          value={formik.values.observacao}
          placeholder="Observação"
          className="bg-transparent outline-none"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
        />

        <div className="flex justify-end items-center space-x-3">
          <button
            type="submit"
            className="bg-birdBlue px-4 py-2 rounded-full disabled:opacity-50"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

function Atendimento({ nome, apresentacao, avatar, children }) {
  return (
    <div className="flex space-x-3 p-4 border-b border-silver">
      <div>
        <img src={avatar} />
      </div>
      <div className="space-y-1">
        <span className="font-bold text-sm">{nome}</span>{" "}
        <span className="text-sm text-silver">@{apresentacao}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}

const Home = ({ loggedInUser }) => {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get(
      `${import.meta.env.VITE_API_HOST}/atendimentos/`,
      {
        headers: {
          authorization: `Bearer ${loggedInUser.acessToken}`,
        },
      }
    );
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AtendimentosForm loggedInUser={loggedInUser} onSucess={getData} />
      <div>
        {data.length &&
          data.map((atendimento) => (
            <Atendimento
              key={atendimento.atendimentos_id}
              nome={atendimento.psicologos.nome}
              apresentacao={atendimento.psicologos.apresentacao}
              avatar={image}
            >
              <div>
                {atendimento.psicologos.nome}
                {atendimento.observacao}
                {atendimento.psicologos.psicologo_id}
              </div>
            </Atendimento>
          ))}
      </div>
    </>
  );
};

export default Home;
