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

            <div>
                <nav>
                    <ul>
                        <li>HOME</li>
                        <li>CERÂMICAS</li>
                        <li>COLARES</li>
                        <li>PINTURAS</li>
                        <li>EXPOSITORES</li>
                    </ul>
                </nav>
            </div>
        </S.Header>
    )
}

export default Header;