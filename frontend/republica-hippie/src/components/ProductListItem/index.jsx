import React from "react";
import * as S from "./styled";

const ProductListItem = (props) => {
  const path = `/product/${1}`;
  return (
    <>
        <S.Container to={path}>
          <S.ProductImage src={props.productImg} alt='Imagem do produto'></S.ProductImage>
          <S.ProductTitle>{props.productTitle}</S.ProductTitle>
          <S.ProductPrice>R$ {props.productValue}</S.ProductPrice>
        </S.Container>
    </>
  );
}

export default ProductListItem;