import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TitleEdit = styled.h1`
    color: #C57E5F;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;
`

export const FormEdit = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 300px;
    margin-bottom: 20px;
`

export const InputEdit = styled.input`
    outline: none;
    border-radius: 10px;
    display: flex;
    padding: 8px 40px 8px 4px;
    border: solid 1px #ccc;
`

export const FormLabel = styled.label`
    color: #404040;
    line-height: 10px;
    font-weight: 500;
    font-size: 20px;
`

export const LabelFile = styled.label`
    padding: 10px 10px;
    width: 200px;
    border-radius: 20px;
    background-color: #FFFF;
    border: 1px solid #D79E62;
    color: #C57E5F;
    text-align: center;
    display: block;
    cursor: pointer;
`

export const InputFile = styled.input`
    display: none;
`

export const ButtonEdit = styled.button`
    background-color: #D79E62;
    border: none;
    border-radius: 20px;
    color: #FFFF;
    font-size: 20px;
    padding: 10px 120px;
    margin-top: 20px;
    margin-bottom: 50px;
    justify-self: end;
    width: 50%;
    margin-left: 200px;
    &:hover {
        transition: .3s;
        background-color: #C57E5F;
    }
    transition: .3s;
`