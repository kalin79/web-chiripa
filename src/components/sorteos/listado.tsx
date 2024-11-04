'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/sass/sorteos.module.sass'

import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'


import FormularioSuscripcion from "@/components/suscripcion/formulario"


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

const ListadoSorteos = () => {
    return (
        <div className={`backgroundContainer`}>
            <Image
                className={`imageBackGroundContainer`}
                src="/images/fondocuerpo.webp"
                width={5184}
                height={4365}
                alt="De Chiripa :: Preparate para lo que viene"
                priority={true}
            />
            <div className={`container containerContent`}>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <h1 className={Humane600.className}>
                            <Image
                                className={styles.stickerH1}
                                src="/images/sticker1.svg"
                                width={54}
                                height={73}
                                alt="LISTADO DE Sorteos"
                            />
                            LISTADO DE <span>SORTEOS</span>
                        </h1>
                        <p className={Poppins600.className}>
                            <Image
                                className={styles.stickerP}
                                src="/images/sticker2.svg"
                                width={129}
                                height={116}
                                alt="¡Todo puede pasar en De Chiripa!"
                            />
                            ¡Todo puede pasar en De Chiripa! Aquí, cada sorteo es una chance de llevarte premios que todos quieren.
                        </p>
                    </div>
                    <div>
                        <div className={styles.cardSorteo}>
                            <div className={styles.cardFecha}>
                                <h3 className={Poppins500.className}>Sorteo:</h3>
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
                                    src="/images/sorteo1.png"
                                    width={500}
                                    height={600}
                                    alt="Iphone 15 Pro Max 256gb"
                                />
                            </div>
                            <div className={styles.cardInfo}>
                                <h2 className={Poppins600.className}>Iphone 15 Pro Max 256gb</h2>
                                <Link href="/sorteo/iphone-15-pro-max-256gb" className='btnCar'>Comprar</Link>
                            </div>
                        </div>
                        <div className={styles.cardSorteo}>
                            <div className={styles.cardFecha}>
                                <h3 className={Poppins500.className}>Sorteo:</h3>
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
                                    src="/images/sorteo2.png"
                                    width={500}
                                    height={600}
                                    alt="Iphone 15 Pro Max 256gb"
                                />
                            </div>
                            <div className={styles.cardInfo}>
                                <h2 className={Poppins600.className}>Scooter eléctrico NineBot</h2>
                                <Link href="/sorteo/iphone-15-pro-max-256gb" className='btnCar'>Comprar</Link>
                            </div>
                        </div>
                        <div className={styles.cardSorteo}>
                            <div className={styles.cardFecha}>
                                <h3 className={Poppins500.className}>Sorteo:</h3>
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
                                    src="/images/sorteo3.png"
                                    width={500}
                                    height={600}
                                    alt="Iphone 15 Pro Max 256gb"
                                />
                            </div>
                            <div className={styles.cardInfo}>
                                <h2 className={Poppins600.className}>Laptop Gamer ASUS i9 Rogue</h2>
                                <Link href="/sorteo/iphone-15-pro-max-256gb" className='btnCar'>Comprar</Link>
                            </div>
                        </div>
                        <div className={styles.cardSorteo}>
                            <div className={styles.cardFecha}>
                                <h3 className={Poppins500.className}>Sorteo:</h3>
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
                                    src="/images/sorteo4.png?v=2"
                                    width={500}
                                    height={600}
                                    alt="Iphone 15 Pro Max 256gb"
                                />
                            </div>
                            <div className={styles.cardInfo}>
                                <h2 className={Poppins600.className}>Moto HONDA Navi 2024</h2>
                                <Link href="/sorteo/iphone-15-pro-max-256gb" className='btnCar'>Comprar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FormularioSuscripcion />
        </div>
    )
}

export default ListadoSorteos
