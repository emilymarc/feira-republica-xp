import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styled";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createClient } from "../../services/api";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  name: Yup.string().required("Valor é requerido"),
  email: Yup.string().email("E-mail não válido").required("Valor é requerido"),
  password: Yup.string().min(5).max(25).required("Valor é requerido"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Senhas diferentes")
    .required("Confirme sua senha"),
});

const RegistrationForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { name, email, password } = values;
        await createClient(name, email, password);
        toast.success("Cliente cadastrado com sucesso!");
        navigate("/login");
      } catch (error) {
        toast.warn(`Erro ao cadastrar o cliente: ${error}`);
      }
    },
  });

  return (
    <S.Container>
      <S.TittleForm>CADASTRO</S.TittleForm>

      <S.FormContainer onSubmit={formik.handleSubmit}>
        {formik.errors.name ? (
          <S.FloatContainer
            className="floatContainer1"
            style={{ border: "1px solid red" }}
          >
            <S.InputTittle htmlFor="floatField1 ">Nome Completo</S.InputTittle>
            <S.InputName
              type="text"
              className="floatField1"
              placeholder="Valor requerido"
              data-placeholder="Placeholder 1"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </S.FloatContainer>
        ) : (
          <S.FloatContainer className="floatContainer1">
            <S.InputTittle htmlFor="floatField1 ">Nome Completo</S.InputTittle>
            <S.InputName
              placeholder="Pedro Luis da Silva"
              type="text"
              className="floatField1"
              data-placeholder="Placeholder 1"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </S.FloatContainer>
        )}

        <S.FormColumn>
          {formik.errors.email ? (
            <S.FloatContainer
              className="floatContainer2"
              style={{ border: "1px solid red" }}
            >
              <S.InputTittle htmlFor="floatField2 ">E-mail</S.InputTittle>
              <S.FormInput
                type="email"
                className="floatField2"
                placeholder="Insira um email válido"
                data-placeholder="Placeholder 2"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </S.FloatContainer>
          ) : (
            <S.FloatContainer className="floatContainer2">
              <S.InputTittle htmlFor="floatField2 ">E-mail</S.InputTittle>
              <S.FormInput
                placeholder="pedroluis@email.com"
                type="email"
                className="floatField2"
                data-placeholder="Placeholder 2"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </S.FloatContainer>
          )}
        </S.FormColumn>

        <S.FormColumn>
          {formik.errors.password ? (
            <S.FloatContainer
              className="floatContainer4"
              style={{ border: "1px solid red" }}
            >
              <S.InputTittle htmlFor="floatField4 ">Senha</S.InputTittle>
              <S.FormInput
                type="password"
                className="floatField4"
                placeholder="Valor requerido"
                data-placeholder="Placeholder 4"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </S.FloatContainer>
          ) : (
            <S.FloatContainer className="floatContainer4">
              <S.InputTittle htmlFor="floatField4 ">Senha</S.InputTittle>
              <S.FormInput
                placeholder="**********"
                type="password"
                className="floatField4"
                data-placeholder="Placeholder 4"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </S.FloatContainer>
          )}

          {formik.errors.confirmPassword ? (
            <S.FloatContainer
              className="floatContainer5"
              style={{ border: "1px solid red" }}
            >
              <S.InputTittle htmlFor="floatField5 ">
                Repetir Senha
              </S.InputTittle>
              <S.FormInput
                type="password"
                className="floatField5"
                placeholder="As senhas devem ser iguais"
                data-placeholder="Placeholder 5"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
            </S.FloatContainer>
          ) : (
            <S.FloatContainer className="floatContainer5">
              <S.InputTittle htmlFor="floatField5 ">
                Repetir Senha
              </S.InputTittle>
              <S.FormInput
                placeholder="**********"
                type="password"
                className="floatField5"
                data-placeholder="Placeholder 5"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
            </S.FloatContainer>
          )}
        </S.FormColumn>

        <S.BtnContainer>
          <S.FormButton type="submit">Cadastrar</S.FormButton>
        </S.BtnContainer>
      </S.FormContainer>
    </S.Container>
  );
};

export default RegistrationForm;
