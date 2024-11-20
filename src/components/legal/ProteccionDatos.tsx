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
                            PROTECCI&Oacute;N DE <span>DATOS</span>
                        </h1>
                        <div className={styles.infoLegal}>
                            <p>
                                Conforme lo dispuesto en la Ley N°29733, Ley de Protección de Datos Personales y su reglamento aprobado por Decreto Supremo N°003-2013-JUS, ALEATORIO S.A. pone en conocimiento de sus usuarios, los siguientes aspectos relacionados sobre sus datos personales en el tratamiento y protección de la privacidad de los mismos, al utilizar los sitios web y aplicaciones móviles al momento de registrarse en Sorteos DE CHIRIPA.
                            </p>
                            <p>
                                ALEATORIO S.A. contempla una adecuada seguridad informática para el almacenamiento seguro y proceso adecuado de la información que los usuarios comparten con nosotros. En esta política de privacidad se describe cómo recopilamos, utilizamos, conservamos y protegemos sus datos personales.
                            </p>
                            <h3>Identidad y domicilio del titular del banco de datos personales</h3>
                            <p>
                                El titular del presente banco de datos en el que se almacenarán los datos personales facilitados por los usuarios, es ALEATORIO S.A. con RUC N°20XXXXXXXXX y domicilio en Jr. Maximiliano Velarde N° 171, Dpto. 404, distrito de Santiago de Surco, provincia y departamento de Lima, Perú.
                            </p>
                            <p>
                                La existencia de los siguientes bancos de datos personales ha sido declarada a la Autoridad Nacional de Protección de Datos Personales, mediante su inscripción en el Registro Nacional de Protección de Datos Personales con la siguiente denominación:
                            </p>
                            <ul>
                                <li>
                                    “Clientes” y el código: RNPDP N°ABCD
                                </li>
                                <li>
                                    “Ganadores de Premios” y el código: RNPDP N°12345
                                </li>
                            </ul>
                            <p>
                                Se informa al usuario que, cualquier tratamiento de datos personales, se ajusta a lo establecido por la legislación en Perú en la materia (Ley N°29733 y su reglamento), ya sean aquellos datos personales otorgados de forma física o digital por el usuario, incluyendo los datos personales proporcionados a futuro por el usuario, o los que sean generados por ALEATORIO S.A. bajo la prestación de los servicios ofrecidos al usuario.
                            </p>
                            <p>
                                En ese sentido, ALEATORIO S.A. requiere el consentimiento libre, previo, expreso, inequívoco e informado del titular de los datos personales para el tratamiento de los mismos, salvo en los casos de excepción expresamente establecidos por Ley. El usuario se compromete a mantener permanentemente actualizada su información mientras dure su relación con ALEATORIO S.A., para la correcta ejecución de los servicios ofrecidos por ALEATORIO S.A.
                            </p>
                            <h3>
                                Finalidades necesarias
                            </h3>
                            <p>
                                Los datos personales que nuestros participantes otorgan de forma física o digital serán tratados con la finalidad de recopilar los datos personales de los clientes, obtenidos a través del comercio electrónico y en los puntos de venta a nivel nacional, para que puedan participar en Sorteos DE CHIRIPA, generar informes de los sorteos que ofrecemos, atender comunicaciones del cliente, realizar actividades de fidelización, registro de premios obtenidos, evaluar a los jugadores de riesgos, así como para fines estadísticos y/o analíticos, y/o de comportamiento del cliente y/o para que evalúen la calidad del servicio brindado.
                            </p>
                            <h3>
                                Finalidades adicionales
                            </h3>
                            <p>
                                Podremos utilizar su información para los siguientes usos adicionales:
                            </p>
                            <ul>
                                <li>
                                    Realizar estudios estadísticos e invitación a eventos.
                                </li>
                                <li>
                                    Incorporación al programa de lealtad.
                                </li>
                                <li>
                                    Incorporación a los programas de beneficios de ALEATORIO S.A. y Socios Estratégicos de ALEATORIO S.A.
                                </li>
                                <li>
                                    Realizar estudios de mercado, perfiles de compra y envío de publicidad, promociones y ofertas de sus productos y/o servicios y/o de otras empresas en razón de alianzas comerciales.
                                </li>
                            </ul>
                            <h3>
                                Datos personales obligatorios y consecuencia
                            </h3>
                            <p>
                                Para llevar a cabo las finalidades descritas en la presente política, es obligatorio nos proporcione los siguientes datos personales:
                            </p>
                            <ul>
                                <li>
                                    Nombres y Apellidos.
                                </li>
                                <li>
                                    Tipo y número de documento de identidad.
                                </li>
                                <li>
                                    Número de teléfono móvil o celular.
                                </li>
                                <li>
                                    Correo electrónico y/o Email.
                                </li>
                            </ul>
                            <p>
                                La negativa a suministrarlos supone la imposibilidad de concretar los fines previstos en la presente Política.
                            </p>
                            <h3>
                                Destinatarios y transferencia
                            </h3>
                            <p>
                                Para el desarrollo de las finalidades necesarias, ALEATORIO S.A. puede transferir sus datos personales a proveedores a nivel nacional e internacional como: Empresas de prestación de servicio de Validación de Identidad, Empresas de servicios de Soluciones de pagos, Entidad de Registro Nacional de Identificación y Estado Civil, etc.
                            </p>
                            <p>
                                Asimismo, la información podrá ser transferida a las autoridades o terceros autorizados por ley bajo la regulación nacional e internacional vigente (incluyendo la Ley No. 29733, su reglamento y aquellas que las modifiquen o sustituyan, así como las vinculadas a las autoridades que fiscalizan la labor de ALEATORIO S.A.
                            </p>
                            <h3>
                                Plazo de conservación de datos y medidas de seguridad
                            </h3>
                            <p>
                                ALEATORIO S.A., conforme a lo previsto en la Ley No. 29733 y su reglamento, podrá utilizar los datos personales proporcionados mientras se mantenga la relación jurídica, comercial, contractual, o de cualquier índole, con el usuario y hasta por un plazo de diez (10) años después de que finalice dicha relación. ALEATORIO S.A. tiene implementadas las medidas técnicas, organizativas y legales que garantizan la seguridad y confidencialidad de los datos personales.
                            </p>
                            <h3>Ejercicio de los derechos de información, acceso, rectificación, cancelación y oposición de los datos</h3>
                            <p>
                                Como titular de sus datos personales, el usuario tiene el derecho de acceder a los mismos, en posesión de ALEATORIO S.A.; conocer las características de su tratamiento, rectificarlos en caso sea necesario, solicitar sean suprimidos o cancelados al considerarlos innecesarios para las finalidades previamente expuestos o bien oponerse a su tratamiento para fines específicos. El usuario podrá en todo momento, revocar el consentimiento otorgado expresamente, tanto como limitar el uso o divulgación de sus datos personales.
                            </p>
                            <p>
                                El usuario podrá dirigir su solicitud de ejercicio de los derechos en los términos que establece el
                                Reglamento de la Ley N°29733, ingresando aquí, y/o través del correo electrónico <a href="mailto:datospersonales@dechiripa.com.pe" target='_blank'>datospersonales@dechiripa.com.pe</a>.
                            </p>
                            <p>
                                En caso considere usted, que no ha sido atendido en el ejercicio de sus derechos, puede presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales, dirigiéndose a la Mesa de Partes del Ministerio de Justicia y Derechos Humanos: Calle Scipión Llona N°350, distrito de Miraflores, provincia y departamento de Lima.
                            </p>
                            <p>
                                En ese sentido y en cumplimiento de la Ley No. 29733, Ley de Protección de Datos Personales y su Reglamento Decreto Supremo No. 003-2013-JUS, ALEATORIO S.A. ha designado a un responsable de los datos personales en nuestra institución, quien velará por el cumplimiento de esta Política de Privacidad y de toda la normativa de aplicación.
                            </p>
                            <p>
                                ALEATORIO S.A. será responsable del banco de datos personales antes mencionado y de los datos personales contenidos en éste. Con el objeto de evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los mismos, ALEATORIO S.A. cuenta con los niveles de seguridad y de protección de datos personales legalmente requeridos e implementado todos los medios y medidas técnicas a su alcance.
                            </p>
                            <h3>Modificaciones</h3>
                            <p>
                                La presente Política ha sido actualizada el 20 de setiembre de 2024 y podrá ser modificada por ALEATORIO S.A. Cualquier cambio o modificación será publicado en nuestro portal web.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TerminosCondiciones
