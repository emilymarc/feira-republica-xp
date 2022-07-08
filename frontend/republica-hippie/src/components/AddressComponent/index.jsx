import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import FilledElipse from "../../assets/progressbar/FilledEllipse.svg";
import EmptyElipse from "../../assets/progressbar/EmptyEllipse.svg";

const AddressComponent = () => {
  return (
    <S.AddressContainer>
      <S.ProgressBarContainer>
        <S.AddressProgress1 src={EmptyElipse} />
        <S.AddressProgress2 src={FilledElipse} />
        <S.AddressProgress3 src={EmptyElipse} />

        <S.AddressProgressTextContainer>
          <S.AddressProgressText>Carrinho</S.AddressProgressText>
          <S.AddressProgressText style={{ fontWeight: "600" }}>
            Endereço
          </S.AddressProgressText>
          <S.AddressProgressText>Finalizar</S.AddressProgressText>
        </S.AddressProgressTextContainer>
      </S.ProgressBarContainer>

      <S.AddressItemsContainer>
        <S.AddressForm>

          <S.AddressInput>
            <S.FloatContainer1 className="floatContainer1">
              <S.Input>
                <S.InputTittle for="floatField1">CEP</S.InputTittle>
                <S.FormInput type="text" className="floatContainer1" id="cep" />
              </S.Input>
            </S.FloatContainer1>

            <S.FloatContainer2 className="floatContainer2">
              <S.Input>
                <S.InputTittle for="floatField2">Rua/Lagradouro</S.InputTittle>
                <S.FormInput type="text" className="floatContainer2" id="rua" />
              </S.Input>
            </S.FloatContainer2>
          </S.AddressInput>

          <S.AddressInput>
            <S.FloatContainer1 className="floatContainer3">
              <S.Input>
                <S.InputTittle for="floatField3">Número</S.InputTittle>
                <S.FormInput
                  type="text"
                  className="floatContainer3"
                  id="number"
                />
              </S.Input>
            </S.FloatContainer1>

            <S.FloatContainer2 className="floatContainer4">
              <S.Input>
                <S.InputTittle for="floatField4">Bairro</S.InputTittle>
                <S.FormInput
                  type="text"
                  className="floatContainer4"
                  id="bairro"
                />
              </S.Input>
            </S.FloatContainer2>
          </S.AddressInput>

          <S.AddressInputLast>
            <S.FloatContainer3 className="floatContainer5">
              <S.Input>
                <S.InputTittle for="floatField5">Cidade</S.InputTittle>
                <S.FormInput
                  type="text"
                  className="floatContainer5"
                  id="cidade"
                />
              </S.Input>
            </S.FloatContainer3>

            <S.FloatContainer4 className="floatContainer6">
              <S.Input>
                <S.InputTittle for="floatField6">Estado</S.InputTittle>
                <S.FormInput
                  type="text"
                  className="floatContainer6"
                  id="estado"
                />
              </S.Input>
            </S.FloatContainer4>
          </S.AddressInputLast>
          
          <S.ButtonAddress to="/">Continuar</S.ButtonAddress>
        </S.AddressForm>
      </S.AddressItemsContainer>
    </S.AddressContainer>
  );
};

export default AddressComponent;
