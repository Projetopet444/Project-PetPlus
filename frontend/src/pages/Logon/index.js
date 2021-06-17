import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logologin.png';
import petsImg from '../../assets/two.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Pet Plus" />

        <form>
          <h1>Faça seu Logon</h1>

          <input placeholder="Seu Email" />
          <input type="password" placeholder="Sua Senha" />
          <Link to="/perfil">
          <button className="button" type="submit">Entrar</button>
          </Link>
          <Link className="back-link" to="/cadastro">
            <FiLogIn size={16} color="#d37a37" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={petsImg} alt="Pets" />
    </div>
  )
}