import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styled";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createClient } from '../../services/api';
import { Form, Button } from "react-bootstrap"
import { toast } from 'react-toastify'

const validationSchema = Yup.object({
    name: Yup.string().required("Valor é requerido"),
    email: Yup.string().email("E-mail não válido").required("Valor é requerido"),
    password: Yup.string().min(5).max(25).required("Valor é requerido"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Senhas diferentes").required("Confirme sua senha"),
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
        onSubmit: async values => {
            try {
                const { name, email, password } = values;
                await createClient(name, email, password);
                toast.success('Cliente cadastrado com sucesso!');
                navigate("/login")
            } catch(error) {
                toast.warn(`Erro ao cadastrar o cliente: ${error}`)
            }
        }
      })

    return (
        <S.Container>
            <S.TittleForm>CADASTRO</S.TittleForm>

            <form onSubmit={formik.handleSubmit}>
                <S.FloatContainer className="floatContainer1">
                    <S.InputTittle htmlFor="floatField1 ">Nome Completo</S.InputTittle>
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
                        <S.InputTittle htmlFor="floatField2 ">E-mail</S.InputTittle>
                        <S.FormInput 
                        type="email" 
                        className="floatField2" 
                        data-placeholder="Placeholder 2"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}/>
                    </S.FloatContainer>
                    {formik.errors.email && <span style={{display: 'block'}}>{formik.errors.email}</span>}
                </S.FormColumn>

                <S.FormColumn>
                    <S.FloatContainer className="floatContainer4">
                        <S.InputTittle htmlFor="floatField4 ">Senha</S.InputTittle>
                        <S.FormInput 
                        type="password" 
                        className="floatField4"
                        data-placeholder="Placeholder 4"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}/>
                    </S.FloatContainer>
                    {formik.errors.password && <span style={{display: 'block'}}>{formik.errors.password}</span>}
                    <S.FloatContainer className="floatContainer5">
                        <S.InputTittle htmlFor="floatField5 ">Repetir Senha</S.InputTittle>
                        <S.FormInput 
                        type="password" 
                        className="floatField5"
                        data-placeholder="Placeholder 5"
                        id="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}/>
                    </S.FloatContainer>
                    {formik.errors.confirmPassword && <span style={{display: 'block'}}>{formik.errors.confirmPassword}</span>}
                </S.FormColumn>

                <S.BtnContainer>
                    <S.FormButton type="submit">Cadastrar</S.FormButton>
                </S.BtnContainer>
                
            </form>
        </S.Container>

        // <>
        //     <S.Container>
        //         <span className='mb-3'>CADASTRO</span>
        //         <Form onSubmit={formik.handleSubmit}>
        //             <Form.Group className="mb-3">
        //                 <input
        //                     id="name"
        //                     type="text"
        //                     placeholder="nome"
        //                     value={formik.values.name}
        //                     onChange={formik.handleChange}>
        //                 </input>
        //                 {formik.errors.name && <span>{formik.errors.name}</span>}
        //             </Form.Group>
        //             <Form.Group className="mb-3">
        //                 <input
        //                     id="email"
        //                     type="email"
        //                     placeholder="email"
        //                     value={formik.values.email}
        //                     onChange={formik.handleChange}>
        //                 </input>
        //                 {formik.errors.email && <span>{formik.errors.email}</span>}
        //             </Form.Group>
        //             <Form.Group className="mb-3">
        //                 <input
        //                     id="password"
        //                     type="password"
        //                     placeholder="senha"
        //                     value={formik.values.password}
        //                     onChange={formik.handleChange}
        //                     >
        //                 </input>
        //                 {formik.errors.password && <span>{formik.errors.password}</span>}
        //             </Form.Group>
        //             <Form.Group className="mb-3">
        //                 <input
        //                     id="confirmPassword"
        //                     type="password"
        //                     placeholder="confirmar senha">
        //                 </input>
        //             </Form.Group>
        //             <Button type="submit">
        //                 entrar
        //             </Button>
        //         </Form>
        //     </S.Container>
        // </>
    )
}

export default RegistrationForm