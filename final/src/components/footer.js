import { Link } from "react-router-dom";
import "../styles/style.css"
function Footer ()
{
    return (
        <div className="row bg-dark n-m text-white">
    <div className="col-md-3 inicio">
        <p>@IHM - 2024 all rights reserved</p>
    </div>
    <div className="col-md-6 inicio">
        <div className="row">
            <p>Decoraciones Textiles Gino's</p>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-2">
                <i data-feather="facebook"></i>
            </div>
            <div className="col-md-2">
                <i data-feather="instagram"></i>
            </div>
            <div className="col-md-2">
                <i data-feather="twitter"></i>
            </div>
        
        
        

        </div>
    </div>
    <div className="col-md-3 inicio">
        <div className="row">
            <p>Politicas y Privacidad</p>
        </div>
        <div className="row">
            <p>Términos y Condiciones</p>
        </div>
    </div>
</div>
    );
}
export default Footer;