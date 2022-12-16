import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, Label } from "flowbite-react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const PsicologosUpdate = () => {
  const id = useParams();
  const navigate = useNavigate();
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

  const formik = useFormik({
    onSubmit: async (values, form) => {
        await axios({
          method: "PUT",
          url: `${import.meta.env.VITE_API_HOST}/psicologos/${id.id}`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            nome: values.nome,
            apresentacao: values.apresentacao,
            email: values.email,
          },
        });
      form.setFieldValue("nome", "");
      form.setFieldValue("apresentacao", "");
      form.setFieldValue("email", "");
      alert("Psicólogo atualizado!")
      navigate("/dashboard");
       
    },
    initialValues: {
      nome: "",
      apresentacao: "",
      email: "",
    },
  });

  return (
    <div className="max-w-[70%] my-20 mx-auto">
      <div className="w-full my-0 mx-auto max-w-[400px]">
      <Card className="card !bg-white dark:!bg-black rounded-[36px] border-none dark:border-solid dark:border-[1px] dark:border-gray">
          <h2 className="text-center font-semibold text-xl text-gray-500">
            Atualizar dados de {data.nome}
          </h2>
          <form
            className="p-4 text-lg flex flex-col gap-4"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nome" value="Nome" />
              </div>
              <input
                id="nome"
                name="nome"
                value={formik.values.nome}
                placeholder={data.nome}
                className="w-full rounded-lg py-1 px-2 dark:!text-black border-[1px] dark:border-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="apresentacao" value="Apresentação" />
              </div>
              <input
                id="apresentacao"
                name="apresentacao"
                value={formik.values.apresentacao}
                placeholder={data.apresentacao}
                className="w-full rounded-lg py-1 px-2 dark:!text-black border-[1px] dark:border-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <input
                id="email"
                name="email"
                value={formik.values.email}
                placeholder={data.email}
                className="w-full rounded-lg py-1 px-2 dark:!text-black border-[1px] dark:border-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-[18px] bg-purple hover:!bg-darkPurple mt-4 px-5 py-2.5 text-white text-center text-sm font-medium focus:outline-none"
            >
              Atualizar
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PsicologosUpdate;
