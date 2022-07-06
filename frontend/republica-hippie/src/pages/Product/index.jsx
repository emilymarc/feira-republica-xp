import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedBg from '../../components/DetailedBg';
import SingleProduct from '../../components/SingleProduct';
import { SliderData } from '../../components/SingleProduct/SliderData';

const Product = () => {
  return ( 
    <>
        <Header></Header>
          <DetailedBg>
            <SingleProduct slides={SliderData}></SingleProduct>
          </DetailedBg>
        <Footer></Footer>
    </>
  )
}

export default Product;