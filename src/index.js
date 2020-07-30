import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'

import Home from './components/pages/Home'
import CadastroVideo from './components/pages/cadastro/Video'
import CadastroCategoria from './components/pages/cadastro/Categoria'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route component={ () => <div> Erro 404</div> } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);