import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "../styles/style.css";
import { getCarrito, setCarrito } from "../store/local";
import { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function Navb() {
  // Inicializa el estado del carrito con los elementos almacenados en localStorage
  const [carrito, setCarritoState] = useState(getCarrito());

  // Sincroniza el estado del carrito con los cambios en localStorage cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setCarritoState(getCarrito());
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  // Función para eliminar un elemento del carrito por su ID
  const handleRemove = (id) => {
    const updatedCarrito = carrito.filter(item => item.id !== id);
    setCarrito(updatedCarrito);  // Actualiza el localStorage
    setCarritoState(updatedCarrito);  // Actualiza el estado local
  };

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
  const renderTooltipNosotros = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Nosotros
    </Tooltip>
  );
  const renderTooltipFaq = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Preguntas y respuestas
    </Tooltip>
  );
  const renderTooltipLista = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Lista de consulta
    </Tooltip>
  );

  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(slug);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary n-p">
        <Container className="bg-nav">
          <Navbar.Brand>
            <img alt='logo de gino' src='https://i.imgur.com/CyaR5fL.png' onClick={() => { handleClick("/home"); }} style={{ width: '100px', height: '90px' }}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <OverlayTrigger placement="right" delay={{ show: 5, hide: 5 }} overlay={renderTooltipInicio} >
                <Nav.Link href="/home" className="link">
                  <i data-feather="home"></i> Inicio
                </Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger placement="right" delay={{ show: 5, hide: 5 }} overlay={renderTooltipProductos} >
                <Nav.Link href="/productos" className="link">
                  <i data-feather="box"></i> Productos
                </Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger placement="right" delay={{ show: 5, hide: 5 }} overlay={renderTooltipNosotros} >
                <Nav.Link href="/nosotros" className="link">
                  <i data-feather="users"></i> Nosotros
                </Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger placement="right" delay={{ show: 5, hide: 5 }} overlay={renderTooltipFaq} >
                <Nav.Link href="/Faq" className="link">
                  <i data-feather="help-circle"></i> FAQ
                </Nav.Link>
              </OverlayTrigger>
            </Nav>
          </Navbar.Collapse>
          <Dropdown align="end">
            <OverlayTrigger placement="left" delay={{ show: 5, hide: 5 }} overlay={renderTooltipLista} >
              <Dropdown.Toggle id="dropdown-basic" className='btn btn-dark'>
                <i data-feather="clipboard"></i>
                <span className="badge rounded-pill btn-vino">
                  {carrito.length}
                </span>
              </Dropdown.Toggle>
            </OverlayTrigger>
            <Dropdown.Menu>
              {carrito.map((element, idx) => (
                <Dropdown.Item key={idx}>
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={element.url} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-4">
                        <div className="card-body">
                          <h5 className="card-title">{element.nombre}</h5>
                          <h5 className="card-title">{element.color}</h5>
                        </div>
                      </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                      <div className='btn btn-vino eliminar' onClick={() => handleRemove(element.id)}>
                        <p>Eliminar</p>
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>
              ))}

              <Dropdown.Item>
                <div className="card mb-3">
                  <Link className="btn btn-vino" to="/Consulta">Consultar productos</Link>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;
