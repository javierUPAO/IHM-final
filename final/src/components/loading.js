import { useState, useEffect } from 'react';
import React from 'react';
import '../styles/loading.css';
import Spinner from 'react-bootstrap/Spinner';
const Loading = ({ onClick }) => {
    const [closing, setClosing] = useState(false);
    const [closed, setClosed] = useState(false);
    const [colorClass, setColorClass] = useState('color1');
  
    const handleClick = () => {
      if (!closing) {
        setClosing(true);
        setTimeout(() => {
          setClosed(true);
          setTimeout(onClick, 2000); // Llama a onClick después de que las cortinas se abran
          console.log("funciona");
        }, 1000); // Duración de la animación de cierre
      }
    };
  
    useEffect(() => {
      const colorClasses = ['color1', 'color2', 'color3'];
      let index = 0;
      const interval = setInterval(() => {
        index = (index + 1) % colorClasses.length;
        setColorClass(colorClasses[index]);
      }, 1000); // Cambia de color cada 1 segundo
  
      return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
    }, []);
  
    return (
      <div className={`loading ${closed ? 'closed' : ''}`} onClick={handleClick}>
        <div className="curtain curtain-left"></div>
        <div className="curtain curtain-right"></div>
        <div className={`loading-content ${colorClass}`}>
          <div className='row'>  
            <div className='col'>
              <Spinner animation="border" variant="danger" />
            </div>
            <div className='col'>
              <p>Cargando...</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Loading;