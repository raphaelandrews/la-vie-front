import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Card, TextInput, Label } from "flowbite-react";

const validationSchema = yup.object({
  nome: yup.string().required("Digite seu nome"),
  email: yup.string().required("Digite um email").email("E-mail inválido"),
  senha: yup.string().required("Digite sua senha"),
  apresentacao: yup.string().required("Digite sua apresentação"),
});

const Signup = ({ signInUser }) => {
  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await axios.post(`${import.meta.env.VITE_API_HOST}/signup`, {
        nome: values.nome,
        email: values.email,
        senha: values.senha,
        apresentacao: values.apresentacao,
      });

      signInUser(res.data);
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
          <Card className="card !bg-white rounded-[36px] border-none p-4">
            <h1 className="text-center text-3xl">Crie sua conta</h1>

            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nome" value="Nome" />
                </div>
                <TextInput
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                  className="bg-transparent outline-none"
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
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                  className="bg-transparent outline-none"
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
                <TextInput
                  id="password"
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                  className="bg-transparent outline-none"
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
                <TextInput
                  id="apresentacao"
                  type="text"
                  name="apresentacao"
                  placeholder="Digite sua apresentação"
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
    </div>
  );
};

export default Signup;
