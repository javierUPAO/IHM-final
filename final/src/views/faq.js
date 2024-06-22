import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import "../styles/style.css";
import Button from 'react-bootstrap/Button';
function FAQ() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/*  Cards  */}
         <h2 className='d-flex justify-content-center  text-light py-4'>Guias de ayuda</h2>
        <div className='all d-flex justify-content-center '>  
          <Card  data-aos="zoom-in" className='card01 mx-3 '>
            <Card.Body>
            <div data-feather="user" className="icon"></div>
              <div className='boton d-flex justify-content-center'> <Button variant="danger">Contactar Soporte</Button></div>
            </Card.Body>
          </Card>
          <Card  data-aos="zoom-in" className="card02 mx-3">
            <Card.Body>
              <i  className="icon" data-feather="package"></i>
              <div className='boton d-flex justify-content-center'> <Button variant="danger">Solicitar un pedido</Button></div>
            </Card.Body>
          </Card>
          <Card  data-aos="zoom-in" className="card03 mx-3">
            <Card.Body >
              <i className="icon" data-feather="dollar-sign"></i>
              <div className='boton d-flex justify-content-center'> <Button variant="danger">Generar Presupuesto</Button></div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-8">
          {/* Acordion */}
          <Accordion className="py-5">
            <h1 className="my-5 text-center text-white">Preguntas Frecuentes</h1>
            <Accordion.Item eventKey="0">
              <Accordion.Header>1.Tiene garantia?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2.¿Qué métodos de pago aceptan?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>3.¿En cuánto tiempo tendré listo mi producto?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>4.¿Qué beneficios tiene adquirir este producto o servicio? </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;