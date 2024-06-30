import Catalogo from "../components/catalogo";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Productos()
{

    return (
        <div> 
        <div className="containerBread">
        <Breadcrumb >
                <Breadcrumb.Item href="/home">Inicio</Breadcrumb.Item>
                <Breadcrumb.Item active >Productos</Breadcrumb.Item>
        </Breadcrumb>
        </div>
        <br></br>
        <Catalogo/>
        </div>
    );
}

export default Productos;