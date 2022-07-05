import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Ceramica from '../pages/Ceramica';
import Home from '../pages/Home';
import Colares from '../pages/Colares';
import Pinturas from '../pages/Pinturas';
import Artesaos from '../pages/Artesaos';
import Profile from '../pages/Profile';
import Product from '../pages/Product';
import Carrinho from '../pages/Carrinho';

const AppRoutes = () => {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ceramicas" element={<Ceramica />} />
                        <Route path="/colares" element={<Colares />}/>
                        <Route path="/pinturas" element={<Pinturas />}/>
                        <Route path="/expositores" element={<Artesaos />}/>
                        <Route path="/profile" element={<Profile />}/>
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/carrinho' element={<Carrinho />} />
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;