import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import foto from '../../assets/no_profile.svg';
import * as S from './styled';
import { baseUrl, getClientById } from '../../services/api';
import { signOut } from '../../redux/feature/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const ProfileComponent = () => {
    const { id } = useParams();
    const [client, setClient] = useState({});
    const accessToken = useSelector((state) => state.user.accessToken);
    useEffect (() => {
        const loadClient = async () => {
            try {
                baseUrl.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
                const response = await getClientById(id);
                setClient(response.data);
            } catch (error) {
                toast.error(error);
            }
        }
        loadClient();
    }, [setClient]);

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
                    <S.InfoItem>Nome completo: <span style={{fontSize: '18px', fontWeight:'300'}}>{client.name}</span></S.InfoItem>
                    <S.InfoItem>Email: <span style={{fontSize: '18px', fontWeight:'300'}}>{client.email}</span></S.InfoItem>
                    <S.EditLink to={`/editarperfil/${id}`}>Editar Perfil</S.EditLink>
                </S.InfoProfile>

                <S.FotoContainer>
                    {client.img ? <S.Foto src={foto} alt="Foto Perfil"/> : <S.Foto src={foto} alt="Foto Perfil"/>}
                </S.FotoContainer>
            </S.InfoContainer>
            <S.InfoItem2>
                <S.LogOutButton onClick={handleSignOut}>Sair</S.LogOutButton>      
            </S.InfoItem2>
        </S.Container>
    )
    
}

export default ProfileComponent;