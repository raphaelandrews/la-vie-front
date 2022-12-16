import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Card, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import logolavie from "../../assets/img/lavie-logo.png"

const validationSchema = yup.object({
  nome: yup.string().required("Digite seu nome"),
  email: yup.string().required("Digite um email").email("E-mail inválido"),
  senha: yup.string().required("Digite sua senha"),
  apresentacao: yup.string().required("Digite sua apresentação"),
});

const Signup = ({ }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await axios.post(`${import.meta.env.VITE_API_HOST}/signup`, {
        nome: values.nome,
        email: values.email,
        senha: values.senha,
        apresentacao: values.apresentacao,
      });

      (res.data);
      navigate("/atendimentos");
    },
    initialValues: {
      nome: "",
      email: "",
      senha: "",
      apresentacao: "",
    },
    validateOnMount: true,
    validationSchema,
  });

  return (
    <div className="h-full mt-8 flex flex-col justify-center p-12 space-y-6">
      <div className="flex-1 flex justify-center items-center p-12 space-y-6">
        <div className="w-full my-0 mx-auto max-w-[400px]">
        <Card className="card !bg-white dark:!bg-black rounded-[36px] border-none dark:border-solid dark:border-[1px] dark:border-gray">
            <h1 className="text-center font-semibold text-xl text-gray-500">Crie sua conta</h1>

            <form className="p-4 text-lg flex flex-col gap-4" onSubmit={formik.handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nome" value="Nome" />
                </div>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                  className="w-full rounded-lg py-1 px-2 dark:!text-black border-[1px] dark:border-purple"
                  value={formik.values.nome}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                />
                {formik.touched.nome && formik.errors.nome && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.nome}
                  </div>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Digite seu email" />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                  className="w-full rounded-lg py-1 px-2 dark:!text-black border-[1px] dark:border-purple"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Senha" />
                </div>
                <input
                  id="password"
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                  className="w-full rounded-lg py-1 px-2 dark:!text-black border-[1px] dark:border-purple"
                  value={formik.values.senha}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                />
                {formik.touched.senha && formik.errors.senha && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.senha}
                  </div>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="apresentacao" value="Apresentação" />
                </div>
                <input
                  id="apresentacao"
                  type="text"
                  name="apresentacao"
                  placeholder="Digite sua apresentação"
                  className="w-full rounded-lg py-1 px-2 dark:!text-black border-[1px] dark:border-purple"
                  value={formik.values.apresentacao}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                />
                {formik.touched.apresentacao && formik.errors.apresentacao && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.apresentacao}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-[18px] hover:cursor-pointer bg-purple hover:!bg-darkPurple mt-4 px-5 py-2.5 text-white text-center text-sm font-medium focus:outline-none"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {formik.isSubmitting ? "Enviando..." : "Cadastrar"}
              </button>
            </form>

            <span className="text-sm text-silver text-center">
              Já tem uma conta?{" "}
              <a className="text-purple" href="/login">
                Acesse.
              </a>
            </span>
          </Card>
        </div>
      </div>
      <div><img src={logolavie} alt="" className="hidden" /></div>
    </div>
  );
};

export default Signup;
