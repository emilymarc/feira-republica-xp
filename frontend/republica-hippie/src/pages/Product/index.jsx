import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedBg from '../../components/DetailedBg';
import SingleProduct from '../../components/SingleProduct';
const Product = () => {
  return ( 
    <>
        <Header></Header>
          <DetailedBg>
            <SingleProduct></SingleProduct>
          </DetailedBg>
        <Footer></Footer>
    </>
  )
}

export default Product;