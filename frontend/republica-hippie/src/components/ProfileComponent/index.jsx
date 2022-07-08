import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import foto from '../../assets/Rectangle 144.svg';

const ProfileComponent = () => {
    
    return(
        <div>
            <h1>MEU PERFIL</h1>
            <div>
                <div>
                    <span>Nome completo:</span>
                    <span>Email:</span>
                </div>

                <div>
                    <Link to="/editarperfil">Editar Perfil</Link>
                    <button>Sair</button>
                </div>

                <div>
                    <img src={foto} alt="Foto Perfil"/>
                </div>
            </div>
        </div>
    )
    
}

export default ProfileComponent;