import Button from "react-bootstrap/esm/Button";
import { Link } from 'react-router-dom';
import "../styles/style.css"
function Home()
{
   
   return(
        <div id="home-container" className="container relleno">
            <div className="row mb-6">
                <div className="col-md-6 p-5 ">     
                    <h1 className="text-light fs-1 mt-6">Decoraciones textiles Gino's</h1>
                    <p className="text-light fs-6">Sumérgete en nuestro mundo de inspiración y creatividad. ¡Bienvenido a Gino's, donde cada espacio cuenta una historia única de estilo y belleza!</p>
                    <Link to="../productos">
                        <Button variant="danger">Productos</Button>
                    </Link>
                </div>
            </div> 
        </div>
        );
}
export default Home;