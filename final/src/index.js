import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home';
import Nosotros from './views/nosotros';
import Contactanos from './views/contactanos';
import Navb from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import './styles/fontello.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Productos from './views/productos';
import Footer from './components/footer';
import Terminos from './components/terminos-y-condiciones';
import Politicas from './components/politicas';
import Wasap from './components/wasapbutton';
/* Importamos el faq.js */
import FAQ from './views/faq';
import Consulta from './views/Consulta';

const root = ReactDOM.createRoot(document.getElementById('root'));
const feather = require('feather-icons');
setTimeout( () => {
    feather.replace(); 
},500);

root.render(
  <React.StrictMode>
    <Router>
        <Navb/>
        <Wasap/>
        <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/terminos-y-condiciones' element={<Terminos/>}/>
            <Route path='/Politicas' element={<Politicas/>}/>      
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contactanos' element={<Contactanos/>}/>
            <Route path='/Faq' element={<FAQ/>}/>
            <Route path='/Consulta' element={<Consulta/>}/>
        </Routes>
        <Footer/>
    </Router>
  </React.StrictMode>
);

