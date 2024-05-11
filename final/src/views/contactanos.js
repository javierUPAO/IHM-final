import "../styles/style.css"

function Contactanos() {
    return (
        <div className="container-fluid bg-dark text-white p-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-center mb-4">Contáctate con Nosotros</h1><br></br>
                    <h2>Información de contacto</h2>
                    <p>Número de contacto: +51 999911442</p>
                    <p>Email: gino@gmail.com</p>
                    <p>Dirección: Av.Peru Calle 134 ,Trujillo</p>
                    <br></br>
                    <h2>Tienes alguna consulta?</h2><br></br>
                    <p>Por favor escríbanos y nos pondremos en contacto dentro de las próximas 24 horas</p><br></br>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Celular</label>
                            <input type="text" className="form-control" id="celular" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="mensaje" rows="3" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src="https://images.pexels.com/photos/17840539/pexels-photo-17840539/free-photo-of-madera-vaso-cristal-vidrio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de Gino's" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
}

export default Contactanos;