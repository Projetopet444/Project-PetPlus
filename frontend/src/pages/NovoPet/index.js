import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/pets.png';

export default function NovoPet(){
    return (
    <div className="novo-pet-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Pet Plus" />

          <h1>Cadastro de Pet</h1>
          <p>Informe os campos obrigatórios para prosseguir com o cadastro do seu Pet.</p>
          
        </section>
             <form>
                    <input placeholder="Nome do Pet"/>
                    <div className="input-group">
                        <input placeholder="Peso | Ex: X,X" />
                        <input placeholder="Tamanho | Ex: X,XX" style={{ width: 220 }} />
                    </div>
                    <input placeholder="Data de nascimento | Ex: dd/mm/aa"/>
                    <div className="input-group">
                        <input placeholder="Cor" />
                        <input placeholder="Raça" style={{ width: 220 }} />
                    </div>
                    <Link to="/fotopet">
                    <button className="button" type="submit">Continuar</button>
                    </Link>
            </form>
      </div>
    </div>
    )
}