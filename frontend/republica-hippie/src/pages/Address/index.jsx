import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedBg from '../../components/DetailedBg';
import AddressComponent from '../../components/AddressComponent';

const Address = () => {
    return (
        <>
            <Header/>
                <DetailedBg>
                    <AddressComponent/>
                </DetailedBg>
            <Footer/>
        </>
    )
}

export default Address;