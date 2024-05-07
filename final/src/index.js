import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home';
import Ubicacion from './views/ubicanos';
import Nosotros from './views/nosotros';
import Navb from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Productos from './views/productos';
import Footer from './components/footer';
import Terminos from './components/terminos-y-condiciones';
const root = ReactDOM.createRoot(document.getElementById('root'));
const feather = require('feather-icons');
setTimeout( () => {
    feather.replace(); 
},500);

root.render(
  <React.StrictMode>
    <Router>
        <Navb/>
        <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/terminos-y-condiciones' element={<Terminos/>}/>
            <Route path='/ubicanos' element={<Ubicacion/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
        </Routes>
        <Footer/>
    </Router>
  </React.StrictMode>
);

