import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TitleProfile = styled.h1`
    color: #C57E5F;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const InfoContainer = styled.div`
    margin-top: 100px;
`

export const InfoProfile = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
`

export const InfoItem = styled.p`
    color: #404040;
    line-height: 10px;
    font-weight: 500;
    font-size: 20px;
`

export const InfoItem2 = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 400px;
    margin-left: 100px;
`

export const EditLink = styled(Link)`
    color: #C57E5F;
    text-decoration: none;
    line-height: 25.08px;
    font-size: 20px;
    font-weight: 500;

    &:hover {
        color: #D79E62 ;
    }
`

export const LongOutButton = styled.button`
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
`