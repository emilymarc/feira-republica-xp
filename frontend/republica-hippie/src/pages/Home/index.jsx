import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailedBg from "../../components/DetailedBg";
import * as S from "./styled";
import home_photo1 from "../../assets/home/home_photo1.png";
import home_photo2 from "../../assets/home/home_photo2.png";
import home_photo3 from "../../assets/home/home_photo3.png";
import sobre_photo from "../../assets/home/sobre_photo.png";
import IconLikeBlank from "../../assets/IconLikeBlank.svg";
import pinturas_icon from "../../assets/pinturas/pinturas_icon.svg";
import expositores from "../../assets/expositores.svg";

const Home = () => {
  return (
    <>
      <Header></Header>
      <DetailedBg>
        <S.BgContainer>
          <S.GradientContainer>
            <S.HomeTitle>A TRADICIONAL FEIRA DE SÃO PAULO TAMBÉM ESTÁ ONLINE!</S.HomeTitle>
          </S.GradientContainer>
        </S.BgContainer>

        <S.PresentationContainer>
          <S.PresentationItem>
            <S.HomePhoto src={home_photo1} alt="Feito com amor"></S.HomePhoto>
            <S.MobilePhoto src={IconLikeBlank} alt="Feito com amor"></S.MobilePhoto>
            <S.SubTitle>FEITO COM AMOR</S.SubTitle>
            <S.PresentationText>Os criadores realizam suas explêndidas criações com muito amor, sempre atentos aos detalhes de suas peças, usando técnicas tradicionais para a criação!</S.PresentationText>
          </S.PresentationItem>
          <S.PresentationItem>
            <S.HomePhoto src={home_photo2} alt="Diversas técnicas"></S.HomePhoto>
            <S.MobilePhoto src={pinturas_icon} alt="Feito com amor"></S.MobilePhoto>
            <S.SubTitle>DIVERSAS TÉCNICAS</S.SubTitle>
            <S.PresentationText>Diferentes técnicas de criação estão aqui, seja modelagem, trançado, crochê... Você vai encontrar varias técnicas e até uma breve história de como foram produzidas!</S.PresentationText>
          </S.PresentationItem>
          <S.PresentationItem>
            <S.HomePhoto src={home_photo3} alt="Venha nos visitar"></S.HomePhoto>
            <S.MobilePhoto src={expositores} alt="Feito com amor"></S.MobilePhoto>
            <S.SubTitle>VENHA NOS VISITAR!</S.SubTitle>
            <S.PresentationText>Na loja online você encontra bastante coisas, mas venha também nos conhecer pessoalmete aos finais de semana! É um local cheio de energia e comida, e mais coisas ainda para ver! </S.PresentationText>
          </S.PresentationItem>
        </S.PresentationContainer>

        <S.SobreContainer>
          <S.SobreContent>
            <S.SubTitle>SOBRE A FEIRA DA PRAÇA DA REPÚBLICA</S.SubTitle>
            <S.SobreText>
              <p>Aos domingos, desde 1956, acontece a popular Feira da Praça da República, voltada principalmente para as artes, que começou como uma pequena feira de selos e hoje conta com várias barracas e dos mais diversos produtos, incluindo artesanato vindo do Norte e Nordeste do Brasil e de países vizinhos, como o Peru, artigos de decoração, esculturas, roupas, brinquedos, bijuterias.</p> 
              <p>É possível encontrar também sabonetes, bolsas e artigos em prata. A maioria dos artigos é vendida pelos próprios produtores, proporcionando um contato direto entre os artistas e o público em geral, que pode comprar os produtos por preço mais barato</p>
            </S.SobreText> 
          </S.SobreContent>
          <S.SobreImgContainer>
            <img src={sobre_photo} alt="Sobre a Feira da Praça da República"></img>
          </S.SobreImgContainer>      
        </S.SobreContainer>
      </DetailedBg>
      <Footer></Footer>
    </>
  );
};

export default Home;
