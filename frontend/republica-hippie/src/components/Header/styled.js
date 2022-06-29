import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-top: 55px;
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
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #5AB9F0;
    border-radius: 20px;
    padding: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
`

export const Search = styled.textarea`
    border: none;
    outline: none;
    background-color: #FFFF;
    resize: none;
    border-radius: 20px;
    height: 47px;
    background-color: #f5f5f5;
`

export const NavArea = styled.div`
    display: flex;
    margin: 0 auto;
`

export const Nav = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 120px;
    list-style: none;
    margin: 60px auto;
`

export const NavItem = styled.li`
    color:#D8A691;
    font-size: 24px;
`

export const Menu = styled.div`
    display: flex;
    gap: 100px;
`

export const Icon = styled.img`
    width: 20%;
`