'use client'

import Image from 'next/image'

import styles from '@/styles/sass/beneficio.module.sass'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import RasgadoIzq from "@/components/fondo/RasgadoIzq"

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})
const Poppins600 = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

const Poppins400 = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const Beneficios = () => {
    return (
        <div className={`${styles.seccionBenefecio}`}>
            <RasgadoIzq />
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <div>
                            <h1 className={Humane600.className}>
                                <Image
                                    className={styles.sticker2}
                                    src='/images/remolino2.svg'
                                    width='99'
                                    height='88'
                                    alt=''
                                />
                                <span>
                                    <Image
                                        className={styles.sticker1}
                                        src='/images/sticker.svg'
                                        width='54'
                                        height='73'
                                        alt=''
                                    />
                                    BENEFICIOS <br />
                                </span>
                                DE CHIRIPA
                            </h1>
                        </div>
                        <div>
                            <Image
                                className={styles.chicoCompu}
                                src='/images/chico.webp'
                                width='788'
                                height='797'
                                alt=''
                            />
                        </div>
                    </div>
                    <div>
                        <Image
                            className={styles.flechaSticker}
                            src='/images/flecha.webp'
                            width='118'
                            height='133'
                            alt=''
                        />
                        <h2 className={Poppins600.className}>Más oportunidades de ganar</h2>
                        <p className={Poppins400.className}>Al vender menos boletos que la competencia, las posibilidades de ganar están más a la mano. ¡Si la suerte es de chiripa, aquí lo es en serio!</p>

                        <h2 className={Poppins600.className}>Premios que no te esperas</h2>
                        <p className={Poppins400.className}>Desde los últimos celulares hasta scooters eléctricos y más, cada sorteo es una oportunidad para llevarte algo épico.</p>

                        <h2 className={Poppins600.className}>Todo en vivo y a la vista</h2>
                        <p className={Poppins400.className}>Con nuestras transmisiones en vivo, ves cómo todo pasa en tiempo real. Aquí no hay truco, ¡solo chiripa!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beneficios
