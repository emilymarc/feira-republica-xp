import React from 'react';
import * as S from './styled';
import FilledElipse from '../../assets/progressbar/FilledEllipse.svg';
import EmptyElipse from '../../assets/progressbar/EmptyEllipse.svg';
import IconTrash from '../../assets/IconTrash.svg';
import ceramica_img from '../../assets/ceramica/ceramica_xicara_casinha.svg';
const CarrinhoComponent = () => {
  return (
    <>
      <S.CarrinhoContainer>
        
        <S.ProgressBarContainer>
          <S.CartProgress1 src = {FilledElipse}/>
          <S.CartProgress2 src = {EmptyElipse}/>
          <S.CartProgress3 src = {EmptyElipse}/>

          <S.CartProgressTextContainer>
            <S.CartProgressText style={{fontWeight: '600'}}>Carrinho</S.CartProgressText>
            <S.CartProgressText>Endereço</S.CartProgressText>
            <S.CartProgressText>Finalizar</S.CartProgressText>
          </S.CartProgressTextContainer>

        </S.ProgressBarContainer>

        <S.CartItemsContainer>
          <S.ItemContainer>
            <S.IconTrash src={IconTrash} onClick={() => {}} alt="Excluir item"/>
            <S.ItemImg src={ceramica_img} alt="Imagem do produto"/>

            <S.ItemInfoContainer>
              <S.ItemTitle>Tigela pintura indiana</S.ItemTitle>
              <S.ItemPrice>R$ 40,00</S.ItemPrice>

              <S.ItemQuantityContainer>
                <S.ItemIncrementDecrement>-</S.ItemIncrementDecrement>
                <S.ItemQuantity>1</S.ItemQuantity>
                <S.ItemIncrementDecrement>+</S.ItemIncrementDecrement>
              </S.ItemQuantityContainer>
            </S.ItemInfoContainer>

          </S.ItemContainer>
        </S.CartItemsContainer>

        <S.SubtotalContainer>
          <S.SubtotalTextContainer>
            <S.SubtotalText>Subtotal: </S.SubtotalText>
            <S.SubtotalPrice>R$ 40,00</S.SubtotalPrice>
          </S.SubtotalTextContainer>

          <S.SubtotalBtn>Continuar</S.SubtotalBtn>
        </S.SubtotalContainer>

      </S.CarrinhoContainer>
    </>
  );
}

export default CarrinhoComponent;