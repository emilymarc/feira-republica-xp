import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedBg from '../../components/DetailedBg';
import EditProfile from '../../components/EditProfile'

const Edit = () => {
  return ( 
    <>
        <Header></Header>
          <DetailedBg>
            <EditProfile/>
          </DetailedBg>
        <Footer></Footer>
    </>
  )
}

export default Edit;