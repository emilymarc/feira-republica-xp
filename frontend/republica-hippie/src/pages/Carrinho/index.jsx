import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedBg from '../../components/DetailedBg';
import CarrinhoComponent from '../../components/CarrinhoComponent';

const Carrinho = () => {
  return ( 
    <>
        <Header></Header>
          <DetailedBg>
            <CarrinhoComponent></CarrinhoComponent>
          </DetailedBg>
        <Footer></Footer>
    </>
  )
}

export default Carrinho;