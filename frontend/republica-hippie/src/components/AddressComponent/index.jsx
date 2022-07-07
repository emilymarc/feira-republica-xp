import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import * as Yup from 'yup';
import { useFormik } from 'formik'; 
import FilledElipse from '../../assets/progressbar/FilledEllipse.svg';
import EmptyElipse from '../../assets/progressbar/EmptyEllipse.svg';


const AddressComponent = () => {

    return (
        <S.AddressContainer>
            <S.ProgressBarContainer>
                <S.AddressProgress1 src = {EmptyElipse}/>
                <S.AddressProgress2 src = {FilledElipse}/>
                <S.AddressProgress3 src = {EmptyElipse}/>

                <S.AddressProgressTextContainer>
                    <S.AddressProgressText>Carrinho</S.AddressProgressText>
                    <S.AddressProgressText style={{fontWeight: '600'}}>Endereço</S.AddressProgressText>
                    <S.AddressProgressText>Finalizar</S.AddressProgressText>
                </S.AddressProgressTextContainer>
            </S.ProgressBarContainer>

            <S.AddressItemsContainer>
                <form>
                    <S.AddressInput>
                    <S.FloatContainer className="floatContainer1">
                        <S.Input1>
                        <S.InputTittle for="floatField1">CEP</S.InputTittle>
                        <S.FormInput 
                        type="text" 
                        className="floatContainer1"
                        id="cep"/>
                        </S.Input1>
                    </S.FloatContainer>
                    <S.FloatContainer className="floatContainer2">
                       <S.Input2>
                       <S.InputTittle for="floatField2">Rua/Lagradouro</S.InputTittle>
                        <S.FormInput 
                        type="text" 
                        className="floatContainer2"
                        id="rua"/>
                       </S.Input2>
                    </S.FloatContainer>
                    </S.AddressInput>

                    <S.AddressInput>
                        <S.FloatContainer className="floatContainer3">
                            <S.Input3>
                            <S.InputTittle for="floatField3">Número</S.InputTittle>
                                        <S.FormInput 
                                        type="text" 
                                        className="floatContainer3"
                                        id="number"/>
                            </S.Input3>
                        </S.FloatContainer>
                        <S.FloatContainer className="floatContainer4">
                        <S.Input4>
                        <S.InputTittle for="floatField4">Bairro</S.InputTittle>
                                    <S.FormInput 
                                    type="text" 
                                    className="floatContainer4"
                                    id="bairro"/>
                        </S.Input4>
                        </S.FloatContainer>
                    </S.AddressInput>

                    <S.AddressInput>
                        <S.FloatContainer className="floatContainer5">
                            <S.Input5>
                            <S.InputTittle for="floatField5">Cidade</S.InputTittle>
                            <S.FormInput 
                            type="text" 
                            className="floatContainer5"
                            id="cidade"/>
                            </S.Input5>
                        </S.FloatContainer>
                        <S.FloatContainer className="floatContainer6">
                            <S.Input6>
                            <S.InputTittle for="floatField6">Estado</S.InputTittle>
                            <S.FormInput 
                            type="text" 
                            className="floatContainer6"
                            id="estado"/>
                            </S.Input6>
                        </S.FloatContainer>
                    </S.AddressInput>

                    <S.AddressInput>
                    <S.FloatContainer className="floatContainer7">
                        <S.Input7>
                        <S.InputTittle for="floatField7">DDD</S.InputTittle>
                        <S.FormInput 
                        type="text" 
                        className="floatContainer7"
                        id="ddd"/>
                        </S.Input7>
                    </S.FloatContainer>
                    <S.FloatContainer className="floatContainer8">
                     <S.Input8>
                     <S.InputTittle for="floatField8">Celular</S.InputTittle>
                        <S.FormInput 
                        type="text" 
                        className="floatContainer8"
                        id="celular"/>
                     </S.Input8>
                    </S.FloatContainer>
                    </S.AddressInput>
                    <S.ButtonAddress to="/">Continuar</S.ButtonAddress>
                </form>
            </S.AddressItemsContainer>
        </S.AddressContainer>
    )
}

export default AddressComponent