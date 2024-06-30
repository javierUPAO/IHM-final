import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "../styles/style.css"
import { getCarrito } from "../store/local";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function Navb() {
  const [carrito, setCarrito] = useState([])

  setInterval(() => {
      setCarrito(getCarrito())
  }, 1000);

  const renderTooltipProductos = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Productos
    </Tooltip> 
  );
  const renderTooltipInicio = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Inicio
    </Tooltip> 
  );
  const renderTooltipNosotros = (Nosotros) => (
    <Tooltip id="button-tooltip" {...Nosotros}>
      Nosotros
    </Tooltip>
  );
  const renderTooltipFaq = (faq) => (
    <Tooltip id="button-tooltip" {...faq}>
      Preguntas y respuestas
    </Tooltip>
  );
  const renderTooltipLista = (lista) => (
    <Tooltip id="button-tooltip" {...lista}>
      Lista de consulta
    </Tooltip>
  );
  
  const navigate = useNavigate();

  const handleClick = (slug) => {
      navigate(slug);}
      
  return (
    <div>

    <Navbar expand="lg" className="bg-body-tertiary n-p">
      <Container className="bg-nav">

        <Navbar.Brand>
        <img alt='logo de gino' src='https://i.imgur.com/CyaR5fL.png' onClick={() => {handleClick("/home");}} style={{width:'100px',height:'90px'}} ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
           <OverlayTrigger placement="right" delay={{ show: 5, hide: 5 }} overlay={renderTooltipInicio} >  
              <Nav.Link href="/home" className="link"> 
                <i data-feather = "home"></i> Inicio
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement="right" delay={{ show: 5, hide: 5 }} overlay={renderTooltipProductos} >  
              <Nav.Link href="/productos" className="link"> 
                <i data-feather = "box"></i> Productos
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement="right" delay={{ show: 5, hide: 5 }} overlay={renderTooltipNosotros} >  
              <Nav.Link href="/nosotros" className="link">
                <i data-feather = "users"></i> Nosotros
              </Nav.Link>  
            </OverlayTrigger>
            <OverlayTrigger placement="right" delay={{ show: 5, hide: 5 }} overlay={renderTooltipFaq} >  
              <Nav.Link href="/Faq" className="link">
                <i data-feather = "help-circle"></i> FAQ
              </Nav.Link>
            </OverlayTrigger> 
          </Nav>
          <Dropdown align="end">
          <OverlayTrigger placement="left" delay={{ show: 5, hide: 5 }} overlay={ renderTooltipLista} >  
                    <Dropdown.Toggle id="dropdown-basic" className='btn btn-dark'>
                        <i data-feather = "clipboard"></i>
                        <span className="badge rounded-pill btn-vino">
                            {carrito.length}
                        </span>
                    
                    </Dropdown.Toggle>
          </OverlayTrigger>
                    <Dropdown.Menu>
                        {carrito.map((element, idx) => {
                            return <Dropdown.Item key={idx}>
                                <div class="card mb-3">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={element.url} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card-body">
                                                <h5 class="card-title">{element.nombre}</h5>
                                                <h5 class="card-title">{element.color}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dropdown.Item>
                        })}

                        <Dropdown.Item>
                            <div class="card mb-3">
                                <Link className="btn btn-vino" to="/Consulta">Consultar productos</Link>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
      </Dropdown>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </div>
  );
}

export default Navb;
