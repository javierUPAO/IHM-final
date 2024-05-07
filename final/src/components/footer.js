import { Link } from "react-router-dom";
import "../styles/style.css"
function Footer ()
{
    return (
        <div className="container-fluid bg-dark ">
            <div className="row text-center bg-terciary p-2">
                <div className="col-md-4 ">
                    <a href="https://www.facebook.com/" className="text-light text-decoration-none" target="blank">Facebook</a>
                </div>
                <div className="col-md-4">
                    <a href="https://twitter.com/?lang=es" className="text-light text-decoration-none" target="blank">Twitter</a>
                </div>
                <div className="col-md-4">
                    <a href="https://www.instagram.com/" className="text-light text-decoration-none" target="blank">Instagram</a>
                </div>
            </div>
            <div className="row p-3"><p className="text-light">© IHM-2024 All Rights Reserved.</p></div>
            <div className="row text-center p-3">
                <div className="col-md-6">
                    <Link to="/terminos-y-condiciones" className="text-light text-decoration-none " target="_blank">Terminos y condciones</Link>
                </div>
                <div className="col-md-6">
                    <Link to="/politicas-de-privacidad" className="text-light text-decoration-none" target="_blank" >Politicas de privacidad</Link>
                </div>
            </div>
        </div>
    );
}
export default Footer;