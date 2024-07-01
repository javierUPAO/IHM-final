import Carrusel from "../components/carrusel";
import "../styles/style.css"
import Trabajos from "../components/Nuestros Trabajos"
import Categoria from "../components/categorias"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Home() {
    
    return (
        <div>
            <div className="containerBread">
                <Breadcrumb >
                        <Breadcrumb.Item active >Inicio</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Carrusel/>
            <div className="container-fluid">
                <div className="row justify-content-center">

                    <div className="col-md-5">
                        <div className="container-1">
                            <h2>VISITANOS</h2>
                            <div className="row c1">
                                <img className="img-fluid" src="https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Responsiveimg"></img>
                            </div>
                            <div className="row">
                                <p>Direccion:  Av. Húsares de Junín 801(La Libertad, Trujillo)</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="container-1">
                            <h2>CONTACTO</h2>
                            <div className="row c1">
                                <img className="img-fluid" src="https://i.ibb.co/dPQvGL9/Contacto.png" alt="Responsive Img"></img>
                            </div>
                            <div className="row">
                                <p>Contacto:949314078 </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Trabajos/>
            <Categoria/>
            
       </div>
    );
}

export default Home;

