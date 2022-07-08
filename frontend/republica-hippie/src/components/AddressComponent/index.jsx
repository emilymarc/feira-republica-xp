import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { createOrder } from "../../services/api";
import FilledElipse from "../../assets/progressbar/FilledEllipse.svg";
import EmptyElipse from "../../assets/progressbar/EmptyEllipse.svg";

const validationSchema = Yup.object().shape({
  zip_cod: Yup.string().required("Valor é requerido"),
  st: Yup.string().required("Valor é requerido"),
  house_number: Yup.string().required("Valor é requerido"),
  city: Yup.string().required("Valor é requerido"),
  state: Yup.string().required("Valor é requerido"),
  country: Yup.string().required("Valor é requerido"),
  items_order: Yup.array()
    .of(
      Yup.object().shape({
        id_product: Yup.string().required("Valor é requerido"),
        quantity: Yup.string().required("Valor é requerido"),
        price_product: Yup.string().required("Valor é requerido"),
      })
    ).required("Valor é requerido"),
});

const AddressComponent = () => {
  const [order, setOrder] = useState({})
  const formik = useFormik({
    initialValues: {
      zip_cod: "",
      st: "",
      house_number: "",
      city: "",
      state: "",
      country: "",
      items_order: [
        {
          id_product: "",
          quantity: "",
          price_product: "",
        }
      ],
    },
    validationSchema,
    onSubmit: async values => {
      const { zip_cod, st, house_number, city, state, country, items_order } = values
      const response = await createOrder(zip_cod, st, house_number, city, state, country, items_order)
    }
  })
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
                <S.InputTittle htmlFor="floatField1">CEP</S.InputTittle>
                <S.FormInput type="text" className="floatContainer1" id="cep" />
              </S.Input>
            </S.FloatContainer1>

            <S.FloatContainer2 className="floatContainer2">
              <S.Input>
                <S.InputTittle htmlFor="floatField2">Rua/Lagradouro</S.InputTittle>
                <S.FormInput type="text" className="floatContainer2" id="rua" />
              </S.Input>
            </S.FloatContainer2>
          </S.AddressInput>

          <S.AddressInput>
            <S.FloatContainer1 className="floatContainer3">
              <S.Input>
                <S.InputTittle htmlFor="floatField3">Número</S.InputTittle>
                <S.FormInput
                  type="text"
                  className="floatContainer3"
                  id="number"
                />
              </S.Input>
            </S.FloatContainer1>

            <S.FloatContainer2 className="floatContainer4">
              <S.Input>
                <S.InputTittle htmlFor="floatField4">Bairro</S.InputTittle>
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
                <S.InputTittle htmlFor="floatField5">Cidade</S.InputTittle>
                <S.FormInput
                  type="text"
                  className="floatContainer5"
                  id="cidade"
                />
              </S.Input>
            </S.FloatContainer3>

            <S.FloatContainer4 className="floatContainer6">
              <S.Input>
                <S.InputTittle htmlFor="floatField6">Estado</S.InputTittle>
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
