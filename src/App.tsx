import React from 'react';
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom'
import { Home } from './componentes/Home';
import { Missao } from './componentes/Missao';
import { Produtos } from './componentes/Produtos';


function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/missao' element={<Missao/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/matinais' element={<Produtos/>}/>
        <Route path='/batidos' element={<Produtos/>}/>
        <Route path='/detox' element={<Produtos/>}/>
        <Route path='/milkshakes' element={<Produtos/>}/>
        <Route path='/cha-gelado' element={<Produtos/>}/>
      </Routes>
    </Router>
  );
}

export default App;
