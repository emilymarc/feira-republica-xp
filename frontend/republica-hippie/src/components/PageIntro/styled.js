import styled from "styled-components"

export const IntroSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-bottom: 70px;
    @media screen and (max-width: 1050px) {
      padding: 0 15px;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;

  @media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-size: 70px;
  color: #C57E5F;
  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
  @media screen and (max-width: 380px){
    font-size: 40px;
  }
`

export const TitleContent = styled.p`
  text-align: center;

  @media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
  }
`

export const IntroIcon = styled.img`
  max-width: 60px;
  max-height: 60px;
  @media screen and (max-width: 550px){
    max-width: 55px;
    max-height: 55px;
  }
`
