import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import foto from '../../assets/Rectangle 144.svg';
import * as S from './styled';
import { signOut } from '../../redux/feature/userSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const ProfileComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(signOut());
        navigate('/');
        toast("Usuário deslogado!")
    }
    return(
        <S.Container>
            <S.TitleProfile>MEU PERFIL</S.TitleProfile>
            <S.InfoContainer>
                <S.InfoProfile>
                    <S.InfoItem>Nome completo:</S.InfoItem>
                    <S.InfoItem>Email:</S.InfoItem>
                    <S.EditLink to="/editarperfil">Editar Perfil</S.EditLink>
                </S.InfoProfile>

                <S.InfoItem2>
                    <S.LongOutButton onClick={handleSignOut}>Sair</S.LongOutButton>      
                </S.InfoItem2>

                <S.FotoContainer>
                    <S.Foto src={foto} alt="Foto Perfil"/>
                </S.FotoContainer>

            </S.InfoContainer>
        </S.Container>
    )
    
}

export default ProfileComponent;