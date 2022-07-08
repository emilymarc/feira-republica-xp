import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import foto from '../../assets/Rectangle 144.svg';
import * as S from './styled';

const ProfileComponent = () => {
    
    return(
        <S.Container>
            <S.TitleProfile>MEU PERFIL</S.TitleProfile>
            <S.InfoContainer>
                <S.InfoProfile>
                    <S.InfoItem>Nome completo:</S.InfoItem>
                    <S.InfoItem>Email:</S.InfoItem>
                </S.InfoProfile>

                <S.InfoItem2>
                    <S.EditLink to="/editarperfil">Editar Perfil</S.EditLink>
                    <S.LongOutButton>Sair</S.LongOutButton>
                </S.InfoItem2>

                <div>
                    <img src={foto} alt="Foto Perfil"/>
                </div>
            </S.InfoContainer>
        </S.Container>
    )
    
}

export default ProfileComponent;