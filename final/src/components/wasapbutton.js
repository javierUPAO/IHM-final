import '../styles/style.css'
import '../styles/fontello.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Wasap = () => {
    const wasap = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Consulta a un asesor
        </Tooltip>
      );
    return (
    <div  className="float-buton">
        <OverlayTrigger placement="left" delay={{ show: 5, hide: 20 }} overlay={wasap} >   
        <a className="float-buton" href='https://web.whatsapp.com/send?phone=977683208&text=Hola%20GINOS%2C%20Tengo%20una%20consulta' target="_blank" rel="noreferrer">
        <i className="icon-whatsapp"></i>
        </a>
        </OverlayTrigger>

    </div>);

}

export default Wasap;