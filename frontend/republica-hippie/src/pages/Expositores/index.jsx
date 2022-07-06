import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedBg from '../../components/DetailedBg';
import PageIntro from '../../components/PageIntro';
import Expositores from '../../components/ExpositoresList'
import icon from '../../assets/expositores.svg';
import * as S from './styled';

const Artesaos = () => {
  return ( 
    <>
        <Header></Header>
          <DetailedBg>
            <S.ExpositoresContainer>
              <PageIntro 
              titleIcon={icon}
              title="EXPOSITORES"
              introContent="Pessoas de várias origens, vários gêneros e várias técnicas estão reunidas aqui! Conheça um pouco sobre nossos expositores, suas técnicas e suas artes, e se encante com a grande variedade de histórias que há nessas incríveis pessoas! E não perca a oportunidade de dizer oi para elas quando visitar a nossa feira"/>
              <Expositores/>
            </S.ExpositoresContainer>
            
          </DetailedBg>
        <Footer></Footer>
    </>
  )
}

export default Artesaos;