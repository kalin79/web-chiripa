'use client'

import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/sass/homeAcerca.module.sass'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

// import RasgadoIzqSmall from "@/components/fondo/RasgadoIzqSmall"


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
const Acerca = () => {
    return (
        <div className={styles.acercaSeccion}>
            {/* <RasgadoIzqSmall /> */}
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <h2 className={Humane600.className}>
                            <span>
                                <Image
                                    className={styles.sticker2}
                                    src='/images/sticker.svg'
                                    width='54'
                                    height='73'
                                    alt='ACERCA DE CHIRIPA'
                                />
                                ACERCA  <br />
                            </span>
                            DE CHIRIPA

                        </h2>
                    </div>
                    <div>
                        <div>
                            <p className={Poppins400.className}>
                                <Image
                                    className={styles.sticker3}
                                    src='/images/x.svg'
                                    width='215'
                                    height='221'
                                    alt=''
                                />
                                En DE CHIRIPA somos la plataforma que le pone sazón y emoción a la suerte. Creemos que la chiripa no es solo un golpe de suerte; es ese momento único que puede cambiarte el día, el mes... ¡o la vida! Nuestro rollo es simple: conectar con jóvenes como tú, que siempre están buscando una oportunidad para ganar en grande.
                            </p>
                            <div className={styles.btnBox}>
                                <Link href="/acerca-de-chiripa" className={`btnMain ${styles.btnMain}`}>Sobre Nosotros</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Acerca
