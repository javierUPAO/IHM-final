import { useState, useEffect } from 'react';
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
import FAQ from './views/faq';
import Loading from './components/loading'
import Consulta from './views/Consulta';

const App = () => {

  const feather = require('feather-icons');
setTimeout( () => {
    feather.replace(); 
},500);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

const handleLoadingClick = () => {
  setLoading(false);
};

if (loading) {
  return <Loading onClick={handleLoadingClick} />;
}
  return (
    <Router>
      <div id="root">
        <Navb />
        <Wasap />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/terminos-y-condiciones" element={<Terminos />} />
            <Route path="/Politicas" element={<Politicas />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/Faq" element={<FAQ />} />
            <Route path="/Consulta" element={<Consulta />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);