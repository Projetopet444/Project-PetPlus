import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';


import './styles.css';

import logoImg from '../../assets/logologin.png';

export default function Perfil() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Pet Plus" />
            <span>Bem vindo, Usuário.</span>
        <Link className="button" to="/agendamentos">Agendamentos</Link>
        <Link className="button" to="cartaodevacina"> Cartão de Vacina</Link>
        <Link className="button" to="/pets/novo">Cadastrar seu pet</Link>
        <button type="button">
          <Link to ="/"><FiPower size={18} color="#d37a37"></FiPower></Link>
        </button>
      </header>

      <h1>Pets Cadastrados</h1>

      <ul>
        <li>
          <strong>Nome: </strong>
          <p>Nome teste</p>

          <strong>Idade: </strong>
          <p>XX</p>

          <strong>Raça: </strong>
          <p>Raça Teste</p>

        </li>

        <li>
          <strong>Nome: </strong>
          <p>Nome teste</p>

          <strong>Idade: </strong>
          <p>XX</p>

          <strong>Raça: </strong>
          <p>Raça Teste</p>

        </li>

        <li>
          <strong>Nome: </strong>
          <p>Nome teste</p>

          <strong>Idade: </strong>
          <p>XX</p>

          <strong>Raça: </strong>
          <p>Raça Teste</p>

        </li>

        <li>
          <strong>Nome: </strong>
          <p>Nome teste</p>

          <strong>Idade: </strong>
          <p>XX</p>

          <strong>Raça: </strong>
          <p>Raça Teste</p>

        </li>
      </ul>

      
    </div>
  );
}