
import { Link } from "react-router-dom";
import '../styles/style.css'
function Enviado() {

    return( 
    <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Consulta enviada correctamente</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <img class="" src="https://cdn-icons-png.flaticon.com/512/1276/1276917.png" alt="imagen"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center" >Sera atendido lo más pronto posible...</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                <div class="card mb-3">
                                <Link className="btn btn-vino" to="/productos">Consultar productos</Link>
                </div>
                </div>
            </div>
    </div>

    );
}
  export default Enviado;