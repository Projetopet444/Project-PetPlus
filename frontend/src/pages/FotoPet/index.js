import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import petsImg from '../../assets/fotopet.png';
import recImg from '../../assets/retangule.png';
export default function FotoPet(){
    return (
        <div className="foto-pet-container">
          <div className="content">
            <section>
              <img src={petsImg} alt="Pet Plus" />
    
              <h2>Adicione uma foto do seu Pet!</h2>
              <p>Você pode adicionar ou não uma foto do pet a ser cadastrado para prosseguir com a finalização do cadastro.</p>
              
            <Link className="back-link" to="/perfil">
            <FiArrowLeft size={16} color="#d37a37" />
                Voltar para Pets
            </Link>
            </section>
                <img src={recImg} alt="Demonstração" />
          </div>
        </div>
    )
}