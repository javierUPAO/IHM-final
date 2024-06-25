import Carousel from 'react-bootstrap/Carousel';
import productos from "../json/carrusel.json";


const Carrusel= () => {
  return (
    <Carousel>
      {
        productos.map(it =>
         {
           return (
                <Carousel.Item>
                  <div className="d-flex justify-content-center mxh-70 align-items-center position-relative overlay hover-div">
                  <img className="img-fluid" src={it.src} alt="productos"/>
                    <div className="position-absolute text-center w-100 overlay align-content-center z1">
                      <span className='z2 text-center title' >Gino's <br/><br/></span>
                      <span className='z2 text-center '>Sumergete en nuestro mundo de inspiración y creatividad. <br />
                            ¡Bienvenido a Gino-s donde cada espacio cuenta una historia <br />
                            única de estilo y belleza!</span>
                      
                    </div>
                  </div>
                
                </Carousel.Item>     
                  );
 
          })

      }
  
    </Carousel>
  );

  
    
}

export default Carrusel;