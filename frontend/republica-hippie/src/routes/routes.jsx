import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Ceramica from '../pages/Ceramica';
import Home from '../pages/Home';
import Colares from '../pages/Colares';
import Pinturas from '../pages/Pinturas';
import Artesaos from '../pages/Artesaos';

const AppRoutes = () => {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ceramica" element={<Ceramica />} />
                        <Route path="/colares" element={<Colares />}/>
                        <Route path="/pinturas" element={<Pinturas />}/>
                        <Route path="/artesaos" element={<Artesaos />}/>
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;