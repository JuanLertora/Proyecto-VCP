import React from "react";
import { portada, ubicacion, eventos, evento2, vcp } from './img.js'
import './estilos.css'
import { Link } from 'react-router-dom'


function Inicio() {
    return (
        <div>
            <div className="div-portada">
                <img alt='Portada' src={portada} className='dx-foto-portada' />
                <div className="titulo">
                    <h1>¿QUÉ NOS DIFERENCIA? NUESTRO AMOR, NUESTRA PASIÓN Y NUESTRA GRATITUD POR JESÚS</h1>
                    <div className="div-ubicacion">
                    <Link to='/' className="dx-link-ubicacion"><img alt='ubicacion' src={ubicacion} className='dx-ico-ubicacion' />Donde Estamos</Link>
                    </div>
                </div>
            </div>
            <h3>Proximos Eventos</h3>
            <div className="div-evento">
                <div className="div-evento1">
                    <img alt='Evento' src={eventos} className='dx-foto-evento1' />
                </div>
                <div className="div-evento2">
                    <img alt='Evento' src={evento2} className='dx-foto-evento2' />
                </div>
            </div>
            <div>
                <span>Desde 2013</span>
                <h3>LA IGLESIA VIDAS CON PROPOSITO HA CRECIDO EN LA FE.</h3>
                <span>Porque sabemos que la FE es la única respuesta que Dios espera de nosotros. Somos conscientes de que la Biblia nos presenta una contracultura, y abrazarla es redefinir la vida misma.</span>
            </div>
            <div>
                <h3>Palabras</h3>
                <div className="div-videos">
                    <div className="dx-videos-fb1">
                        <a href="https://www.facebook.com/watch/?v=949837552565847" target="_blank">
                            <img src={vcp} className='img-videos'></img>
                        </a><br/>
                        <span>VCP en Linea</span>

                    </div>
                    <div className="dx-videos-fb2">
                        <a href="https://www.facebook.com/watch/?v=949837552565847" target="_blank">
                            <img src={vcp} className='img-videos'></img>
                        </a><br/>
                        <span>VOLVIENDO AL DISEÑO ORIGINAL</span>
                    </div>
                    <div className="dx-videos-fb3">
                        <a href="https://www.facebook.com/watch/?v=949837552565847" target="_blank">
                            <img src={vcp} className='img-videos'></img>
                        </a><br/>
                        <span>Vidas Con Propósito</span>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>

                </div>
            </div>


        </div>
    )
};

export default Inicio