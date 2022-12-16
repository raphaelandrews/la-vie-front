import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, TextInput, Label } from "flowbite-react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const PacientesUpdate = () => {
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

  

  const formik = useFormik({
    onSubmit: async (values, form) => {
      await axios({
        method: "PUT",
        url: `${import.meta.env.VITE_API_HOST}/pacientes/${id.id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          nome: values.nome,
          idade: dateForm,
          email: values.email,
        },
      });

      form.setFieldValue("nome", "");
      form.setFieldValue("idade", "");
      form.setFieldValue("email", "");
      navigate("/dashboard");
    },
    initialValues: {
      nome: "",
      idade: "",
      email: "",
    },
  });

  const dateForm = formik.values.idade.split(' ')[0]
  .split('/').reverse().join('-') + 'T00:00:00.000Z'

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

  return (
    <div className="max-w-[70%] my-20 mx-auto">
        <div className="w-full my-0 mx-auto max-w-[400px]">
          <Card className="card !bg-white rounded-[36px] border-none p-4">
            <h2 className="text-center font-semibold text-xl text-gray-500">Atualizar dados de {data.nome}</h2>
            <form
              className="p-4 text-lg flex flex-col gap-4"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nome" value="Nome" />
                </div>
                <TextInput
                  id="nome"
                  name="nome"
                  value={formik.values.nome}
                  placeholder={data.nome}
                  className="bg-transparent outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="idade" value="Data de nascimento" />
                </div>
                <TextInput
                type="date"
                  id="idade"
                  name="idade"
                  value={formik.values.idade}
                  placeholder={new Date(data.idade).toLocaleString(
                    "pt-BR",
                    optionsDate
                  )}
                  className="bg-transparent outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  name="email"
                  value={formik.values.email}
                  placeholder={data.email}
                  className="bg-transparent outline-none"
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

export default PacientesUpdate;
