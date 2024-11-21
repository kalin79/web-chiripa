'use client'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/acercaPage.module.sass'
import RasgadoDerSmall from '@/components/fondo/RasgadoDerSmall'
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

const Poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
const Vision = () => {
    return (
        <div className={styles.seccionVision}>
            <RasgadoDerSmall />
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <h2 className={Humane600.className}>
                            <span>
                                <Image
                                    className={`${styles.sticker1}`}
                                    src="/images/sticker.svg"
                                    width={29}
                                    height={39}
                                    alt="VISIÓN"
                                />
                                VISIÓN
                            </span>
                        </h2>
                        <p className={Poppins400.className}>Ser la plataforma líder de sorteos en Latinoamérica, reconocida por la transparencia, innovación y conexión con una comunidad joven, tecnológica y apasionada por las oportunidades únicas.</p>
                    </div>
                    <div>
                        <h2 className={Humane600.className}>
                            <span>
                                MISIÓN
                                <Image
                                    className={`${styles.sticker2}`}
                                    src="/images/sticker.svg"
                                    width={29}
                                    height={39}
                                    alt="VISIÓN"
                                />
                            </span>
                        </h2>
                        <p className={Poppins400.className}>
                            <Image
                                className={`${styles.sticker3}`}
                                src="/images/culebra.svg"
                                width={203}
                                height={39}
                                alt="VISIÓN"
                            />
                            Ofrecer a nuestra comunidad una experiencia de sorteos emocionante, accesible y confiable, brindando productos de alta calidad que transformen sueños en realidades, todo con un toque de creatividad y frescura.
                        </p>
                    </div>
                </div>
                <div className={`gridContainer ${styles.gridContainer2}`}>
                    <div>
                        <h2 className={`${Humane600.className} ${styles.espaciadoMenos}`}>
                            <span>
                                <Image
                                    className={`${styles.sticker2}`}
                                    src="/images/sticker.svg"
                                    width={29}
                                    height={39}
                                    alt="VISIÓN"
                                />
                                VALORES
                            </span>
                        </h2>
                    </div>
                    <div>
                        <h3 className={Poppins500.className}>Innovación</h3>
                        <p className={Poppins400.className}>
                            Nos adaptamos constantemente a las tendencias tecnológicas para brindar sorteos atractivos y actualizados.
                        </p>
                    </div>
                    <div>
                        <h3 className={Poppins500.className}>Transparencia</h3>
                        <p className={Poppins400.className}>
                            Garantizamos procesos claros, justos y confiables para todos los participantes.
                        </p>
                    </div>
                    <div>
                        <h3 className={Poppins500.className}>Diversión</h3>
                        <p className={Poppins400.className}>
                            Hacemos de cada sorteo una experiencia emocionante y llena de expectativas.
                        </p>
                    </div>
                    <div>
                        <h3 className={Poppins500.className}>Inclusión</h3>
                        <p className={Poppins400.className}>
                            Diseñamos oportunidades para que todos, sin importar su presupuesto, puedan ganar grandes premios.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Vision
