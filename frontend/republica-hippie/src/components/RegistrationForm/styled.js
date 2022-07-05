import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const TittleForm = styled.h1`
    color: #C57E5F;
    font-size: 60px;
`

export const FormColumn = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
`

export const FloatContainer = styled.div`
    border: solid 1px #ccc;
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 8px;
    padding: 0 8px;
    position: relative;
    width: 300px;
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
    display: flex;
`