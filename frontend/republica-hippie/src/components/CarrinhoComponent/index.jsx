import React from "react";
import * as S from "./styled";
import FilledElipse from "../../assets/progressbar/FilledEllipse.svg";
import EmptyElipse from "../../assets/progressbar/EmptyEllipse.svg";
import IconTrash from "../../assets/IconTrash.svg";
import store from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  decrementItem,
  removeItem,
  getTotal,
} from "../../redux/feature/cartSlice";

const CarrinhoComponent = () => {
  const dispatch = useDispatch();
  dispatch(getTotal());
  const { Items, totalAmount, totalItems } = useSelector((state) => state.cart);
  const { id_client, isLogged } = useSelector((state) => state.user);
  const handleAddItem = (Item) => {
    dispatch(addItem(Item));
  };
  const handleDecrementItem = (Item) => {
    dispatch(decrementItem(Item));
  };
  const handleRemoveItem = (Item) => {
    dispatch(removeItem(Item));
  };

  return (
    <>
      <S.CarrinhoContainer>
        <S.ProgressBarContainer>
          <S.CartProgress1 src={FilledElipse} />
          <S.CartProgress2 src={EmptyElipse} />
          <S.CartProgress3 src={EmptyElipse} />

          <S.CartProgressTextContainer>
            <S.CartProgressText style={{ fontWeight: "600" }}>
              Carrinho
            </S.CartProgressText>
            <S.CartProgressText>Endereço</S.CartProgressText>
            <S.CartProgressText>Finalizar</S.CartProgressText>
          </S.CartProgressTextContainer>
        </S.ProgressBarContainer>

        <S.CartItemsContainer>
          {Items.length > 0 ? (
            Items.map((item, index) => {
              let total = item.price * item.quantity;
              let total_format = total.toFixed(2);
              return (
                <S.ItemContainer
                key={item.code_product}
                style={index > 0 ? { marginTop: "35px" } : null}
              >
                <S.IconTrash
                  src={IconTrash}
                  onClick={() => {
                    handleRemoveItem(item);
                  }}
                  alt="Excluir item"
                />
                <S.ItemImg
                  src={item.image_products[0].url_img}
                  alt="Imagem do produto"
                />

                <S.ItemInfoContainer>
                  <S.ItemTitle>{item.name}</S.ItemTitle>
                  <S.ItemPrice>R$ {(total_format).replace(".", ",")}</S.ItemPrice>
                  <S.ItemQuantityContainer>
                    <S.ItemIncrementDecrement
                      onClick={() => handleDecrementItem(item)}
                    >
                      -
                    </S.ItemIncrementDecrement>
                    <S.ItemQuantity>{item.quantity}</S.ItemQuantity>
                    <S.ItemIncrementDecrement
                      onClick={() => handleAddItem(item)}
                      disabled={item.stock_product <= 0}
                    >
                      +
                    </S.ItemIncrementDecrement>
                  </S.ItemQuantityContainer>
                  <S.ItemStock>{`${item.stock_product} disponíveis`}</S.ItemStock>
                </S.ItemInfoContainer>
              </S.ItemContainer>
              )
              
              })
          ) : (
            <p
              style={{
                fontSize: "20px",
                color: "gray",
                marginTop: "160px",
                marginBottom: "100px",
                textAlign: "center",
              }}
            >
              Seu carrinho está vazio 😔
            </p>
          )}
        </S.CartItemsContainer>

        <S.SubtotalContainer>
          <S.SubtotalTextContainer>
            <S.SubtotalText>Subtotal: </S.SubtotalText>
            <S.SubtotalPrice>R$ {(totalAmount).toFixed(2).replace(".", ",")}</S.SubtotalPrice>
          </S.SubtotalTextContainer>

          {totalItems > 0 
            ? 
            <>
              {isLogged ? <S.SubtotalBtn to={`/endereco/${id_client}`}>Continuar</S.SubtotalBtn> : <S.SubtotalBtn to="/login">Continuar</S.SubtotalBtn>}
            </>
            : <span style={{height: '15px'}}/>
          }

        </S.SubtotalContainer>
      </S.CarrinhoContainer>
    </>
  );
};

export default CarrinhoComponent;
