import React, { useState } from 'react';
import logo from '../../assets/logofooter.png';
import icon from '../../assets/Icon.svg'
import * as S from './styled';

const Footer = () => {
    return (
        <S.Footer>
            <div>
                <img src={logo} alt="Republica Hippie"/>
                <p>Redes Socias</p>
                <img src={icon}/>
                <img src={icon}/>
                <img src={icon}/>
            </div>

            <div>
                <h4>Venha nos conhecer pessoalmente!</h4>

                <p>
                    Endereço<br/>  
                    Praça da República, s/n<br/>
                    Centro – São Paulo/SP<br/>
                    Sábados e Domingos: 09:00h às 18:00h<br/>
                </p>
            </div>

            <div>
                <h4>Contato</h4>
                <img src={icon}/>
                <img src={icon}/>
                <p>
                    Email<br/>
                    contato@feirapracadarepublica.com.br</p>
            </div>
        </S.Footer>
    )

}

export default Footer;