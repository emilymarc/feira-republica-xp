import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Ceramica from '../pages/Ceramica';
import Home from '../pages/Home';
import Colares from '../pages/Colares';
import Pinturas from '../pages/Pinturas';
import Expositores from '../pages/Expositores';
import Expositor from '../pages/Expositor';
import Profile from '../pages/Profile';
import Product from '../pages/Product';
import Carrinho from '../pages/Carrinho';
import Login from '../pages/Login';
import Registration from '../pages/Registration'
import Address from '../pages/Address';
import Pagamento from '../pages/Pagamento';
import Edit from '../pages/EditProfile';
import RequireAuth from "./RequiredAuth";
import Search from '../pages/Search';

const AppRoutes = () => {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/ceramicas' element={<Ceramica />} />
                        <Route path='/colares' element={<Colares />}/>
                        <Route path='/pinturas' element={<Pinturas />}/>
                        <Route path='/expositores' element={<Expositores />}/>
                        <Route path='/expositor/:id' element={<Expositor />}/> {/* :id do expositor */}
                        <Route path='/perfil/:id' element={<RequireAuth><Profile /></RequireAuth>}/>
                        <Route path='/product/:id' element={<Product />} /> {/* :id do produto */}
                        <Route path='/carrinho' element={<Carrinho />} />
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/signup' element={<Registration/>}/>
                        <Route path='/endereco/:id' element={<RequireAuth><Address/></RequireAuth>}/> {/* :id do cliente */}
                        <Route path='/checkout/:idClient/:idOrder' element={<RequireAuth><Pagamento/></RequireAuth>}/> {/* :id do cliente */}
                        <Route path='/editarperfil/:id' element={<Edit/>}/>
                        <Route path='/search/:term' element={<Search/>}/>
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;