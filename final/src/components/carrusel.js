import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import productos from '../datos.json';

const Carrusel= () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
      navigate(slug);
  }
  return(  
    <Carousel>
        {
          productos.map(it =>
           {
             return (
                  <Carousel.Item onClick={(e) => {e.preventDefault(); handleClick(it.slug) }}>
                  <img className="img-fluid w-30" src={it.url}/>
                  </Carousel.Item>     
                    );
   
            })

        }
    </Carousel>
    );
}

export default Carrusel;