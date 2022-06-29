import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

export const LogoArea = styled.div`
    display: flex;
    justify-content: space-around;
`
export const Logo = styled.img`
    width: 263px;
    height: 120px;
`

export const SearchContainer = styled.div`
    border: 1px solid #5AB9F0;
    border-radius: 20px;
    padding: 10px;
    height: 20px;
`

export const Search = styled.textarea`
    border: none;
    background-color: #FFFF;
    resize: none;
    border-radius: 20px;
`
