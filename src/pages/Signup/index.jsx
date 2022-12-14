import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Input = (props) => (
  <input
    {...props}
    className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum"
  />
);

const validationSchema = yup.object({
  nome: yup.string().required("Digite seu nome"),
  email: yup.string().required("Digite um email").email("E-mail inválido"),
  senha: yup.string().required("Digite sua senha"),
  apresentacao: yup.string().required("Faça sua apresentação"),
});

const Signup = ({ signInUser }) => {

  const formik = useFormik({
    onSubmit: async values => {
   const res = await axios.post(`${import.meta.env.VITE_API_HOST}/signup`, {     
          nome: values.nome,
          email: values.email,
          senha: values.senha,
          apresentacao: values.apresentacao
      })

      signInUser(res.data)
    },
      initialValues: {
        nome: "",
        email: "",
        senha: "",
        apresentacao: ""
      },
      validateOnMount: true,
      validationSchema,
  })

  return (
    <div className="h-full min-h-screen flex flex-col justify-center p-12 space-y-6">
      <h1 className="text-3xl">Crie sua conta</h1>

      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <div className="space-y-2">
          <Input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled= {formik.isSubmitting}
          />
          {formik.touched.nome && formik.errors.nome && (
            <div className="text-red-500 text-sm">{formik.errors.nome}</div>
          )}
        </div>
        
        <div className="space-y-2">
          <Input
            type="text"
            name="email"
            placeholder="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled= {formik.isSubmitting}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        <div className="space-y-2">
          <Input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formik.values.senha}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled= {formik.isSubmitting}
          />
          {formik.touched.senha && formik.errors.senha && (
            <div className="text-red-500 text-sm">{formik.errors.senha}</div>
          )}
        </div>
       
        <div className="space-y-2">
          <Input
            type="text"
            name="apresentacao"
            placeholder="Apresentação"
            value={formik.values.apresentacao}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled= {formik.isSubmitting}
          />
          {formik.touched.apresentacao && formik.errors.apresentacao && (
            <div className="text-red-500 text-sm">{formik.errors.apresentacao}</div>
          )}
        </div>

        <button
        type="submit"
          className="w-full bg-birdBlue py-4 rounded-full disabled:opacity-50 text-lg"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {formik.isSubmitting ? 'Enviando...' : 'Cadastrar' }
        </button>
      </form>

      <span className="text-sm text-silver text-center">
        Já tem uma conta? <a className="text-birdBlue" href="/login">Acesse.</a>
      </span>
    </div>
  );
};

export default Signup;
