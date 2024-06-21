import Button from "react-bootstrap/esm/Button";
import { Link } from 'react-router-dom';
import "../styles/style.css"
function Home() {
    return (
        <div className="container n-p I">
            <div className="row vh-70 n-m">
                <div className="col-md-7 inicio">
                    <div className="row">
                        <h1>Decoraciones textiles Gino's</h1>
                    </div>
                    <div className="row">
                        <p>
                            Sumergete en nuestro mundo de inspiración y creatividad. <br />
                            ¡Bienvenido a Gino-s donde cada espacio cuenta una historia <br />
                            única de estilo y belleza!
                        </p>
                    </div>
                </div>
                <div className="col-md-5 inicio">
                    <p className="a-m">Imagen</p>
                </div>
            </div>

            <div className="row n-m">
                <div className="row vh-60 n-p n-m">
                    <div className="col-md-6 inicio n-p">
                        <div className="row titulo">
                            <h2>Encuentranos</h2>
                        </div>
                        <div className="row img h-st">
                            <p>imagen</p>
                        </div>
                        <div className="row boton-1">
                            <a href="#">Ubicanos</a>
                        </div>
                    </div>
                    <div className="col-md-6 inicio n-p">
                        <div className="row titulo">
                            <h2>Contactanos</h2>
                        </div>
                        <div className="row telefonos h-st">
                            <p>98753447 <br />987646789 <br /> 098646747</p>
                        </div>
                        <div className="row boton-1">
                            <a href="#">Contactanos</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

