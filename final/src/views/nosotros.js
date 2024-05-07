import Carrusel from "../components/carrusel";
import { Link } from 'react-router-dom';
import "../styles/style.css"
function Nosotros()
{
    return (
        <div className="container-fluid bg-dark text-white">

             <div className="row d-flex justify-content-center">

                <div className="col-md-4 text-center">
                            
                        <h2 className="text-light fs-1 mt-6">Decoraciones textiles Gino's</h2>
                        <p className="text-light fs-6">Sumérgete en nuestro mundo de inspiración y creatividad. ¡Bienvenido a Gino's, donde cada espacio cuenta una historia única de estilo y belleza!</p>
                </div>

                

             </div>

             <div className="row d-flex justify-content-center fondo_fixed">

                <div className="col-md-4 text-center ">
                            
                        <h2 className="text-light fs-1 mt-6">Mision</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae ex eu nunc interdum eleifend. Etiam porta nisi luctus, consequat sem quis, posuere metus. Sed lorem diam, lacinia sit amet lobortis non, tempus sed turpis. Vestibulum aliquam pretium odio sed laoreet. Cras rhoncus hendrerit turpis ut varius. Nulla vel maximus elit, hendrerit dignissim massa. Donec eget velit a eros pellentesque aliquam sit amet quis magna. Vivamus vitae est volutpat, sodales lacus eu, sollicitudin dolor. </p>
                </div>

                
             </div>


             <div className="row d-flex justify-content-center ">

                <div className="col-md-4 text-center">
                            
                        <h2 className="text-light fs-1 mt-6">Vision</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae ex eu nunc interdum eleifend. Etiam porta nisi luctus, consequat sem quis, posuere metus. Sed lorem diam, lacinia sit amet lobortis non, tempus sed turpis. Vestibulum aliquam pretium odio sed laoreet. Cras rhoncus hendrerit turpis ut varius. Nulla vel maximus elit, hendrerit dignissim massa. Donec eget velit a eros pellentesque aliquam sit amet quis magna. Vivamus vitae est volutpat, sodales lacus eu, sollicitudin dolor. </p>
                </div>

                
             </div>


             <div className="row d-flex justify-content-center fondo_fixed ">

                <div className="col-md-4 text-center">
                            
                        <h2 className="text-light fs-1 mt-6">Objetivo</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae ex eu nunc interdum eleifend. Etiam porta nisi luctus, consequat sem quis, posuere metus. Sed lorem diam, lacinia sit amet lobortis non, tempus sed turpis. Vestibulum aliquam pretium odio sed laoreet. Cras rhoncus hendrerit turpis ut varius. Nulla vel maximus elit, hendrerit dignissim massa. Donec eget velit a eros pellentesque aliquam sit amet quis magna. Vivamus vitae est volutpat, sodales lacus eu, sollicitudin dolor. </p>
                </div>

                
             </div>

             <div className="row d-flex justify-content-center">

                <div className="col-md-5 text-center text-white">
                        <div className="row">
                            <h2>Ubicanos</h2>        
                        </div>    
                        <div className="row">
                            <img src="https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png" alt="ubicacion" className="img-fluid"></img>
                        </div>    
                        <div className="row">
                        
                            <p className="text-start">Dirección: AV.Peru Calle 134 ,Trujillo</p>
                        </div>
                        

                </div>

                <div className="col-md-5 text-center text-white">
                    <br></br>
                        <div className="row">
                            <h2>Contactanos</h2>        
                        </div>       
                        <div className="row">

                            <div className="col-md-6">
                                <p>Telefono: 
                                    <br></br>
                                    123456789
                                    <br></br>
                                    123456789
                                    <br></br>
                                    123456789</p>
                                
                            </div>

                            <div className="col-md-6">
                                <p>Correo: 
                                <br></br>
                                gino@gmail.com</p>
                            </div>
                            
                        </div>
                        


                        <div className="row d-flex justify-content-center">
                            <p>Para más información entrar</p>
                            <button type="button" class="btn btn-light w-50">Contactar</button>
                        </div> 
                        

                </div>

                

             </div>

            <br></br>
            <br></br>
            <br></br>

            <div className="row">

                <div className="col-md-6">

                </div>

             </div>
        </div>

    );
}

export default Nosotros;