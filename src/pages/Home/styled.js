import styled from 'styled-components';

export const BgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  background: url('../../../src/assets/home/BgHome.svg') no-repeat center;
  background-size: contain;
  padding-top: 21.5%;
  margin-bottom: 40px;
  @media screen and (max-width: 1717px){
    padding-top: 16%;
  }
  @media screen and (max-width: 1495px){
    padding-top: 14%;
  }
  @media screen and (max-width: 1350px){
    padding-top: 20%;
  }
  @media screen and (max-width: 1248px){
    padding-top: 15%;
  }
  @media screen and (max-width: 1120px){
    padding-top: 13%;
  }
  @media screen and (max-width: 995px){
    padding-top: 11%;
  }
  @media screen and (max-width: 920px){
    padding-top: 0;
    background: #746A5C;
  }
`

export const GradientContainer = styled.div`
  width: 100%;
  background: linear-gradient(89.95deg, #4E3A31 -6.71%, rgba(78, 58, 49, 0) 89.46%);
  padding: 30px 40px;
  @media screen and (max-width: 920px){
    
  }
`

export const HomeTitle = styled.h1`
  font-size: 70px;
  color: #fff;
  @media screen and (max-width: 1350px){
    font-size: 50px;
  }
`

export const PresentationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  max-width: 1500px;
  margin: 0 auto;
  gap: 20px;
  @media screen and (max-width: 1520px){
    padding: 0 10px
  }
  @media screen and (max-width: 1410px){
    gap: 10px;
  }
  @media screen and (max-width: 1390px) {
    justify-content: center;
  }
  @media screen and (max-width: 1090px) {
    flex-direction: column;
    align-items: center;
  }
`

export const PresentationItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 450px;
  @media screen and (max-width: 1390px){
    max-width: 350px;
  }
`

export const SubTitle = styled.h2`
  color: #C57E5F;
`

export const HomePhoto = styled.img`
  margin-bottom: 30px;
  @media screen and (max-width: 1390px){
    max-width: 350px;
  }
  @media screen and (max-width: 400px){
    display: none
  }
`

export const MobilePhoto = styled.img`
  display: none;
  @media screen and (max-width: 400px){
    width: 60px;
    height: 60px;
    display: block;
    margin: 40px auto;
  }
`

export const PresentationText = styled.p`
  margin-top: 10px;
`

export const SobreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 80px;
  max-width: 1500px;
  margin: 0 auto;
  padding: 40px 0;
  @media screen and (max-width: 1466px) {
      flex-direction: column;
      max-width: 100%;
      align-items: center;
  }
`

export const SobreContent = styled.div`
  max-width: 50%;
  @media screen and (max-width: 1466px) {
      max-width: 80%;
      margin: 0 auto;
      text-align: center;
  }
`

export const SobreText = styled.p`
  margin-top: 30px;
  max-width: 80%;
  @media screen and (max-width: 1466px) {
      max-width: 100%;
  }
`

export const SobreImgContainer = styled.div`
  @media screen and (max-width: 768px){
    display: none;
  }
`