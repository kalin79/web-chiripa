'use client'

import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/sass/homeGanadores.module.sass'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import RasgadoIzqSmall from "@/components/fondo/RasgadoIzqSmall"


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

const Poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
const Poppins700 = Poppins({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})
const Ganadores = () => {
    return (
        <div className={styles.ganadoresSeccion}>
            <RasgadoIzqSmall />
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <h2 className={Humane600.className}>
                            <Image
                                className={styles.sticker1}
                                src='/images/rayado3.svg'
                                width='348'
                                height='51'
                                alt=''
                            />
                            NUESTROS <br />
                            <span>
                                <Image
                                    className={styles.sticker2}
                                    src='/images/sticker.svg'
                                    width='54'
                                    height='73'
                                    alt=''
                                />
                                GANADORES
                            </span>

                        </h2>
                    </div>
                </div>
                <div className={`gridContainer ${styles.gridContainer2}`}>
                    <div className={styles.cardSorteo}>
                        <div className={styles.cardFecha}>
                            <h3 className={Poppins500.className}>Se sorteó:</h3>
                            <h2 className={Poppins700.className}>24-NOV</h2>
                        </div>
                        <Image
                            className={styles.fondoCardSorteo}
                            src="/images/marco.png"
                            width={554}
                            height={807}
                            alt="Iphone 15 Pro Max 256gb"
                        />
                        <div className={styles.cardImage}>
                            <Image
                                src="/images/sorteo21.png"
                                width={573}
                                height={399}
                                alt="Iphone 15 Pro Max 256gb"
                            />
                        </div>
                        <div className={styles.cardInfo}>
                            <h2 className={Poppins600.className}>Laptop GAMER Asus Rogue i9</h2>
                            <h3 className={Poppins600.className}>SORTEO 980-84AD</h3>
                        </div>
                        <div className={styles.cardFooter}>
                            <h4 className={Poppins600.className}>Carlos Augusto Espinoza Galarza</h4>
                            <h5 className={Poppins700.className}>GANADOR</h5>
                        </div>
                    </div>
                    <div className={styles.cardSorteo}>
                        <div className={styles.cardFecha}>
                            <h3 className={Poppins500.className}>Se sorteó:</h3>
                            <h2 className={Poppins700.className}>24-NOV</h2>
                        </div>
                        <Image
                            className={styles.fondoCardSorteo}
                            src="/images/marco.png"
                            width={554}
                            height={807}
                            alt="Iphone 15 Pro Max 256gb"
                        />
                        <div className={styles.cardImage}>
                            <Image
                                src="/images/sorteo22.png"
                                width={392}
                                height={384}
                                alt="Iphone 15 Pro Max 256gb"
                            />
                        </div>
                        <div className={styles.cardInfo}>
                            <h2 className={Poppins600.className}>MOTO HONDA Navi 2024</h2>
                            <h3 className={Poppins600.className}>SORTEO 980-84AD</h3>
                        </div>
                        <div className={styles.cardFooter}>
                            <h4 className={Poppins600.className}>Yoshiro Geofrey Olivera </h4>
                            <h5 className={Poppins700.className}>GANADOR</h5>
                        </div>
                    </div>
                    <div className={styles.cardSorteo}>
                        <div className={styles.cardFecha}>
                            <h3 className={Poppins500.className}>Se sorteó:</h3>
                            <h2 className={Poppins700.className}>24-NOV</h2>
                        </div>
                        <Image
                            className={styles.fondoCardSorteo}
                            src="/images/marco.png"
                            width={554}
                            height={807}
                            alt="Iphone 15 Pro Max 256gb"
                        />
                        <div className={styles.cardImage}>
                            <Image
                                src="/images/sorteo23.png"
                                width={392}
                                height={384}
                                alt="Iphone 15 Pro Max 256gb"
                            />
                        </div>
                        <div className={styles.cardInfo}>
                            <h2 className={Poppins600.className}>Nintendo SWITCH</h2>
                            <h3 className={Poppins600.className}>SORTEO 980-84AD</h3>
                        </div>
                        <div className={styles.cardFooter}>
                            <h4 className={Poppins600.className}>Paco Zevallos Rodriguez</h4>
                            <h5 className={Poppins700.className}>GANADOR</h5>
                        </div>
                    </div>
                </div>
                <div className={styles.btnBoxGanadores}>
                    <Link href="/ganadores" className={`btnMain ${Poppins600.className} ${styles.btnMain}`}>¡Ellos Ganaron!</Link>
                </div>
            </div>
        </div>
    )
}

export default Ganadores
