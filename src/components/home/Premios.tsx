'use client'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import styles from '@/styles/sass/home.module.sass'

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})
const Poppins500 = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const Poppins700 = Poppins({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

const Premios = () => {
    return (
        <div className={`container ${styles.containerPremios}`}>
            <div className={`gridContainer ${styles.gridContainer}`}>
                <div>
                    <h2 className={`${Humane600.className} titularPremioHome`}>
                        <span>
                            GÁNATE ESTOS
                            <Image
                                className={styles.sticker}
                                src="/images/sticker2.png"
                                width={81}
                                height={110}
                                alt="De Chiripa :: Participa"
                                priority={true}
                            />
                        </span><br />
                        <span className={styles.txtVerde}>SUPER PREMIOS</span>
                    </h2>
                    <p className={`${Poppins500.className} descripcionPremioHome`}>
                        Ganar es más fácil con nosotros:
                        ¡Probabilidades superiores a la competencia!
                    </p>
                </div>
                <div>
                    <div className={styles.cabeceraPremios}>
                        <h2 className={`${Humane600.className} ${styles.stytitularPremioHome}`}><span>PRIMER SORTEO</span></h2>
                    </div>
                    <div className={styles.boxPremios}>
                        <div className={`${styles.itemPremio} itemPremioHome`}>
                            <div className={styles.cartelBox}>
                                <h3>1er PREMIO</h3>
                            </div>
                            <Image
                                className={styles.fondoPremio}
                                src="/images/fondoPremio2.webp"
                                width={554}
                                height={851}
                                alt="De Chiripa :: Participa"
                                priority={true}
                            />
                            <div className={styles.detallePremio}>
                                <div className={`${styles.imageContainer}`}>
                                    <Image
                                        className={`${styles.productoPremio}  ${styles.bigImage}`}
                                        src="/images/sorteo4.png"
                                        width={600}
                                        height={486}
                                        alt="De Chiripa :: Iphone Pro Max 15"
                                        priority={true}
                                    />
                                </div>
                                <div className={styles.footerContent}>
                                    <h3 className={Poppins700.className}>
                                        Samsung Galaxy S24 Ultra
                                    </h3>
                                    <p className={Poppins500.className}>
                                        Entra en la tecnolog&iacute;a eSIM, pantalla retina y c&aacute;maras.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className={`${styles.itemPremio} itemPremioHome`}>
                            <div className={styles.cartelBox}>
                                <h3>2do PREMIO</h3>
                            </div>
                            <Image
                                className={styles.fondoPremio}
                                src="/images/fondoPremio2.webp"
                                width={554}
                                height={851}
                                alt="De Chiripa :: Participa"
                                priority={true}
                            />
                            <div className={styles.detallePremio}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        className={`${styles.productoPremio}  ${styles.bigImage}`}
                                        src="/images/sorteo3.png"
                                        width={600}
                                        height={488}
                                        alt="De Chiripa :: SEGWAY NINEBOT"
                                        priority={true}
                                    />
                                </div>
                                <div className={styles.footerContent}>
                                    <h3 className={Poppins700.className}>Laptop de última generación</h3>
                                    <p className={Poppins500.className}>Potencia y velocidad para tus trabajos</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Premios
