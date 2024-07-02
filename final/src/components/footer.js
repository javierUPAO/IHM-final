import React, { useState, useEffect } from 'react';
import "../styles/style.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

function Footer() {    
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderTooltipArriba = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Volver arriba
    </Tooltip> 
  );

  useEffect(() => {
    const currentTheme = document.body.dataset.bsTheme;
    setIsDarkMode(currentTheme === 'dark');

    const handleThemeChange = () => {
      const newTheme = document.body.dataset.bsTheme;
      setIsDarkMode(newTheme === 'dark');
    };

    window.addEventListener('themechange', handleThemeChange);

    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);
    
  return (
    <footer className={`container-fluid text-center n-p ${isDarkMode ? 'bg-light-footer-dark-mode' : 'bg-dark'}`}>
      <div className="row n-m p-3">
        <div className="col-md-3 inicio">
          <div className="row">
            <p>@IHM - 2024 all rights reserved</p>
          </div>
          <div className="row">
            <OverlayTrigger
              placement="right"
              delay={{ show: 5, hide: 50 }}
              overlay={renderTooltipArriba}
            >
              <Button variant="dark" onClick={scrollToTop}>
                <i data-feather="chevron-up"></i>
              </Button>
            </OverlayTrigger>
          </div>
        </div>
        <div className="col-md-6 inicio">
          <div className="row">
            <p>Decoraciones Textiles Gino's</p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <i data-feather="facebook"></i>
              </a>
            </div>
            <div className="col-md-2">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i data-feather="instagram"></i>
              </a>
            </div>
            <div className="col-md-2">
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <i data-feather="twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 inicio">
          <div className="row">
            <a className={`text-decoration-none ${isDarkMode ? 'text-dark' : 'text-light'}`} href="/Politicas">
              Politicas y Privacidad
            </a>
          </div>
          <div className="row">
            <a className={`text-decoration-none ${isDarkMode ? 'text-dark' : 'text-light'}`} href="/terminos-y-condiciones">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;