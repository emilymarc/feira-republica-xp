import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/Icon.svg';
import cart from '../../assets/shopping-cart.svg';
import profile from '../../assets/profile.svg';
import iconExpositores from '../../assets/IconExpositores.svg';
import * as S from './styled';

const Header = () => {

    return (
        <S.Header>
            <S.LogoArea>
                <S.Logo src={logo} alt="Republica Hippie"/>
                
                <S.SearchContainer>
                    <S.Search type='search'></S.Search>
                    <img src={search}/>
                </S.SearchContainer>
               
               <S.Menu>
                    <S.Icon src={cart}/>
                    <S.Icon src={profile}/>
               </S.Menu>

            </S.LogoArea>

            <S.NavArea>
                    <S.Nav>
                        <S.NavItem>HOME</S.NavItem>
                        <S.NavItem>CERÂMICAS</S.NavItem>
                        <S.NavItem>COLARES</S.NavItem>
                        <S.NavItem>PINTURAS</S.NavItem>
                        <S.ContainerExpositores>
                            <img src={iconExpositores} alt='Icon Expositores'></img>
                            <S.NavItem>EXPOSITORES</S.NavItem>
                        </S.ContainerExpositores>
                        
                    </S.Nav>
            </S.NavArea>
        </S.Header>
    )
}

export default Header;