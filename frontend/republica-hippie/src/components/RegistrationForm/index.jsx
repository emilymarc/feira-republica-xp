import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

const RegistrationForm = () => {

    return (
        <S.Container>
            <S.TittleForm>CADASTRO</S.TittleForm>

            <form>
                <S.FloatContainer id="floatContainer1">
                    <S.InputTittle for="floatField1 ">Nome Completo</S.InputTittle>
                    <S.InputName type="text" id="floatField1" data-placeholder="Placeholder 1"/>
                </S.FloatContainer>

                <S.FormColumn>
                    <S.FloatContainer id="floatContainer2">
                        <S.InputTittle for="floatField2 ">E-mail</S.InputTittle>
                        <S.FormInput type="email" id="floatField2" data-placeholder="Placeholder 2"/>
                    </S.FloatContainer>

                    <S.FloatContainer id="floatContainer3">
                        <S.InputTittle for="floatField3 ">Celular</S.InputTittle>
                        <S.FormInput type="text" id="floatField3" data-placeholder="Placeholder 3"/>
                    </S.FloatContainer>
                </S.FormColumn>

                <S.FormColumn>
                    <S.FloatContainer id="floatContainer4">
                        <S.InputTittle for="floatField4 ">Senha</S.InputTittle>
                        <S.FormInput type="password" id="floatField4" data-placeholder="Placeholder 4"/>
                    </S.FloatContainer>

                    <S.FloatContainer id="floatContainer5">
                        <S.InputTittle for="floatField5 ">Repetir Senha</S.InputTittle>
                        <S.FormInput type="password" id="floatField5" data-placeholder="Placeholder 5"/>
                    </S.FloatContainer>
                </S.FormColumn>

                <S.FormButton>Cadastrar</S.FormButton>
            </form>
        </S.Container>
    )
}

export default RegistrationForm