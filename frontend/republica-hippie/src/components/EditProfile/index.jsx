import React from 'react'
import * as S from './styled'
import foto from '../../assets/Rectangle 144.svg';
import {Link} from 'react-router-dom';

const EditProfile= () => {
  return (
    <S.EditContainer>
      <S.TitleEdit>MEU PERFIL</S.TitleEdit> 
      
      <S.FormEdit>
        <S.InputContainer>
          <S.FormLabel>Nome Completo</S.FormLabel>
          <S.InputEdit
          type="text"/>
        </S.InputContainer>

        <S.InputContainer>
          <S.FormLabel>Email</S.FormLabel>
          <S.InputEdit
          type="email"/>
        </S.InputContainer>

        <S.InputContainer>
          <S.FormLabel>Senha</S.FormLabel>
          <S.InputEdit
          type="password"/>
        </S.InputContainer>

        <S.InputContainer>
          <S.FormLabel>Confirmar Senha</S.FormLabel>
          <S.InputEdit 
          type="password"/>
        </S.InputContainer>

        <S.LabelFile for="inputTag">Enviar Foto</S.LabelFile>
        <S.InputFile id='inputTag'
          type="file" accept="image/png, image/jpg, image/jpeg"/>

        <S.ButtonEdit type="submit">Confirmar</S.ButtonEdit>

      </S.FormEdit>
    </S.EditContainer>
  )
}

export default EditProfile;