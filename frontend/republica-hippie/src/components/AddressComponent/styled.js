import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddressContainer = styled.section`
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

export const AddressEllipseContainer = styled.div`
  
`

export const AddressProgress1 = styled.img`
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

export const AddressProgress2 = styled.img`
  position: absolute;
  left: 50%; bottom: 0; 
  top: 10%;
  margin: -25px;
`

export const AddressProgress3 = styled.img`
  position: absolute;
  left: 100%; bottom: 0; 
  top: 10%;
  margin: -25px;
  @media screen and (max-width: 1300px){
    left: 99.3%
  }
`

export const AddressProgressTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AddressProgressText = styled.p`
  font-size: 20px;
  color: #D8A691;
  font-weight: 400;
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const AddressItemsContainer = styled.div`
    
`

export const AddressInput = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    @media screen and (max-width: 680px){
      display: flex;
    flex-direction: column;
  }
`

export const AddressInputLast = styled(AddressInput)`
    border-bottom: 2px solid #D79E62;
    padding-bottom: 50px;
`

export const FloatContainer1 = styled.div`
    border: solid 1px #ccc;
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 8px;
    padding: 0 8px;
    position: relative;
    width: 40%;
    @media screen and (max-width: 680px){
    width: 100%;
  }
`

export const FloatContainer2 = styled.div`
    border: solid 1px #ccc;
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 8px;
    padding: 0 8px;
    position: relative;
    width: 60%;
    @media screen and (max-width: 680px){
    width: 100%;
  }
`

export const FloatContainer3 = styled.div`
    border: solid 1px #ccc;
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 8px;
    padding: 0 8px;
    position: relative;
    width: 55%;
    @media screen and (max-width: 680px){
    width: 100%;
  }
`

export const FloatContainer4 = styled.div`
    border: solid 1px #ccc;
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 8px;
    padding: 0 8px;
    position: relative;
    width: 45%;
    @media screen and (max-width: 680px){
    width: 100%;
  }
`

export const InputTittle = styled.label`
    font-size: 12px;
    position: absolute;
    top: -6px;
    left: 10px;
    background: white;
`
export const FormInput = styled.input`
    border: none;
    border-radius: 10px;
    font-size: 16px;
    outline: 0;
    padding: 16px 0 10px;    
    width: 100%;
`

export const Input = styled.div`
  width: 100%;
`


export const ButtonAddress = styled.button`
    background-color: #D79E62;
    border: none;
    border-radius: 20px;
    color: #FFFF;
    font-size: 20px;
    padding: 10px 120px;
    margin-top: 20px;
    margin-bottom: 50px;
    justify-self: end;
    text-decoration: none;
    font-weight: 600;
    &:hover {
        transition: .3s;
        background-color: #C57E5F;
        color: #fff;
    }
    transition: .3s;
    align-self: end;
    @media screen and (max-width: 680px){
      margin: 20px auto 50px auto;
  }
`