import styled from 'styled-components';

export const PagContainer = styled.section`
  max-width: 1286px;
  margin: 0 auto;
  padding-top: 1px;
  @media screen and (max-width: 1300px){
    padding: 0 10px
  }
`

export const ProgressBarContainer = styled.div`
  border-top: 2px solid #D79E62;
  position: relative;
  margin-bottom: 60px;
  margin-top: 50px;
  padding-top: 20px;
`

export const PagEllipseContainer = styled.div`
  
`

export const PagProgress1 = styled.img`
  position: absolute;
  left: 1.9%; bottom: 0; 
  top: 10%;
  margin: -25px;
  @media screen and (max-width: 970px){
    left: 2.6%;
  }
  @media screen and (max-width: 670px){
    left: 2.8%;
  }
`

export const PagProgress2 = styled.img`
  position: absolute;
  left: 50%; bottom: 0; 
  top: 10%;
  margin: -25px;
`

export const PagProgress3 = styled.img`
  position: absolute;
  left: 100%; bottom: 0; 
  top: 10%;
  margin: -25px;
  @media screen and (max-width: 1300px){
    left: 99.3%
  }
`

export const PagProgressTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PagProgressText = styled.p`
  font-size: 20px;
  color: #D8A691;
  font-weight: 400;
`

export const InfoPag = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const InfoTitle = styled.h3`
    color: #D79E62;
    font-size: 20px;
    font-weight: 500;
    line-height: 25.08px;
    margin-bottom: 50px;
    width: 100%;
`

export const InfoItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 430px){
    flex-direction: row;
    align-items: center;
    gap: 100px;
  }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 430px){
      flex-direction: row;
      align-items: center;
      gap: 100px;
  }
`

export const Info = styled.p`
  text-align: left;
`

export const InfoItem = styled.p`
    color: #404040;
    line-height: 20px;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 10px;
`
export const InfoText = styled.p`
    color: #404040;
    line-height: 25.08px;
    font-weight: 500;
    font-size: 18px;
    margin-top: 100px;
    border-bottom: 2px solid #D79E62;
    padding-bottom: 30px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ButtonPag = styled.button`
    background-color: #D79E62;
    border: none;
    border-radius: 20px;
    color: #FFFF;
    font-size: 20px;
    padding: 10px 120px;
    margin-top: 20px;
    margin-bottom: 50px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        transition: .3s;
        background-color: #C57E5F;
        color: #fff;
    }
    transition: .3s;
`