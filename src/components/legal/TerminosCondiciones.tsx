'use Client'
import Image from 'next/image'
import styles from '@/styles/sass/legal.module.sass'
import localFont from 'next/font/local'

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})
const TerminosCondiciones = () => {
    return (
        <div className={`${styles.pageLegal} estilosCMS`}>
            <Image
                className={`imageBackGroundContainer`}
                src="/images/topBg.png"
                width={3456}
                height={357}
                alt="De Chiripa :: Preparate para lo que viene"
                priority={true}
            />
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <h1 className={Humane600.className}>
                            <Image
                                className={styles.stickerH1}
                                src="/images/sticker1.svg"
                                width={54}
                                height={73}
                                alt="TÉRMINOS Y CONDICIONES"
                            />
                            POLÍTICA DE <span>DIVULGACIÓN</span>
                        </h1>
                        <div className={styles.infoLegal}>
                            <h3>Política de divulgación responsable de Incidencias de Seguridad</h3>
                            <p>
                                DE CHIRIPA contempla una adecuada seguridad a sus sistemas informáticos y de comunicación. Pese a ello, es imposible evitar la existencia de vulnerabilidades de seguridad. De descubrirse alguna vulnerabilidad de seguridad en nuestros servicios, agradeceremos nos informe la misma, de forma responsable, conforme a la presente Política. Cabe precisar que es ilegal abusar de una vulnerabilidad de seguridad o informar a terceros sobre la misma, lo cual podría conducir a perpetrar un abuso. De suceder algún abuso contra nuestros sistemas informáticos y de comunicación, tenemos el pleno derecho de tomar las acciones legales correspondientes.
                            </p>
                            <p>
                                El uso de esta Política, garantiza una colaboración coordinada basada en la confianza entre la parte que descubre la vulnerabilidad de seguridad y DE CHIRIPA. Por consiguiente, cualquier persona natural o jurídica que identifique alguna vulnerabilidad de seguridad, debe proceder de la siguiente manera, bajo la presente Política de divulgación responsable:
                            </p>
                            <p>
                                Informar de la vulnerabilidad de seguridad a DE CHIRIPA al correo electrónico <a href="mailto:seguridad.informatica@dechiripa.com.pe">seguridad.informatica@dechiripa.com.pe</a>, remitiendo la siguiente información:
                            </p>
                            <ul>
                                <li>Exposición de la vulnerabilidad de seguridad identificada.</li>
                                <li>Categoría o tipo de la vulnerabilidad de seguridad.</li>
                                <li>Indicar las herramientas utilizadas para descubrir la vulnerabilidad de seguridad.</li>
                                <li>Adjuntar evidencias del hallazgo de la vulnerabilidad de seguridad (solo se permiten imágenes .jpg, .pdf, .png)</li>
                                <li>Incluir evidencias de pruebas de concepto que demuestren la explotación de la vulnerabilidad de seguridad.</li>
                            </ul>
                            <p>
                                Proporcione la mayor información sobre la vulnerabilidad de seguridad como sea posible. Tener en consideración que todos los mensajes enviados serán considerados como anónimos y no se realizará ningún tipo de tratamiento de datos con respecto al correo electrónico remitente.
                            </p>
                            <p>
                                Al poner cualquier informe de vulnerabilidad a disposición de nosotros (a través del envío al buzón <a href="mailto:seguridadinformática@dechiripa.com.pe">seguridadinformática@dechiripa.com.pe</a>), usted está aceptando los siguientes Términos y Condiciones para Investigadores.
                            </p>
                            <ul>
                                <li>
                                    No explotar la vulnerabilidad de seguridad, por ejemplo, utilizándola para violar datos, cambiar los datos de terceros o interrumpir deliberadamente la disponibilidad del servicio prestado.
                                </li>
                                <li>
                                    Todas las actividades relacionadas con el descubrimiento de la vulnerabilidad de seguridad deberán comunicarse a DE CHIRIPA en el menor plazo posible con la finalidad de evitar cualquier daño a los sistemas de información y comunicación.
                                </li>
                                <li>
                                    No informe a terceros sobre la vulnerabilidad de seguridad. Todas las comunicaciones relacionadas con la vulnerabilidad de seguridad serán coordinadas por DE CHIRIPA.
                                </li>
                                <li>
                                    En el caso de un informe no anónimo, DE CHIRIPA informará a la parte que presentó el informe de los pasos que pretende tomar y el progreso hacia el cierre de la vulnerabilidad de seguridad.
                                </li>
                                <li>
                                    Dependiendo de cuán crítica sea la vulnerabilidad de seguridad y la calidad del informe, DE CHIRIPA puede reconocer el descubrimiento de la vulnerabilidad de seguridad.
                                </li>
                                <li>
                                    La presente Política está sujeta a los Términos y Condiciones para Investigadores.
                                </li>
                            </ul>
                            <p>
                                La seguridad, fiabilidad y honestidad son principios esenciales en DE CHIRIPA. Por consiguiente, su contribución para mejorar la seguridad y confiabilidad de nuestros sistemas informáticos y de comunicación, será muy apreciada y recompensada.
                            </p>
                            <h3>Informar una Vulnerabilidad de Seguridad</h3>
                            <p>
                                DE CHIRIPA garantiza que no se hará ningún intento para identificar a la parte anónima que informe de una vulnerabilidad de seguridad, siempre que la parte no haya utilizado su conocimiento de la vulnerabilidad para explotarla y no haya informado a terceros de su existencia.
                            </p>
                            <h3>Términos y condiciones para investigadores</h3>
                            <p>
                                Estos términos y condiciones rigen la relación entre ALEATORIO S.A. y usted (también conocido como el Investigador). Al aceptar estos Términos y Condiciones, usted los acepta y estará sujeto a ellos.
                            </p>
                            <h3>
                                Investigador
                            </h3>
                            <p>
                                Un investigador es un hacker ético o un investigador de seguridad que está dispuesto a ayudar a las empresas y otras organizaciones a encontrar errores y vulnerabilidades en sus sistemas y redes informáticas o en sus sitios web y plataformas web. Para dicho efecto, su actuación como investigador estará sujeta a la Política de Divulgación Responsable de Incidencias de Seguridad.
                            </p>
                            <h3>Obligaciones del Investigador</h3>
                            <p>
                                Usted declara y garantiza que ni sus actividades ni sus informes con respecto a errores e incidencias y/o vulnerabilidades ni su uso infringirá, se apropiará indebidamente o violará los derechos de propiedad intelectual de DE CHIRIPA y/o de cualquier tercero, o los derechos de publicidad o privacidad, o resultar en la violación de cualquier ley o reglamento aplicable.
                            </p>
                            <h3>Confidencialidad</h3>
                            <p>Usted acepta, con respecto a toda la información (que incluye, entre otros, todos los errores y vulnerabilidades que haya encontrado) que obtenga como parte de su investigación o de otro modo, a:</p>
                            <ul>
                                <li>Tratarlo como estrictamente confidencial;</li>
                                <li>No divulgarlo a ninguna otra parte que no sea a DE CHIRIPA sin nuestro consentimiento previo por escrito; y</li>
                                <li>
                                    No copiar, reproducir o reducir a escrito ninguna parte de la información, excepto cuando sea razonablemente necesario.
                                </li>
                            </ul>
                            <h3>Licencia</h3>
                            <p>
                                Al poner cualquier Informe de vulnerabilidad a disposición de nosotros, remitido al correo <a href="mailto:seguridad.informatica@dechiripa.com.pe">seguridad.informatica@dechiripa.com.pe</a>seguridad.informatica@dechiripa.com.pe, usted otorga a ALEATORIO S.A. una licencia perpetua, irrevocable, no exclusiva, transferible, sublicenciable, mundial y libre de regalías para usar, copiar, reproducir, exhibir, modificar, adaptar, transmitir y distribuir copias de dicho informe de incidencia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TerminosCondiciones
