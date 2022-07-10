import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  max-width: 480px;
  max-height: 440px;
  background-color: #F3EEE9;
  border-radius: 20px;
  padding: 20px 15px 32px 15px;
  text-decoration: none;
  transition: .3s;
  &:hover {
    transition: .3s;
    background-color: #e0d0bf;
  }
  @media screen and (max-width: 575px) {
    max-width: 320px;
    max-height: 320px;
  }
`

export const ProductImage = styled.img`
  max-width: 450px;
  max-height: 300px;
  margin-bottom: 17px;
  border-radius: 20px;
  @media screen and (max-width: 575px) {
    max-width: 305px;
    max-height: 203px;
  }
`

export const ProductTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 5px;
`

export const ProductPrice = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
`