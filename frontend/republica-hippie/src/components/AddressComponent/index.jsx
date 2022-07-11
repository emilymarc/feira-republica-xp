import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { baseUrl, createOrder } from "../../services/api";
import FilledElipse from "../../assets/progressbar/FilledEllipse.svg";
import EmptyElipse from "../../assets/progressbar/EmptyEllipse.svg";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  zip_cod: Yup.string().required("Valor é requerido"),
  st: Yup.string().required("Valor é requerido"),
  house_number: Yup.string().required("Valor é requerido"),
  district: Yup.string().required("Valor é requerido"),
  city: Yup.string().required("Valor é requerido"),
  state: Yup.string().required("Valor é requerido"),
});

const AddressComponent = () => {
  const id_client = useSelector((state) => state.user.id_client);
  const accessToken = useSelector((state) => state.user.accessToken);
  const { Items } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      client_id: id_client,
      zip_cod: "",
      st: "",
      house_number: "",
      city: "",
      state: "",
      district: "",
      items_order: Items.map((item) => ({
        id_product: item.code_product,
        quantity: item.quantity,
        price_product: item.price,
      })),
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const {
          client_id,
          zip_cod,
          st,
          house_number,
          city,
          state,
          district,
          items_order,
        } = values;
        baseUrl.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
        const res = await createOrder(
          client_id,
          zip_cod,
          st,
          house_number,
          city,
          state,
          district,
          items_order
        );
        toast.success("Pedido realizado com sucesso!");
        navigate(`/checkout/${id_client}/${res.order}`);
      } catch (error) {
        toast.error("Erro ao realizar pedido");
      }
    },
  });

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
        <S.AddressForm onSubmit={formik.handleSubmit}>
          <S.AddressInput>
            {formik.errors.zip_cod ? (
              <S.FloatContainer1
                className="floatContainer1"
                style={{ border: "1px solid red" }}
              >
                <S.Input>
                  <S.InputTittle htmlFor="floatField1">CEP</S.InputTittle>
                  <S.FormInput
                    placeholder="Valor obrigatório"
                    type="text"
                    className="floatContainer1"
                    id="zip_cod"
                    value={formik.values.zip_cod}
                    onChange={formik.handleChange}
                  />
                </S.Input>
              </S.FloatContainer1>
            ) : (
              <S.FloatContainer1 className="floatContainer1">
                <S.Input>
                  <S.InputTittle htmlFor="floatField1">CEP</S.InputTittle>
                  <S.FormInput
                    placeholder="00000-000"
                    type="text"
                    className="floatContainer1"
                    id="zip_cod"
                    value={formik.values.zip_cod}
                    onChange={formik.handleChange}
                  />
                </S.Input>
              </S.FloatContainer1>
            )}

            { formik.errors.st ?
              <S.FloatContainer2 className="floatContainer2" style={{ border: "1px solid red" }}>
              <S.Input>
                <S.InputTittle htmlFor="floatField2">
                  Rua/Logradouro
                </S.InputTittle>
                <S.FormInput
                  placeholder="Valor obrigatório"
                  type="text"
                  className="floatContainer2"
                  id="st"
                  value={formik.values.st}
                  onChange={formik.handleChange}
                />
              </S.Input>
            </S.FloatContainer2>
            :
            <S.FloatContainer2 className="floatContainer2">
              <S.Input>
                <S.InputTittle htmlFor="floatField2">
                  Rua/Logradouro
                </S.InputTittle>
                <S.FormInput
                  placeholder="Rua Dom Pedro II"
                  type="text"
                  className="floatContainer2"
                  id="st"
                  value={formik.values.st}
                  onChange={formik.handleChange}
                />
              </S.Input>
            </S.FloatContainer2>
            }
          </S.AddressInput>

          <S.AddressInput>
            { formik.errors.house_number ?
            <S.FloatContainer1 className="floatContainer3" style={{ border: "1px solid red" }}>
              <S.Input>
                <S.InputTittle htmlFor="floatField3">Número</S.InputTittle>
                <S.FormInput
                  placeholder="Valor obrigatório"
                  type="text"
                  className="floatContainer3"
                  id="house_number"
                  value={formik.values.house_number}
                  onChange={formik.handleChange}
                />
              </S.Input>
            </S.FloatContainer1>
            :
            <S.FloatContainer1 className="floatContainer3">
              <S.Input>
                <S.InputTittle htmlFor="floatField3">Número</S.InputTittle>
                <S.FormInput
                  placeholder="00"
                  type="text"
                  className="floatContainer3"
                  id="house_number"
                  value={formik.values.house_number}
                  onChange={formik.handleChange}
                />
              </S.Input>
            </S.FloatContainer1>
            }

            { formik.errors.district ?
            <S.FloatContainer2 className="floatContainer4" style={{ border: "1px solid red" }}>
              <S.Input>
                <S.InputTittle htmlFor="floatField4">Bairro</S.InputTittle>
                <S.FormInput
                  placeholder="Valor obrigatório"
                  type="text"
                  className="floatContainer4"
                  id="district"
                  value={formik.values.district}
                  onChange={formik.handleChange}
                />
              </S.Input>
            </S.FloatContainer2>
            :
            <S.FloatContainer2 className="floatContainer4">
              <S.Input>
                <S.InputTittle htmlFor="floatField4">Bairro</S.InputTittle>
                <S.FormInput
                  placeholder="Jardim São josé"
                  type="text"
                  className="floatContainer4"
                  id="district"
                  value={formik.values.district}
                  onChange={formik.handleChange}
                />
              </S.Input>
            </S.FloatContainer2>
            }
          </S.AddressInput>

          <S.AddressInputLast>
            { formik.errors.city ?
            <S.FloatContainer3 className="floatContainer5" style={{ border: "1px solid red" }}>
              <S.Input>
                <S.InputTittle htmlFor="floatField5">Cidade</S.InputTittle>
                <S.FormInput
                  placeholder="Valor obrigatório"
                  type="text"
                  className="floatContainer5"
                  id="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                />
              </S.Input>
            </S.FloatContainer3>
            :
            <S.FloatContainer3 className="floatContainer5">
              <S.Input>
                <S.InputTittle htmlFor="floatField5">Cidade</S.InputTittle>
                <S.FormInput
                  placeholder="São Paulo"
                  type="text"
                  className="floatContainer5"
                  id="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                />
              </S.Input>
            </S.FloatContainer3>
            }

            { formik.errors.state ?
            <S.FloatContainer4 className="floatContainer6" style={{ border: "1px solid red" }}>
              <S.Input>
                <S.InputTittle htmlFor="floatField6">Estado</S.InputTittle>
                <S.FormInput
                  placeholder="Valor obrigatório"
                  type="text"
                  className="floatContainer6"
                  id="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                />
              </S.Input>
            </S.FloatContainer4>
            :
            <S.FloatContainer4 className="floatContainer6">
              <S.Input>
                <S.InputTittle htmlFor="floatField6">Estado</S.InputTittle>
                <S.FormInput
                  placeholder="São Paulo"
                  type="text"
                  className="floatContainer6"
                  id="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                />
              </S.Input>
            </S.FloatContainer4>
            }
          </S.AddressInputLast>

          <S.ButtonAddress type="submit">Continuar</S.ButtonAddress>
        </S.AddressForm>
      </S.AddressItemsContainer>
    </S.AddressContainer>
  );
};

export default AddressComponent;
