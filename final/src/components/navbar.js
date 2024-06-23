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
    <Navbar expand="lg" className="bg-body-tertiary n-p">
      <Container className="bg-nav w-100">
        <Navbar.Brand href="/home">
        <p onClick={() => {handleClick("/home");}}>Gino's</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/productos" className="link">Productos</Nav.Link>
            <Nav.Link href="/nosotros" className="link"><p>Nosotros</p></Nav.Link>                    
            <Nav.Link href="#link" className="link"><p>FAQ</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
