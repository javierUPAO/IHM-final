import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import "../styles/style.css"

function Navb() {
  const navigate = useNavigate();

  const handleClick = (slug) => {
      navigate(slug);}
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        <Navbar.Brand href="/home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-6"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <img className='img-thumbnail p-0' src='https://i.imgur.com/CyaR5fL.png' onClick={() => {handleClick("/home");}} style={{width:'100px',height:'90px'}} ></img>
            <Nav.Link className='Centrar-Altura' href="/home"> <i data-feather = "home"></i> Inicio</Nav.Link>
            <NavDropdown className='Centrar-Altura' title="Productos" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="../productos/cortinas">  Cortinas </NavDropdown.Item>
              <NavDropdown.Item href="../productos/persianas">  Persianas </NavDropdown.Item>
              <NavDropdown.Item href="../productos/rollers"> Rollers </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='Centrar-Altura' href="#action5"><i data-feather = "map-pin"> </i>  Ubicanos </Nav.Link>
            <Nav.Link className='Centrar-Altura' href="#action6"> <i data-feather = "phone-call"> </i> Contactanos </Nav.Link>
            <Nav.Link className='Centrar-Altura'href="#action6"> <i data-feather = "users"> </i> Nosotros </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div>
                <i data-feather = "search"></i>
            </div>

            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;