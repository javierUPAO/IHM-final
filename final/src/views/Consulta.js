import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { getCarrito } from "../store/local";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
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

        <h1>Bienvenido a la interfaz de consulta</h1>
        <div className="row">
            <div className='col-md-8'>
            {carrito.length > 0 ? 
            (
                carrito.map((element, idx) => 
                    (
                        
                        <div className=" m-3" key={idx}>
                            <div className="col-md-4 bg-warning-subtle">
                                <img src={element.url} className="rounded float-start miniatura" alt="..." />
                            </div>
                            <div className="col-md-4 bg-warning-subtle">
                                <div className="card-body">
                                    <h4 className="card-title"> {element.categoria.toUpperCase()}</h4>
                                    <h5 className="card-title"> Nombre: {element.nombre}</h5>
                                    <h5 className="card-title"> Color: {element.color}</h5>
                                    <h5 className="card-title"> Sub Categoria: {element['sub-categoria']}</h5>
                                    <h5 className="card-title"> Descripcion: {}</h5>
                                </div>
                            </div>
                           
                    </div>
                ))
            ) : (
                <p>No hay productos en la lista de consulta.</p>
            )
        }
                    
            </div>
            <div className='col-md-4'>;
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
              </div>
            
        </div>

    <div >

        </div>
    </div>
  </div>
    );
}

export default Consulta;