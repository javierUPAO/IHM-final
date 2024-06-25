import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "../styles/style.css"

function Navb() {

  const renderTooltipProductos = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Productos
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
            
           <OverlayTrigger placement="right" delay={{ show: 5, hide: 5 }} overlay={renderTooltipProductos} >  
              <Nav.Link href="/productos" className="link"> 
                <i data-feather = "home"></i> Productos
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navb;
