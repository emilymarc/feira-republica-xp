import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import * as S from './styled'
import { Link } from 'react-router-dom';
import Dropzone from '../Dropzone';
import { baseUrl } from '../../services/api';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfile= () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const accessToken = useSelector((state) => state.user.accessToken);
  const [selectedFile, setSelectedFile] = useState();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { name, email, password } = formData;

    const data = new FormData();

    if(name) {
      data.append('name', name);
    }
    if(email) {
      data.append('email', email);
    }
    if(password) {
      data.append('password', password);
    }
    if (selectedFile) {
      data.append('img', selectedFile);
    }

    baseUrl.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
    try{
      await baseUrl.patch(`/clients/${id}`, data);
      toast.success('Perfil atualizado com sucesso!');
      navigate(`/perfil/${id}`);
    } catch(error) {
      toast.error(`Algo deu errado ao tentar atualizar. Verifique as informações e tente novamente`);
    }
  
  }

  return (
    <S.EditContainer>

      <S.FormEdit onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.FormLabel>Nome Completo:</S.FormLabel>
          <S.InputEdit
          type="text"
          name="name"
          id="name"
          onChange={handleInputChange}
          />
          
        </S.InputContainer>

        <S.InputContainer>
          <S.FormLabel>Email:</S.FormLabel>
          <S.InputEdit
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.FormLabel>Senha:</S.FormLabel>
          <S.InputEdit
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.FormLabel>Confirmar Senha:</S.FormLabel>
          <S.InputEdit 
          type="password"/>
        </S.InputContainer>

        <Dropzone onFileUploaded={setSelectedFile}/>
        <small style={{textAlign: 'center', marginBottom: '20px'}}>* De preferência, insira uma imagem em modo paisagem</small>
        <S.ButtonEdit type="submit">Confirmar</S.ButtonEdit>
      </S.FormEdit>

    </S.EditContainer>
  )
}

export default EditProfile;