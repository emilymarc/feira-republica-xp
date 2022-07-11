import React, { useState } from 'react';
import logo from '../../assets/logofooter.png';
import iconFacebook from '../../assets/IconFacebook.svg';
import iconInstagram from '../../assets/IconInstagram.svg';
import iconYouTube from '../../assets/IconYoutube.svg';
import iconWhatsapp from '../../assets/IconWhatsapp.svg';
import iconMail from '../../assets/IconMail.svg';

import * as S from './styled';


const Footer = () => {
    return (
        <S.Footer>
            <S.Social>
                <img src={logo} alt="Republica Hippie"/>

                <S.SocialTitle>Redes Sociais</S.SocialTitle>

                <S.SocialIcons>
                    <S.Icon href='https://www.facebook.com/' target='_blank'><img src={iconFacebook} alt='Facebook'/></S.Icon>
                    <S.Icon href='https://www.instagram.com/' target='_blank'><img src={iconInstagram} alt='Instagram'/></S.Icon>
                    <S.Icon href='https://www.youtube.com/' target='_blank'><img src={iconYouTube} alt='Youtube'/></S.Icon>
                </S.SocialIcons>
            </S.Social>

            <S.Address>
                <S.AddressTitle>Venha nos conhecer pessoalmente!</S.AddressTitle>

                <S.Content>
                    Endereço<br/>  
                    Praça da República, s/n<br/>
                    Centro – São Paulo/SP<br/>
                    Sábados e Domingos: 09:00h às 18:00h<br/>
                </S.Content>
            </S.Address>

            <S.Contact>
                <S.ContactTitle>Contato</S.ContactTitle>

                <S.ContactSocialIcons>
                    <S.Icon href='https://www.whatsapp.com/?lang=pt_br' target='_blank'><img src={iconWhatsapp} alt='WhatsApp'/></S.Icon>
                    <S.Icon href='https://accounts.google.com/signin' target='_blank'><img src={iconMail} alt='Email'/></S.Icon>
                </S.ContactSocialIcons>

                <S.Content>
                    Email<br/>
                    contato@feirapracadarepublica.com.br
                </S.Content>
            </S.Contact>
        </S.Footer>
    )

}

export default Footer;