import React, { useState, useEffect } from "react";
import image from "./logo.png";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AtendimentosForm({ loggedInUser }) {
  const navigate = useNavigate();
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

      form.setFieldValue("pacienteId", "");
      form.setFieldValue("data_atendimento", "");
      form.setFieldValue("observacao", "");
      navigate('/');
    },
    initialValues: {
      pacienteId: "",
      data_atendimento: "",
      observacao: "",
    },
  });

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

const AtendimentosCreate = ({ loggedInUser }) => {
  return (
    <>
      <AtendimentosForm loggedInUser={loggedInUser} />
    </>
  );
};

export default AtendimentosCreate;
