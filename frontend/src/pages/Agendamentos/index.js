import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Agendamentos() {
    return (
        <div className="agendamentos-container">
      <header>
            <span>Agendamentos</span>
        <Link className="button" to="/perfil">Voltar</Link>
      </header>
      </div>
    )
}
