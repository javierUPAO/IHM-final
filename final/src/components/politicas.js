import React from 'react';
import Imagen01 from '../photos/image1.png';
import '../styles/estilos.css'
const Politicas = () => {
    return (
        <div data-aos="zoom-in" className='fondopolitica'>
            <div className="container text-left py-4" style={{ padding: "20px", backgroundColor: "#f2efe9" }}>
                <div className='border-0'>
                    <h2 className='text-center'>Politicas De Privacidad</h2>
                    <ol>
                        <li>La información que recopilamos:</li>
                        <p>Podemos recopilar la siguiente información: Nombre y detalles de contacto, incluida la dirección de correo electrónico.
                            Información demográfica como código postal, preferencias e intereses.
                            Otra información relevante para encuestas y/o ofertas.</p>
                        <li>Para qué utilizamos la información que recopilamos:</li>
                        <p>Utilizamos esta información para entender tus necesidades y
                            brindarte un mejor servicio, y en particular por las siguientes
                            razones: Mantenimiento de registros internos. Podemos utilizar
                            la información para mejorar nuestros productos y servicios.
                            Podemos periódicamente enviar correos electrónicos promocionales
                            sobre nuevos productos, ofertas especiales u otra información
                            que creemos que puede resultarte interesante. De vez en cuando, también
                            podemos utilizar tu información para contactarte con fines de investigación de mercado.
                            Podemos contactarte por correo electrónico, teléfono, fax o correo postal.
                        </p>
                        <li>Seguridad:</li>
                        <p>Estamos comprometidos a garantizar que tu información esté segura.
                            Con el fin de evitar el acceso no autorizado o la divulgación, hemos
                            implementado procedimientos físicos, electrónicos y administrativos
                            para salvaguardar y asegurar la información que recopilamos en línea.
                        </p>
                        <li>Control de tu información personal:</li>
                        <p>No venderemos, distribuiremos ni alquilaremos tu información personal a terceros a menos
                            que tengamos tu permiso o estemos obligados por ley a hacerlo. Podemos usar tu información
                            personal para enviarte información promocional sobre terceros que creemos que puede resultarte
                            interesante si nos indicas que deseas que esto suceda.
                            Al utilizar nuestro sitio web estás aceptando los términos y condiciones establecidos en esta
                            política de privacidad. Tanto los términos de uso como la política de privacidad están sujetos
                            a cambios sin previo aviso, y te recomendamos que revises regularmente esta página para asegurarte de que estás satisfecho con cualquier cambio.
                        </p>
                    </ol>
                </div>
            </div>
            <div class="imagen01 py-1">
                <img src={Imagen01} class="img-fluid d-block mx-auto" alt="xpg"></img>
            </div>
        </div>
    );
};

export default Politicas;
