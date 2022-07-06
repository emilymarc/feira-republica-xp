import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedBg from "../../components/DetailedBg";
import ExpositorComponent from '../../components/ExpositorComponent';

const Registration = () => {
    return (
      <>
        <Header/>
          <DetailedBg>
            <ExpositorComponent/>
          </DetailedBg>
        <Footer/>
      </>
    );
  }
  
  export default Registration;