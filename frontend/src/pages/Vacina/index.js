import React from 'react';
import { Link } from 'react-router-dom';

import vacImg from '../../assets/vacina.png';
import './styles.css';

export default function Vacina() {
    return (
    <div className="vacina-container">
        <header>
        <span>Cartão de Vacina</span>
        <Link className="button" to="/perfil">Voltar</Link>
        </header>
        <div className="content">
            <section>
                <img src={vacImg} alt="Cartão de Vacina" />

                <h1>Cartão de Vacinação!</h1>
                <p>Você pode deve adicionar uma foto do selo de vacinação tomada pelo pet para que seja válida em seu cartão de vacinação virtual.</p>
            </section>

            <form>
            <input placeholder="Descrição da Vacina"/>
            <input placeholder="Data da Aplicação"/>
            <textarea placeholder="Observações" />

            <button className="button" type="submit">Registrar Vacinação</button>

            </form>
      </div>
    </div>
    )
}

