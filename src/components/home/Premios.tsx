'use client'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import styles from '@/styles/sass/home.module.sass'

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-Semibold.woff2',
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
                    <div className={`${styles.itemPremio} itemPremioHome`}>
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
                                    className={styles.productoPremio}
                                    src="/images/iphone.png"
                                    width={311}
                                    height={486}
                                    alt="De Chiripa :: Iphone Pro Max 15"
                                    priority={true}
                                />
                            </div>
                            <div className={styles.footerContent}>
                                <h3 className={Poppins700.className}>IPHONE PRO MAX 15</h3>
                                <p className={Poppins500.className}>Iphone 15 Pro Max 256gb</p>
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.itemPremio} itemPremioHome`}>
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
                                    className={styles.productoPremio}
                                    src="/images/scooter.png"
                                    width={311}
                                    height={486}
                                    alt="De Chiripa :: SEGWAY NINEBOT"
                                    priority={true}
                                />
                            </div>
                            <div className={styles.footerContent}>
                                <h3 className={Poppins700.className}>SEGWAY NINEBOT</h3>
                                <p className={Poppins500.className}>Scooter Eléctrico Ninebot
                                    E2 Pro Ninebot</p>
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.itemPremio} itemPremioHome`}>
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
                                    src="/images/game.png"
                                    width={311}
                                    height={486}
                                    alt="De Chiripa :: Iphone Pro Max 15"
                                    priority={true}
                                />
                            </div>
                            <div className={styles.footerContent}>
                                <h3 className={Poppins700.className}>GAMER LAPTOP</h3>
                                <p className={Poppins500.className}>Laptop Asus Intel Core i5
                                    de 12 núcleos 12GB 512GB SSD</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Premios
