import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import logo from '../../assets/logofooter.png';

const LoginForm = () => {

    return (
        <S.Container>
            <S.Logo src={logo} alt="República Hippie"/>

            <S.FormContainer>
                <S.TittleForm>LOGIN</S.TittleForm>
                <S.FloatContainer id="floatContainer1">
                    <S.InputTittle for="floatField1">Email</S.InputTittle>
                    <S.FormInput type="email" id="floatContainer1"/>
                </S.FloatContainer>

                <S.FloatContainer id="floatContainer2">
                    <S.InputTittle for="floatField2">Senha</S.InputTittle>
                    <S.FormInput type="password" id="floatContainer2"/>
                </S.FloatContainer>
                <S.FormButton>Entrar</S.FormButton>
                <S.LinkSingUp to="/singup">Cadastre-se</S.LinkSingUp>
            </S.FormContainer>

        </S.Container>
    )
}

export default LoginForm