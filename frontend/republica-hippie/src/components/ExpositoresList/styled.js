import styled from "styled-components";
import {Link} from 'react-router-dom';

export const ExpositoresContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 1100px) {
        padding: 0 15px
    }
    @media screen and (max-width: 550px) {
        flex-direction: column;
        max-width: 300px;
        margin: 0 auto;
        margin-bottom: 40px;
    }
`

export const ImgContainer = styled.div`
    margin-bottom: 40px;
    @media screen and (max-width: 550px) {
        margin-bottom: 25px;
    }
`
export const ExpositorImg = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 20px;
`

export const InfoExpositores = styled.div`
    margin-left: 10px;
`

export const TitleExpositores = styled.h3`
    margin-bottom: 60px;
    @media screen and (max-width: 550px) {
        margin-bottom: 35px;
    }
`

export const LinkInfo = styled(Link)`
    text-decoration: none;
    color: #C57E5F;
    &:hover {
        transition: .3s;
        color: #D79E62;
    }
    transition: .3s;
`