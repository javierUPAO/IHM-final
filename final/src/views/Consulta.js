import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../styles/consulta.css";
import { getCarrito } from "../store/local";
import Enviado from "../components/Enviado";
import Alert from "react-bootstrap/Alert";

function Consulta() {
  const [carrito, setCarrito] = useState([]);
  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [consultaEnviada, setConsultaEnviada] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setCarrito(getCarrito());
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !celular.trim()) {
      setError('Por favor, completa todos los campos obligatorios antes de enviar.');
      return;
    }
    if (!/^\d{9}$/.test(celular)) {
      setError('El número de celular debe tener 9 dígitos.');
      return;
    }

    localStorage.clear();
    setConsultaEnviada(true);
    setError('');
  };

  return (
    <div>
      <div className="containerBread">
        <Breadcrumb>
          <Breadcrumb.Item href="/home">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href="/productos">Productos</Breadcrumb.Item>
          <Breadcrumb.Item active>Consulta</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="container">
        <h1 className="text-center">Bienvenido a la interfaz de consulta</h1>
        {consultaEnviada ? (
            <Enviado></Enviado>
        ) : (
          <div className="row">
            <h2>Productos Seleccionados</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="col-md-8 prodsel">
              {carrito.length > 0 ? (
                carrito.map((element, idx) => (
                  <div className="row" key={idx}>
                    <div className="col-md-8 producto">
                      <img
                        src={element.url}
                        className="rounded float-start miniatura"
                        alt="..."
                      />
                      <div className="prodinfo">
                        <p className="prodtit">
                          {" "}
                          {element.categoria.toUpperCase()}
                        </p>
                        <p className="prod"> Nombre: {element.nombre}</p>
                        <p className="prod"> Color: {element.color}</p>
                        <p className="prod">
                          {" "}
                          Sub Categoria: {element["sub-categoria"]}
                        </p>
                        <p className="prod"> Descripcion: FALTA EL .JASON {}</p>
                      </div>
                    </div>
                    <div className="col-md-4 consulta">
                      <Form.Group className="formBasicConsulta">
                        <Form.Control
                          id="Mensaje"
                          as="textarea"
                          rows={6}
                          placeholder="Ingrese su consulta"
                        />
                      </Form.Group>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay productos en la lista de consulta.</p>
              )}
            </div>

            <div className="col-md-4 contactanos">
              <h2>Contactanos</h2>
              <Form>
                <Form.Group controlId="Nombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="Distrito">
                  <Form.Label>Distrito</Form.Label>
                  <Form.Control as="select" id="exampleSelect">
                    <option value="opcion1">Trujillo</option>
                    <option value="opcion2">El porvenir</option>
                    <option value="opcion3">La esperanza</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="Celular">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Ingrese su celular"
                    required
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                  />
                </Form.Group>

                <Button
                  id="buto"
                  type="submit"
                  className="btn mx-auto d-block"
                  onClick={handleClick}
                >
                  <i data-feather="send"></i> Enviar
                </Button>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Consulta;
