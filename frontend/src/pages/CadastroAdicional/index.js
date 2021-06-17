import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/one.png';

export default function CadastroAdicional() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="CadastroAdicional"/>

                    <h1>Informações adicionais</h1>
                    <p>Preencha as informações adicinais para que possamos concluir o seu cadastro.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#d37a37" />
                        Fazer logon
                    </Link>
                </section>

                <form>
                    <input placeholder="Nº Telefone | Ex: (00) 0000-0000"/>
                    <input placeholder="Data de nascimento | Ex: dd/mm/aa"/>
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Finalizar Cadastro</button>
                </form>
            </div>
        </div>
    )
    
}

