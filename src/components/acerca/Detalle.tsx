'use client'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/acercaPage.module.sass'
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

const Detalle = () => {
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
                            En DE CHIRIPA somos la plataforma que le pone sazón y emoción a la suerte.
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
                        <div>
                            <Image
                                className={styles.sticker2}
                                src='/images/logoVerde.svg'
                                width='161'
                                height='163'
                                alt=''
                            />
                            <p className={Poppins400.className}>
                                Creemos que la chiripa no es solo un golpe de suerte; es ese momento único que puede cambiarte el día, el mes... ¡o la vida! Nuestro rollo es simple: conectar con jóvenes como tú, que siempre están buscando una oportunidad para ganar en grande.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detalle
