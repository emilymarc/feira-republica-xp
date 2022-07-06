import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Ceramica from '../pages/Ceramica';
import Home from '../pages/Home';
import Colares from '../pages/Colares';
import Pinturas from '../pages/Pinturas';
import Expositores from '../pages/Expositores';
import Profile from '../pages/Profile';
import Product from '../pages/Product';
import Carrinho from '../pages/Carrinho';
import Login from '../pages/Login';
import Registration from '../pages/Registration'

const AppRoutes = () => {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ceramicas" element={<Ceramica />} />
                        <Route path="/colares" element={<Colares />}/>
                        <Route path="/pinturas" element={<Pinturas />}/>
                        <Route path="/expositores" element={<Expositores />}/>
                        <Route path="/profile" element={<Profile />}/>
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/carrinho' element={<Carrinho />} />
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/singup' element={<Registration/>}/>
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;