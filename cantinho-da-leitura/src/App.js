import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Porque from './pages/Porque';
import Melhores from './pages/Melhores';
import Autores from './pages/Autores';
import Dica from './pages/Dica';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/por-que-ler' component={Porque}/>
        <Route path='/melhores-da-semana' component={Melhores}/>
        <Route path='/busca-autores' component={Autores}/>
        <Route path='/dica-especial' component={Dica}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
