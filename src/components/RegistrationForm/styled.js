import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 960px;
    margin: 0 auto;
`
export const TittleForm = styled.h1`
    color: #C57E5F;
    font-size: 60px;
    margin: 60px auto;
`
export const FormContainer = styled.form`
    @media screen and (max-width: 990px){
        padding: 0 15px;
    }
`

export const FormColumn = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const FloatContainer = styled.div`
    border: solid 1px #ccc;
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 8px;
    padding: 0 8px;
    position: relative;
    width: 100%;
    margin-bottom: 30px;
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

export const InputName = styled.input`
    border: none;
    border-radius: 10px;
    font-size: 16px;
    outline: 0;
    padding: 16px 0 10px;    
    width: 100%;
`

export const FormButton = styled.button`
    background-color: #D79E62;
    border: none;
    border-radius: 20px;
    color: #FFFF;
    font-size: 20px;
    padding: 10px 120px;
    margin-top: 20px;
    margin-bottom: 50px;
    justify-self: end;
    &:hover {
        transition: .3s;
        background-color: #C57E5F;
    }
    transition: .3s;
    @media screen and (max-width: 380px){
        width: 100%;
        justify-self: center;
        padding: 10px 0;
    }

`

export const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 730px){
        justify-content: center;
    }
`

