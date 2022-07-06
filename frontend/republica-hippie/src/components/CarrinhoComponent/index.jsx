import React from 'react';
import * as S from './styled';
import FilledElipse from '../../assets/progressbar/FilledEllipse.svg';
import EmptyElipse from '../../assets/progressbar/EmptyEllipse.svg';
import IconTrash from '../../assets/IconTrash.svg';
import ceramica_img from '../../assets/ceramica/ceramica_xicara_casinha.svg';
import store from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, decrementItem, removeItem, getTotal } from "../../redux/feature/cartSlice";

const CarrinhoComponent = () => {
  const dispatch = useDispatch();
  dispatch(getTotal());
  const { Items, totalAmount } = useSelector((state) => state.cart);
  
  const handleAddItem = (Item) => {
    dispatch(addItem(Item));
  }
  const handleDecrementItem = (Item) => {
    dispatch(decrementItem(Item));
  }
  const handleRemoveItem = (Item) => {
    dispatch(removeItem(Item));
  }

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
          {Items.length > 0 ? (Items.map((item, index) => (
            <S.ItemContainer key={item.code_product} style={index > 0 ? {marginTop: '35px'} : null}>
            
              <S.IconTrash src={IconTrash} onClick={() => {handleRemoveItem(item)}} alt="Excluir item"/>
              <S.ItemImg src={item.image_products[0].url_img} alt="Imagem do produto"/>

              <S.ItemInfoContainer>
                <S.ItemTitle>{item.name}</S.ItemTitle>
                <S.ItemPrice>R$ {(item.price * item.quantity)},00</S.ItemPrice>
                <S.ItemQuantityContainer>
                  <S.ItemIncrementDecrement onClick={() => handleDecrementItem(item)}>-</S.ItemIncrementDecrement>
                  <S.ItemQuantity>{item.quantity}</S.ItemQuantity>
                  <S.ItemIncrementDecrement onClick={() => handleAddItem(item)}>+</S.ItemIncrementDecrement>
                </S.ItemQuantityContainer>
              </S.ItemInfoContainer>

            </S.ItemContainer>
          ))) : <p style={{fontSize: '20px', color: 'gray', marginTop: '160px', marginBottom: '100px', textAlign: 'center'}}>Seu carrinho está vazio 😔</p> }
        </S.CartItemsContainer>

        <S.SubtotalContainer>
          <S.SubtotalTextContainer>
            <S.SubtotalText>Subtotal: </S.SubtotalText>
            <S.SubtotalPrice>R$ {totalAmount},00</S.SubtotalPrice>
          </S.SubtotalTextContainer>

          <S.SubtotalBtn>Continuar</S.SubtotalBtn>
        </S.SubtotalContainer>

      </S.CarrinhoContainer>
    </>
  );
}

export default CarrinhoComponent;