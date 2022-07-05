import styled from "styled-components";
import { Link } from "react-router-dom";
import img from '../../assets/background.png'


export const Container = styled.main`
    background-image: url(${img});   
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

`

export const Logo = styled.img`
    display: flex;
    justify-content: flex-start;
    width: 220px;
    height: 100px;
    margin: 50px 0px 0px 50px;
`

export const FormContainer = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Montserrat:wght@100;300;400&display=swap');
    font-family: 'Montserrat', sans-serif;
    background-color: #FFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 518px;
    height: 610px;
    margin: 20px 20px 30px 450px;
    border-radius: 20px;
`

export const TittleForm = styled.h3`
    font-family: 'Montserrat', sans-serif;
    border-radius: 20px;
    color: #D79E62;
    font-size: 24px;
    margin-bottom: 40px;
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

export const FormButton = styled.button`
    background-color: #D79E62;
    border: none;
    border-radius: 20px;
    color: #FFFF;
    font-size: 20px;
    padding: 10px 120px;
    margin-top: 20px;
`

export const LinkSingUp = styled(Link)`
    text-decoration: none;
    color: #D79E62;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    &:hover {
        color: #C57E5F;
    }
`