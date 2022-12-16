import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Card, TextInput, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";

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
      navigate("/");
    },
    initialValues: {
      pacienteId: "",
      data_atendimento: "",
      observacao: "",
    },
  });

  return (
    <div className="mt-32 p-4 space-y-6">
      <div className="w-full my-0 mx-auto max-w-[400px]">
        <Card className="card !bg-white dark:!bg-black rounded-[36px] border-none dark:border-solid dark:border-[1px] dark:border-gray">
          <h1 className="text-center font-semibold text-xl text-gray-500">
            Página Inicial
          </h1>

          <form
            className="p-4 text-lg flex flex-col gap-4"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="idPaciente" value="Id do Paciente" />
              </div>
              <TextInput
                id="idPaciente"
                step="1"
                name="pacienteId"
                value={formik.values.pacienteId}
                placeholder="Digite o Id do paciente"
                className="bg-transparent outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="data" value="Data do atendimento" />
              </div>
              <TextInput
                id="data"
                type="date"
                name="data_atendimento"
                value={formik.values.data_atendimento}
                placeholder="Digite a data do atendimento"
                className="bg-transparent outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="observacao" value="Observação" />
              </div>
              <TextInput
                id="observacao"
                name="observacao"
                value={formik.values.observacao}
                placeholder="Digites as observações"
                className="bg-transparent outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
            </div>

            <div className="flex justify-end items-center space-x-3">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-[18px] hover:cursor-pointer bg-purple hover:!bg-darkPurple mt-4 px-5 py-2.5 text-white text-center text-sm font-medium focus:outline-none"
              >
                Enviar
              </button>
            </div>
          </form>
        </Card>
      </div>
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
