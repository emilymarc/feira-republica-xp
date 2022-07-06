import styled from "styled-components"

export const CarrinhoContainer = styled.section`
  max-width: 1286px;
  margin: 0 auto;
  padding-top: 1px;
`

export const ProgressBarContainer = styled.div`
  border-top: 2px solid #D79E62;
  position: relative;
  margin-bottom: 60px;
  margin-top: 50px;
  padding-top: 20px;
`

export const CartEllipseContainer = styled.div`
  
`

export const CartProgress1 = styled.img`
  position: absolute;
  left: 1.9%; bottom: 0; 
  top: 10%;
  margin: -25px;
`

export const CartProgress2 = styled.img`
  position: absolute;
  left: 50%; bottom: 0; 
  top: 10%;
  margin: -25px;
`

export const CartProgress3 = styled.img`
  position: absolute;
  left: 100%; bottom: 0; 
  top: 10%;
  margin: -25px;
`

export const CartProgressTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CartProgressText = styled.p`
  font-size: 20px;
  color: #D8A691;
  font-weight: 400;
`

export const CartItemsContainer = styled.div`
  border-bottom: 2px solid #D79E62;
  padding-bottom: 18vh;
  margin-bottom: 25px;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 30px;
  max-height: 133.33px;
`

export const IconTrash = styled.img`
  align-self: center;
  height: 55px;
  width: 55px;
  padding: 15px;
  background-color: #FEDC96;
  border-radius: 50%;
  transition: .3s;
  cursor: pointer;
  &:hover {
      background-color: #F8CE78;
      transition: .3s;
  }
`

export const ItemImg = styled.img`
  max-width: 200px;
`

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const ItemTitle = styled.h4`
  font-weight: 300;
  margin-bottom: 13px;
`

export const ItemPrice = styled.span`
  font-size: 28px;
  font-weight: 300;
`

export const ItemQuantityContainer = styled.div`
  border: 1px solid #404040;
  border-radius: 20px;
  max-width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`

export const ItemIncrementDecrement = styled.button`
  border: none;
  background-color: #fff;
  border-radius: 20px;
  padding: 2px 15px;
`

export const ItemQuantity = styled.span`

`

export const SubtotalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-bottom: 10vh;
`

export const SubtotalTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10vw;
`

export const SubtotalText = styled.h4`
  font-size: 28px;
  color: #D8A691;
  font-weight: 600;
`

export const SubtotalPrice = styled.span`
  font-size: 28px;
  font-weight: 400;
`



export const SubtotalBtn = styled.button`
  align-self: end;
  margin-top: 10px;
  background-color: #D79E62;
  border: none;
  border-radius: 20px;
  padding: 8px 100px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  &:hover{
    transition: .3s;
    background-color: #c58744;
  }
  transition: .3s;
`