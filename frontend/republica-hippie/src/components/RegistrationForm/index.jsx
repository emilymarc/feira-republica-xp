import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import * as Yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = Yup.object({
    name: Yup.string().min(10, "Nome Completo").required("Valor é requerido"),
    email: Yup.string().email("E-mail não válido").required("Valor é requerido"),
    cellphone: Yup.number().min(12, "Coloque o DDD").required("Valor é requerido"),
    password: Yup.string().required("Valor é requerido"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Senhas diferentes").required("Confirme sua senha"),
});

const RegistrationForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            cellphone: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema,
        onSubmit: async values => {
            await postRegistration(values)
            alert("Cadastro realizado, Seja bem-vindo!")
        }
      })

    return (
        <S.Container>
            <S.TittleForm>CADASTRO</S.TittleForm>

            <form>
                <S.FloatContainer className="floatContainer1">
                    <S.InputTittle for="floatField1 ">Nome Completo</S.InputTittle>
                    <S.InputName 
                    type="text" 
                    className="floatField1"
                    data-placeholder="Placeholder 1"
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}/>
                </S.FloatContainer>
                {formik.errors.name && <span>{formik.errors.name}</span>}
                <S.FormColumn>
                    <S.FloatContainer className="floatContainer2">
                        <S.InputTittle for="floatField2 ">E-mail</S.InputTittle>
                        <S.FormInput 
                        type="email" 
                        className="floatField2" 
                        data-placeholder="Placeholder 2"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}/>
                    </S.FloatContainer>
                    {formik.errors.email && <span>{formik.errors.email}</span>}
                    <S.FloatContainer className="floatContainer3">
                        <S.InputTittle for="floatField3 ">Celular</S.InputTittle>
                        <S.FormInput 
                        type="text" 
                        className="floatField3" 
                        data-placeholder="Placeholder 3"
                        id="cellphone"
                        value={formik.values.cellphone}
                        onChange={formik.handleChange}/>
                    </S.FloatContainer>
                    {formik.errors.cellphone && <span>{formik.errors.cellphone}</span>}
                </S.FormColumn>

                <S.FormColumn>
                    <S.FloatContainer className="floatContainer4">
                        <S.InputTittle for="floatField4 ">Senha</S.InputTittle>
                        <S.FormInput 
                        type="password" 
                        className="floatField4"
                        data-placeholder="Placeholder 4"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}/>
                    </S.FloatContainer>
                    {formik.errors.password && <span>{formik.errors.password}</span>}
                    <S.FloatContainer className="floatContainer5">
                        <S.InputTittle for="floatField5 ">Repetir Senha</S.InputTittle>
                        <S.FormInput 
                        type="password" 
                        className="floatField5"
                        data-placeholder="Placeholder 5"
                        id="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}/>
                    </S.FloatContainer>
                    {formik.errors.confirmPassword && <span>{formik.errors.confirmPassword}</span>}
                </S.FormColumn>

                <S.BtnContainer>
                    <S.FormButton type="submit">Cadastrar</S.FormButton>
                </S.BtnContainer>
                
            </form>
        </S.Container>
    )
}

export default RegistrationForm