import React from "react";
import * as S from "./styled";

const ProductListItem = (props) => {
  return (
    <>
        <S.Container>
          <img src={props.productImg} alt='Imagem do produto'></img>
          <h3>{props.productTitle}</h3>
          <span>R$ {props.productValue}</span>
        </S.Container>
    </>
  );
}

export default ProductListItem;