import Carrusel from "../components/carrusel";
import { Link } from 'react-router-dom';
import "../styles/style.css"
function Nosotros()
{
    return (
        <div className="container-fluid n-p">
            {/* Nosotros 1 */}
            <div className="row">
                <div className="col-md-8 inicio w-100">
                    <div className="row">
                        <h2>Nosotros</h2>
                    </div>
                    <div className="row">
                        <p>img</p>
                    </div>
                    <div className="row">
                        <p>Sumergete en nuestro mundo de inspiración y creatividad. ¡Bienvenido a Gino's donde cada espacio cuenta una historia de estilo y belleza!</p>
                    </div>
                </div>
            </div>
            {/* Nosotros 2 */}
            <div className="row">
                {/* MISION */}
                <div className="col-md-6 inicio">
                    <div className="row">
                        <h2>Misión</h2>
                    </div>
                    <div className="row">
                        <p>Ser la tienda líder en decoración del hogar, reconocida por nuestra calidad, innovación y servicio excepcional, creando espacios hermosos y funcionales que mejoren la vida de nuestros clientes</p>
                    </div>
                    <div className="row">
                        <p>Img</p>
                    </div>
                </div>
                {/* VISION */}
                <div className="col-md-6 inicio">
                    <div className="row">
                        <h2>Visión</h2>
                    </div>
                    <div className="row">
                        <p>Ofrecer productos de alta calidad en cortinas, muebles y textiles, con un enfoque en diseño y satisfacción del cliente, proporcionando soluciones decorativas que transformen cada hogar en un lugar único y acogedor</p>
                    </div>
                    <div className="row">
                        <p>Img</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;