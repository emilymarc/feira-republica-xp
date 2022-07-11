import React, { useState, useEffect } from "react";
import { getExpositorById, getExpositorProducts } from "../../services/api";
import { useParams } from "react-router-dom";
import ProductListItem from "../../components/ProductListItem";
import ProductListItemContainer from "../../components/ProductListItemContainer";
import { toast } from "react-toastify";
import * as S from "./styled";
import moment from "moment";


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
        toast.warn(error);
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
        toast.warn(error);
      }
    };
    getExpositorProductsId();
  }, [setExpositorProducts]);

  let currentDate = new Date(expositor.birth_date);
  let formattedDate = moment(currentDate).format('YYYYMMDD');
  let expositorAge = moment(formattedDate, 'YYYYMMDD').fromNow().split(' ')[0];

  const expositorProductsObject = expositorProducts.products
  return (
    <>
      <S.Container>
        <S.ExpositorTitle>{(`${expositor.name}`).toUpperCase()}</S.ExpositorTitle>

        <p>{expositor.profession}, {expositorAge} anos</p>
        <p>Contato: {expositor.phone}</p>

        <S.ExpositorCite>"{expositor.phrase}"</S.ExpositorCite>

        <S.ExpositorImg
          src={expositor.img}
        ></S.ExpositorImg>

        <S.ExpositorDescription>{expositor.description}</S.ExpositorDescription>

        <S.ExpositorProductTitle>{(`PRODUTOS POPULARES DE ${expositor.name}`).toUpperCase()}</S.ExpositorProductTitle>
        <ProductListItemContainer>

            {expositorProductsObject?.filter((item, idx) => idx < 3).map((product) => {
                const path = `/product/${product.code_product}`;
                return(
                  <ProductListItem
                    key={product.code_product}
                    productPath={path}
                    productId={product.id}
                    productTitle={product.name}
                    productValue={product.price.replace(".", ",")}
                    productImg={!product.image_products[0].url_img ? null : product.image_products[0].url_img}
                  ></ProductListItem>
                )
              })}
        </ProductListItemContainer>
      </S.Container>
    </>
  );
};

export default ExpositorComponent;
