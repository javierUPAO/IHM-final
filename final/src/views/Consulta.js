import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { getCarrito } from "../store/local";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../styles/consulta.css"
function Consulta() {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        setCarrito(getCarrito());
    }, []);

    return (
    <div>
    <div className="containerBread">
        <Breadcrumb >
                <Breadcrumb.Item href="/home">Inicio</Breadcrumb.Item>
                <Breadcrumb.Item href="/productos">Productos</Breadcrumb.Item>
                <Breadcrumb.Item active >Consulta</Breadcrumb.Item>
        </Breadcrumb>
    </div>
    <div className="container">

        <h1 className="text-center">Bienvenido a la interfaz de consulta</h1>
        <div className="row">
        <h2>Productos Seleccionados</h2> 
            <div className="col-md-8 prodsel">
            {carrito.length > 0 ? 
            (
                carrito.map((element, idx) => 
                    (
                <div className="row">
                    <div className="col-md-8 producto" key={idx}>
                        <img src={element.url} className="rounded float-start miniatura" alt="..." />
                        <div className="prodinfo">
                            <p className="prodtit"> {element.categoria.toUpperCase()}</p>
                            <p className="prod"> Nombre: {element.nombre}</p>
                            <p className="prod"> Color: {element.color}</p>
                            <p className="prod"> Sub Categoria: {element['sub-categoria']}</p>
                            <p className="prod"> Descripcion: FALTA EL .JASON {}</p>
                        </div>
                    </div>
                    <div className="col-md-4 consulta">
                        <Form.Group className="formBasicConsulta">
                            <Form.Control id="Mensaje" as="textarea" rows={6} placeholder="Ingrese su consulta" />
                        </Form.Group>    
                    </div>
                </div>
                ))
            ) : (
                <p>No hay productos en la lista de consulta.</p>
            )
            }  
            </div>
            
            <div className='col-md-4 contactanos'>
            <h2>Contactanos</h2>    
            <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label for="Nombre">Nombre</Form.Label>
                <Form.Control id="Nombre" type="text" placeholder="Ingrese su nombre" />

                <Form.Label for="Email">Email</Form.Label>
                <Form.Control id="Email" type="email" placeholder="Ingrese su email" />

                <Form.Label for="Celular">Celular</Form.Label>
                <Form.Control id="Celular" type="tel" placeholder="Ingrese su celular"/>  

                <Form.Label for="Mensaje">Mensaje</Form.Label>
                <Form.Control id="Mensaje" as="textarea" rows={6} placeholder="Ingrese su mensaje" />

                <button id="buto" type="submit" className="btn mx-auto d-block"><i data-feather="send"></i> Enviar</button>
            </Form.Group>
            </div>
        </div>
    </div>
  </div>
    );
}

export default Consulta;