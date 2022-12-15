import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card } from "flowbite-react";
import axios from "axios";
import { User, Send2 } from "iconsax-react";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';

const PacientesAtualizar = () => {
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
          idade: values.idade,
          email: values.email,
        },
      });

      form.setFieldValue("nome", "");
      form.setFieldValue("idade", "");
      form.setFieldValue("email", "");
      navigate('/dashboard');
    },
    initialValues: {
      nome: "",
      idade: "",
      email: "",
    },
  });

  var optionsDate = {
    /*weekday: "short",*/
    year: "numeric",
    month: "2-digit",
    day: "numeric"
};

var optionsTime = {
    /*timeZoneName: 'short',*/
    hour: '2-digit',
    minute: '2-digit'
};

  return (
    <div className="max-w-[70%] my-20 mx-auto">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="w-full my-0 mx-auto">
          <Card className="card !bg-white rounded-[36px] border-none">
            <h2 className=" text-xl text-gray-500">
              <User size="24" color="#6F6AF8" />
              Paciente(a) {data.nome}
            </h2>
            <p className="apresentacao font-regular">{data.idade}</p>
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
        <form
          className="pl-12 text-lg flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          <input
            name="nome"
            value={formik.values.nome}
            placeholder={data.nome}
            className="bg-transparent outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
          />

          <input
            name="idade"
            value={formik.values.idade}
            placeholder={new Date(data.idade).toLocaleString('pt-BR', optionsDate)}
            className="bg-transparent outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
          />

          <input
            name="email"
            value={formik.values.email}
            placeholder={data.email}
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
    </div>
  );
};

export default PacientesAtualizar;
