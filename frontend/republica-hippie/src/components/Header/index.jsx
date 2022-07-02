import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/Icon.svg';
import cart from '../../assets/shopping-cart.svg';
import profile from '../../assets/profile.svg';
import iconExpositores from '../../assets/IconExpositores.svg';
import * as S from './styled';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <S.Header>
            <S.LogoArea>
                <Link to="/">
                    <img src={logo} alt="Republica Hippie"/>
                </Link>
                
                <S.SearchContainer>
                    <S.Search type='search'></S.Search>
                    <img src={search}/>
                </S.SearchContainer>
               
               <S.Menu>
                    <S.Icon src={cart}></S.Icon>
                    <S.IconLink to='/profile'><S.Icon src={profile}/></S.IconLink>
               </S.Menu>

            </S.LogoArea>

            <S.NavArea>
                    <S.Nav>
                        <S.NavLink to='/'><S.NavItem>HOME</S.NavItem></S.NavLink>
                        <S.NavLink to='/ceramicas'><S.NavItem>CERÂMICAS</S.NavItem></S.NavLink>
                        <S.NavLink to='/colares'><S.NavItem>COLARES</S.NavItem></S.NavLink>
                        <S.NavLink to='/pinturas'><S.NavItem>PINTURAS</S.NavItem></S.NavLink>
                        <S.ContainerExpositores>
                            <img src={iconExpositores} alt='Icon Expositores'></img>
                            <S.NavLink to='/expositores'><S.NavItem>EXPOSITORES</S.NavItem></S.NavLink>
                        </S.ContainerExpositores>
                    </S.Nav>
            </S.NavArea>
        </S.Header>
    )
}

export default Header;