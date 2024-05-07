import React from 'react';

const Politicas = () => {
    return (
        <div className='py-3'>
            <div className="row g-0">
                <div className="col-md-3">
                    <h1 className="titulo">Política de privacidad</h1>
                    <div className="letra-costado">
                        <p className="parrafo-grande">
                            ¡El equipo de desarrollo respeta tu privacidad y se compromete a protegerla. Esta política de privacidad describe cómo recopilamos, usamos y protegemos la información personal que puedas proporcionarnos a través de nuestro sitio web!
                        </p>
                    </div>
                </div>
                <div className="col-md-9 bg-black">
                    <div className="politicas-div">
                        <h2 className='pie-privacidad'>1. La información que recopilamos:</h2>
                        <p className='parrafo-privacidad'>
                            Podemos recopilar la siguiente información:
                            Nombre y detalles de contacto, incluida la dirección de correo electrónico.
                            Información demográfica como código postal, preferencias e intereses.
                            Otra información relevante para encuestas y/o ofertas.
                        </p>
                        <h2 className='pie-privacidad'>2. Para qué utilizamos la información que recopilamos:</h2>
                        <p className='parrafo-privacidad'>
                            Utilizamos esta información para entender tus necesidades y brindarte un mejor servicio, y en particular por las siguientes razones:
                            Mantenimiento de registros internos.
                            Podemos utilizar la información para mejorar nuestros productos y servicios.
                            Podemos periódicamente enviar correos electrónicos promocionales sobre nuevos productos, ofertas especiales u otra información que creemos que puede resultarte interesante.
                            De vez en cuando, también podemos utilizar tu información para contactarte con fines de investigación de mercado. Podemos contactarte por correo electrónico, teléfono, fax o correo postal.
                        </p>
                        <h2 className='pie-privacidad'>3. Seguridad:</h2>
                        <p className='parrafo-privacidad'>
                            Estamos comprometidos a garantizar que tu información esté segura. Con el fin de evitar el acceso no autorizado o divulgación, hemos puesto en marcha procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar y asegurar la información que recopilamos en línea.
                        </p>
                        <h2 className='pie-privacidad'>4. Control de tu información personal:</h2>
                        <p className='parrafo-privacidad'>
                            No venderemos, distribuiremos ni alquilaremos tu información personal a terceros a menos que tengamos tu permiso o estemos obligados por ley a hacerlo. Podemos usar tu información personal para enviarte información promocional sobre terceros que creemos que puede resultarte interesante si nos indicas que deseas que esto suceda.
                        </p>
                        <p className='parrafo-privacidad'>
                            Al utilizar nuestro sitio web estás aceptando los términos y condiciones establecidos en esta política de privacidad.
                            Tanto los términos de uso como la política de privacidad están sujetos a cambios sin previo aviso, y te recomendamos que revises regularmente esta página para asegurarte de que estás satisfecho con cualquier cambio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Politicas;