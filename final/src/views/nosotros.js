import "../styles/style.css"
function Nosotros()
{
    return (
        <div className="container-fluid n-p">
            {/* Nosotros 1 */}
            <div className="row nosotros">
                <div className="col-md-12">
                    <div className="row">
                        <h2 class="text-center nosotros_h2">Sobre Decoraciones Textiles Gino's </h2>
                    </div>
                </div>
            </div>
            <p class="text-center nosotros_desc">En Decoraciones Textiles Gino's nos apasiona transformar espacios en experiencias únicas, donde cada detalle refleje tu estilo y personalidad.  Nuestro compromiso va más allá de ofrecerte productos de calidad; te brindamos un servicio personalizado, guiándote en cada paso para crear el ambiente perfecto que hará de tu hogar o negocio un lugar excepcional.  Sumergete en nuestro mundo de inspiración y creatividad.</p>
            {/* MISION */}
            <div className="row text-center mision ">
                <div className="col-md-6">
                    <div className="row ">
                        <h2>Misión</h2>
                        <p>En Decoraciones Textiles Gino's, nuestra misión es inspirar y transformar hogares a través de la belleza y funcionalidad. Nos esforzamos por ser líderes en el mercado, ofreciendo productos de la más alta calidad y un servicio excepcional que supere las expectativas de nuestros clientes. Creemos en la creación de espacios que no solo sean visualmente atractivos, sino que también mejoren la calidad de vida de quienes los habitan.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="https://i0.wp.com/get.witei.com/wp-content/uploads/2021/11/mision-empresarial-1-1-1.jpg?fit=1199%2C622&ssl=1"></img>
                </div>
            </div>
            {/* VISION */}
            <div className="row vision text-center">
                <div className="col-md-6">
                <img src="https://www.liderempresarial.com/wp-content/uploads/2018/10/meeting.jpeg"></img>
                </div>
                <div className="col-md-6">
                    <div className="row ">
                        <h2>Visión</h2>
                        <p>Nuestra visión es ser reconocidos como la referencia indiscutible en decoración del hogar, ofreciendo una amplia gama de productos innovadores y soluciones personalizadas que se adapten a cada estilo y necesidad. Aspiramos a construir relaciones duraderas con nuestros clientes, basadas en la confianza, la transparencia y la pasión compartida por la creación de espacios únicos y acogedores.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;