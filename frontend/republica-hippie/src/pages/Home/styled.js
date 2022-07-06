import styled from 'styled-components';

export const BgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  background: url('../../../src/assets/home/BgHome.svg') no-repeat center;
  background-size: contain;
  /* padding-top: 29.4%; */
  padding-top: 21.5%;
  margin-bottom: 40px;
`

export const GradientContainer = styled.div`
  width: 100%;
  background: linear-gradient(89.95deg, #4E3A31 -6.71%, rgba(78, 58, 49, 0) 89.46%);
  padding: 30px 40px;
`

export const HomeTitle = styled.h1`
  font-size: 70px;
  color: #fff;
`

export const PresentationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  max-width: 1500px;
  margin: 0 auto;
  gap: 20px;
  @media screen and (max-width: 1390px) {
    align-items: center;
    justify-content: center;
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
`

export const SubTitle = styled.h2`
  color: #C57E5F;
`

export const HomePhoto = styled.img`
  margin-bottom: 30px;
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
`

export const SobreContent = styled.div`
  max-width: 50%;
`

export const SobreText = styled.p`
  margin-top: 30px;
  max-width: 80%;
`

export const SobreImgContainer = styled.div`

`