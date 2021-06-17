import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/three.png';

export default function Cadastro() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(e) {
    e.preventDefault()

    const data = {
      name: [],
      email: [],
      password: []
    }

    const response = await api.post('register', user);
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Pet Plus" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e acesse todas as informações do seu Pet.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#d37a37" />
            Fazer logon
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input type="name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" required value={password} onChange={e => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirmar  Senha" required value={password} onChange={e => setPassword(e.target.value)} />

          <Link to="/cadastroadicional">
            <button className="button" type="submit">Prosseguir</button>
          </Link>
        </form>
      </div>
    </div>
  )
}