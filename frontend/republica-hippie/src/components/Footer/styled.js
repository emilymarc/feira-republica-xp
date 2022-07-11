import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    padding: 30px 0 10px 0;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #746A5C;
    color : #fff !important;
    @media screen and (max-width: 990px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`

export const Social = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

export const SocialTitle = styled.h4`
    color: #fff;
    text-align: center;
    margin-top: 15px;
    font-weight: 500;
`

export const SocialIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const Icon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 73px;
    transition: .3s;
    box-sizing: content-box;
    border-bottom: 5px solid #746A5C;
    &:hover {
        border-bottom: 5px solid #fff;
    }
`

export const Address = styled.div`
    color: #fff;
    margin: 0 30px;
`

export const AddressTitle = styled.h4`
    color: #fff;
    font-weight: 600;
    font-size: 20px;
`

export const Content = styled.p`
    color: #fff;
    margin-top: 15px;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    @media screen and (max-width: 380px) {
        font-size: 16px;
    }
`

export const ContactSocialIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 380px) {
        padding-left: 25px;
    }
`

export const Contact = styled.div`

`

export const ContactTitle = styled.h4`
    color: #fff;
    font-weight: 600;
    font-size: 20px;;
    @media screen and (max-width: 380px) {
        padding-left: 25px;
    }
`