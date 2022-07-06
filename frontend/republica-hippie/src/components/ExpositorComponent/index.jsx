import React, { useState, useEffect } from "react";
import { getExpositorById, getExpositorProducts } from "../../services/api";
import { useParams } from "react-router-dom";
import ProductListItem from "../../components/ProductListItem";
import ProductListItemContainer from "../../components/ProductListItemContainer";
import { toast } from "react-toastify";
import * as S from "./styled";

const ExpositorComponent = () => {
  const { id } = useParams();
  const [expositor, setExpositor] = useState({});
  const [expositorProducts, setExpositorProducts] = useState([]);

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
  }, [setExpositorProducts]);

  return (
    <>
      <S.Container>
        <h1>{expositor.name}</h1>

        <p>{expositor.profession}, 67 anos</p>
        <p>Contato: (99) 99999-9999</p>

        <cite>"{expositor.phrase}"</cite>

        <img
          src={expositor.img}
          style={{ width: "350px", height: "350px" }}
        ></img>

        <p>{expositor.description}</p>

        <h3>PRODUTOS POPULARES DE MADALENA</h3>
        <ProductListItemContainer>
        {expositorProducts.length > 0 ? 
              (expositorProducts.map(product => {
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
              }))
            : <p style={{color: 'gray', marginTop: '120px', marginBottom: '190px', textAlign: 'center'}}>Este expositor ainda não possui nenhum produto cadastrado</p>}
        </ProductListItemContainer>
      </S.Container>
    </>
  );
};

export default ExpositorComponent;
