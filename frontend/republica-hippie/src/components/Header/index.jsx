import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/Icon.svg';
import cart from '../../assets/shopping-cart.svg';
import * as S from './styled';

const Header = () => {

    return (
        <S.Header>
            <S.LogoArea>
                <S.Logo src={logo} alt="Republica Hippie"/>
                
                <S.SearchContainer>
                    <S.Search></S.Search>
                    <img src={search}/>
                </S.SearchContainer>
               
               <div>
                <img src={cart}/>
                <img src={cart}/>
               </div>
            </S.LogoArea>

            <S.NavArea>
                    <S.Nav>
                        <S.NavItem>HOME</S.NavItem>
                        <S.NavItem>CERÂMICAS</S.NavItem>
                        <S.NavItem>COLARES</S.NavItem>
                        <S.NavItem>PINTURAS</S.NavItem>
                        <S.NavItem>EXPOSITORES</S.NavItem>
                    </S.Nav>
            </S.NavArea>
        </S.Header>
    )
}

export default Header;