import "../styles/style.css"
import Button from 'react-bootstrap/Button';
function Footer ()
{    
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });};

    
    return (
    <div className="container-fluid text-center">

        <div className="row bg-dark n-m text-white p-3">
    <div className="col-md-3 inicio">
        <div className="row">       
             <p>@IHM - 2024 all rights reserved</p> 
        </div>
        <div className="row">         
           <Button variant="dark" onClick={scrollToTop}> <i data-feather="chevron-up"></i></Button>
        </div>
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
</div>
    );
}
export default Footer;