import React from "react";
import * as S from "./styled";

const ProductListItemContainer = ({children}) => {
  return (
      <S.Container>
        {children}
      </S.Container>
  );
}

export default ProductListItemContainer;