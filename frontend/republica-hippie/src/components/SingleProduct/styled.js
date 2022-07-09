import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 630px;
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 60px;
    @media screen and (max-width: 1440px) {
        padding: 0 15px 60px 15px
    }
    @media screen and (max-width: 910px) {
        flex-direction: column;
        max-width: 100%;
    }
`

export const ReturnContainer = styled.div`
    width: 100%;
    margin-bottom: 15px;
`

export const Return = styled.button`
    display: flex;
    align-items: center;
    gap: 55px;
    border: none;
    border-radius: 50%; 
`

export const Icon = styled.img`
    height: 55px;
    width: 55px;
    padding: 20px;
    background-color: #FEDC96;
    border-radius: 50%;
    transition: .3s;
    cursor: pointer;
    &:hover {
        background-color: #F8CE78;
        transition: .3s;
    }
`

export const LeftContainer = styled.div`
    max-width: 40%;
    margin-right: 10%;
    @media screen and (max-width: 910px) {
        max-width: 100%;
        margin-right: 0;
        margin: 0 auto 30px auto;
        text-align: center;
    }
`

export const RightContainer = styled.div`
    max-width: 40%;
    @media screen and (max-width: 910px) {
        max-width: 100%;
        margin: 0 auto
    }
`

export const ProductText = styled.p`
    margin-top: 45px;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`

export const ProductTitle = styled.h3`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 15px;
    @media screen and (max-width: 450px) {
        font-size: 26px;
    }
`

export const ProductExpositor = styled.span`
   font-weight: 500;
`

export const LinkExpositor = styled(Link)`
    color: #C57E5F;
    text-decoration: none;
`

export const PriceLikeContainer = styled.div`
    display: flex;
    margin: 30px auto 45px auto;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    @media screen and (max-width: 910px) {
        gap: 12rem;
    }
    @media screen and (max-width: 460px) {
        gap: 6rem;
    }
    @media screen and (max-width: 360px) {
        gap: 3rem;
    }
`

export const Price = styled.span`
    font-size: 48px;
    font-weight: 600;
    @media screen and (max-width: 450px) {
        font-size: 32px;
    }
`

export const IconLike = styled.img`
    &:hover {
        transition: .1s;
        transform: scale(1.1);
        cursor: pointer;
    }
    transition: .1s;
    transform: scale(1);
`

export const BtnContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    gap: 22px;
    margin-bottom: 80px;
`

export const BtnComprar = styled.button`
    width: 100%;
    padding: 8px 0;
    border-radius: 20px;
    border: 1px solid #D79E62;
    background-color: #D79E62;
    color: #fff;
    cursor: pointer;
    &:hover {
        transition: .3s;
        border: 1px solid #c58744;
        background-color: #c58744;
    }
    transition: .3s;
`

export const BtnCarrinho = styled.button`
    width: 100%;
    padding: 8px 0;
    border-radius: 20px;
    border: 1px solid #D79E62;
    background-color: #fff;
    color: #525252;
    cursor: pointer;
    &:hover {
        transition: .3s;
        background-color: #f1edea;
        border: 1px solid #f1edea;
    }
    transition: .3s;
`

export const ProductDescription = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    gap: 22px;
`

export const DescriptionButton = styled(DropdownButton) `
    width: 100% !important;
`