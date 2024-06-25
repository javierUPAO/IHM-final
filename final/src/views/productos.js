import Carrusel from "../components/carrusel";
import Catalogo from "../components/catalogo";
function Productos()
{
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <Carrusel/>
            </div>
        </div>
        <Catalogo/>



    </div>

    );
}

export default Productos;