import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import "../styles/style.css"

function Navb() {
  const navigate = useNavigate();

  const handleClick = (slug) => {
      navigate(slug);}
      
  return (
    <Navbar expand="lg" className="bg-body-tertiary n-p">
      <Container className="bg-nav">
        <Navbar.Brand>
        <img alt='logo de gino' src='https://i.imgur.com/CyaR5fL.png' onClick={() => {handleClick("/home");}} style={{width:'100px',height:'90px'}} ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/productos" className="link"> <i data-feather = "home"></i> Productos</Nav.Link>
            <Nav.Link href="/nosotros" className="link"><i data-feather = "users"></i> Nosotros</Nav.Link>                    
            <Nav.Link href="#link" className="link"><i data-feather = "help-circle"></i> FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
