import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Card, TextInput, Label } from "flowbite-react";

const validationSchema = yup.object({
  email: yup.string().required("Digite seu email").email("E-mail inválido"),
  password: yup.string().required("Digite sua senha"),
});

const Login = ({ signInUser }) => {
  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await axios.get(`${import.meta.env.VITE_API_HOST}/login`, {
        auth: {
          username: values.email,
          password: values.password,
        },
      });

      signInUser(res.data);
    },
    initialValues: {
      email: "",
      password: "",
    },
    validateOnMount: true,
    validationSchema,
  });

  return (
    <div className="h-full mt-32 flex justify-center">
      <div className="flex-1 flex justify-center items-center p-12 space-y-6">
        <div className="w-full my-0 mx-auto max-w-[400px]">
        <Card className="card !bg-white dark:!bg-black rounded-[36px] border-none dark:border-solid dark:border-[1px] dark:border-gray">
            <h1 className="text-center font-semibold text-xl text-gray-500">Acesse sua conta</h1>

            <form className="p-4 text-lg flex flex-col gap-4" onSubmit={formik.handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
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
                <div className="space-y-2">
                  <TextInput
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    className="bg-transparent outline-none"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-[18px] hover:cursor-pointer bg-purple hover:!bg-darkPurple mt-4 px-5 py-2.5 text-white text-center text-sm font-medium focus:outline-none"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {formik.isSubmitting ? "Enviando..." : "Entrar"}
              </button>
            </form>

            <span className="text-sm text-silver text-center">
              Não tem conta?{" "}
              <a className="text-purple" href="/signup">
                Inscreva-se.
              </a>
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
