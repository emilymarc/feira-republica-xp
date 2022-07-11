import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedBg from '../../components/DetailedBg';
import ProfileComponent from '../../components/ProfileComponent'

const Profile = () => {
  return ( 
    <>
        <Header></Header>
          <DetailedBg>
            <ProfileComponent/>
          </DetailedBg>
        <Footer></Footer>
    </>
  )
}

export default Profile;