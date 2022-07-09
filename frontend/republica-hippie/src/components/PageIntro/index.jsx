import React from "react";
import * as S from "./styled";

const PageIntro = (props) => {
  return (
    <>
      <S.IntroSection>
        <S.TitleContainer>
          <S.IntroIcon src={props.titleIcon} alt='Icon' />
          <S.Title>{props.title}</S.Title>
          <S.IntroIcon src={props.titleIcon} alt='Icon' />
        </S.TitleContainer>
          
        <S.TitleContent>{props.introContent}</S.TitleContent>
      </S.IntroSection>
    </>
  );
}

export default PageIntro;