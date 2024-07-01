import "../styles/style.css"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
function Footer ()
{    
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });};

    const renderTooltipArriba = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Volver arriba
        </Tooltip> 
      );
    
    return (
            <footer className="container-fluid text-center n-p">
              <div className="row bg-dark n-m text-white p-3">
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
                    <a className="text-decoration-none text-light" href="/Politicas">
                      Politicas y Privacidad
                    </a>
                  </div>
                  <div className="row">
                    <a className="text-decoration-none text-light" href="/terminos-y-condiciones">
                      Términos y Condiciones
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          );
        }
        
        export default Footer;