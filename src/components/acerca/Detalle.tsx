'use client'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/acercaPage.module.sass'
import { ObjApiConfig } from "@/interfaces/contenido"

// import RasgadoIzq from '@/components/fondo/RasgadoIzq'
const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})


const Poppins400 = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
interface Props {
    dataContenido: ObjApiConfig,
}
const Detalle: React.FC<Props> = ({ dataContenido }) => {
    const dataPrint = dataContenido.data.contenido_principal
    return (
        <div className={styles.seccionAcerca}>
            {/* <RasgadoIzq style={{ bottom: "-26rem" }} /> */}
            <Image
                className={`rasgadoIzq4`}
                src="/images/rasgado.webp"
                width={1326}
                height={890}
                alt="De Chiripa :: Formulario Suscribete"
            />
            <Image
                className={`imageBackGroundContainer`}
                src="/images/topBg.png"
                width={3456}
                height={357}
                alt="De Chiripa :: Preparate para lo que viene"
            />
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer} ${styles.sectionOne} `}>
                    <div>
                        <h1 className={Humane600.className}>
                            <Image
                                className={styles.sticker1}
                                src='/images/sticker1.svg'
                                width='54'
                                height='73'
                                alt=''
                            />
                            ACERCA <br />
                            <span>
                                DE CHIRIPA
                                <Image
                                    className={styles.sticker2}
                                    src='/images/flecha2.svg'
                                    width='190'
                                    height='172'
                                    alt=''
                                />
                            </span>
                        </h1>
                        <p className={styles.Poppins500}>
                            {dataPrint?.descripcion_corta}
                        </p>
                    </div>
                    <div>
                        <div className={styles.XchicoBoxImage}>
                            <Image
                                className={styles.sticker2}
                                src='/images/c.webp'
                                width='1278'
                                height='1678'
                                alt=''
                            />
                        </div>
                    </div>
                    <div>
                        <div className={Poppins400.className}>
                            <Image
                                className={styles.sticker2}
                                src='/images/logoVerde.svg'
                                width='161'
                                height='163'
                                alt=''
                            />
                            <div
                                dangerouslySetInnerHTML={{ __html: dataPrint?.descripcion || '' }}
                            >
                            </div>
                            {/* <p className={Poppins400.className}>
                                Creemos que la chiripa no es solo un golpe de suerte; es ese momento único que puede cambiarte el día, el mes... ¡o la vida! Nuestro rollo es simple: conectar con jóvenes como tú, que siempre están buscando una oportunidad para ganar en grande.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detalle
