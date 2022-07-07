import React, { useState, useEffect } from "react";
import { getExpositorById, getExpositorProducts } from "../../services/api";
import { useParams } from "react-router-dom";
import ProductListItem from "../../components/ProductListItem";
import ProductListItemContainer from "../../components/ProductListItemContainer";
import { toast } from "react-toastify";
import * as S from "./styled";
import ceramica_xicara_casinha from "../../assets/ceramica/ceramica_xicara_casinha.svg";
const ExpositorComponent = () => {
  const { id } = useParams();
  const [expositor, setExpositor] = useState({});
  const [expositorProducts, setExpositorProducts] = useState({});

  useEffect(() => {
    const getExpositorId = async () => {
      try {
        const response = await getExpositorById(id);
        setExpositor(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getExpositorId();
  }, [setExpositor]);

  useEffect(() => {
    const getExpositorProductsId = async () => {
      try {
        const response = await getExpositorProducts(id);
        setExpositorProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getExpositorProductsId();
  }, [setExpositorProducts]);

  const expositorProductsObject = expositorProducts.products
  return (
    <>
      <S.Container>
        <h1>{(`${expositor.name}`).toUpperCase()}</h1>

        <p>{expositor.profession}, 67 anos</p>
        <p>Contato: {expositor.phone}</p>

        <cite>"{expositor.phrase}"</cite>

        <img
          src={expositor.img}
          style={{ width: "350px", height: "350px" }}
        ></img>

        <p>{expositor.description}</p>

        <h3>{(`PRODUTOS POPULARES DE ${expositor.name}`).toUpperCase()}</h3>
        <ProductListItemContainer>

            {expositorProductsObject?.map(product => {
                const path = `/product/${product.code_product}`;
                return(
                  <ProductListItem
                    key={product.code_product}
                    productPath={path}
                    productId={product.id}
                    productTitle={product.name}
                    productValue={product.price.replace(".", ",")}
                    productImg={ceramica_xicara_casinha}
                  ></ProductListItem>
                )
              })}
        </ProductListItemContainer>
      </S.Container>
    </>
  );
};

export default ExpositorComponent;
