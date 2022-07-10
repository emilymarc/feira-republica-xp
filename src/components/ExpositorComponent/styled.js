import styled from "styled-components"

export const Container = styled.div`
  text-align: center;
`

export const ProductsContainer = styled.div`

`

export const ExpositorTitle = styled.h1`
  font-size: 50px;
  color: #C57E5F;
  margin: 40px auto;
`

export const ExpositorCite = styled.cite`
  margin: 30px auto auto auto;
  font-style: normal;
  display: block;
`

export const ExpositorImg = styled.img`
  margin: 45px auto;
  width: 350px;
  height: 350px;
  border-radius: 10%;
  @media screen and (max-width: 450px) {
    width: 300px;
    height: 300px;
  }
`

export const ExpositorDescription = styled.p`
  max-width: 1000px;
  margin: auto auto 45px auto;
`

export const ExpositorProductTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px
`