import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Cadastro from './pages/Cadastro';
import CadastroAdicional from './pages/CadastroAdicional';
import Perfil from './pages/Perfil';
import NovoPet from './pages/NovoPet';
import FotoPet from './pages/FotoPet';
import Agendamentos from './pages/Agendamentos';
import Vacina from './pages/Vacina';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/cadastroadicional" component={CadastroAdicional} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/agendamentos" component={Agendamentos} />
        <Route path="/pets/novo" component={NovoPet} />
        <Route path="/fotopet" component={FotoPet} />
        <Route path="/cartaodevacina" component={Vacina} />
      </Switch>
    </BrowserRouter>
  )
}