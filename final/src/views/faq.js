import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import "../styles/style.css";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FAQ() {
  return (
    <div className='container-fluid n-m imagen'>
      <Row className="justify-content-center">
        {/*  Cards  */}
        <h1 data-aos="zoom-in" className='d-flex justify-content-center text-light py-4'>Guias de ayuda</h1>
        <div className='all d-flex flex-wrap justify-content-center'>
          <Card data-aos="zoom-in" className='card01 mx-3 my-3'>
            <Card.Body>
              <div data-feather="user" className="icon"></div>
              <div data-aos="zoom-in" className='boton d-flex justify-content-center'>
                <Button variant="danger">Contactar Soporte</Button>
              </div>
            </Card.Body>
          </Card>
          <Card data-aos="zoom-in" className="card02 mx-3 my-3">
            <Card.Body>
              <i className="icon" data-feather="package"></i>
              <div data-aos="zoom-in" className='boton d-flex justify-content-center'>
                <Button variant="danger">Solicitar un pedido</Button>
              </div>
            </Card.Body>
          </Card>
          <Card data-aos="zoom-in" className="card03 mx-3 my-3">
            <Card.Body>
              <i className="icon" data-feather="dollar-sign"></i>
              <div data-aos="zoom-in" className='boton d-flex justify-content-center'>
                <Button variant="danger">Generar Presupuesto</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <Col md={8}>
          {/* Acordion */}
          <Accordion data-aos="zoom-in" className="py-5">
            <h1 data-aos="zoom-in" className="my-5 text-center text-white">Preguntas Frecuentes</h1>
            <Accordion.Item eventKey="0">
              <Accordion.Header>1.Tiene garantia?</Accordion.Header>
              <Accordion.Body>
                Sí, todos nuestros productos tienen garantía. La duración de la garantía varía según el tipo de producto, pero generalmente ofrecemos entre 1 y 2 años de garantía para asegurar la calidad y durabilidad de nuestros muebles y tapizados. Si tienes algún problema con tu compra dentro de este período, no dudes en contactarnos y estaremos encantados de asistirte.              
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2.¿Qué métodos de pago aceptan?</Accordion.Header>
              <Accordion.Body>
                Aceptamos varios métodos de pago para tu comodidad, incluyendo:
                <ul>
                  <li>Efectivo</li>
                  <li>Tarjetas de crédito y débito (Visa, MasterCard, American Express)</li>
                  <li>Transferencias bancarias</li>
                  <li>Pagos móviles (dependiendo de la disponibilidad local)</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>3.¿En cuánto tiempo tendré listo mi producto?</Accordion.Header>
              <Accordion.Body>
                Si tienes alguna otra forma de pago en mente, por favor consúltanos y haremos lo posible para acomodarte.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>4.¿Qué beneficios tiene adquirir este producto o servicio? </Accordion.Header>
              <Accordion.Body>
                Al adquirir nuestros productos o servicios, obtienes una serie de beneficios:
                <ul>
                  <li>Productos de alta calidad a precios competitivos</li>
                  <li>Garantía de satisfacción del 100%</li>
                  <li>Atención al cliente personalizada y profesional</li>
                  <li>Entrega rápida y segura</li>
                  <li>Asesoramiento y soporte post-venta</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
}

export default FAQ;
