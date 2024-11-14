'use client'
// import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/sass/sorteos.module.sass'

import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'


import FormularioSuscripcion from "@/components/suscripcion/formulario"
import { ApiResponseSorteos, SorteosApi } from "@/interfaces/sorteos"


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

interface Props {
    dataSorteos: ApiResponseSorteos,
}

const ListadoSorteos: React.FC<Props> = ({ dataSorteos }) => {
    const sorteos: SorteosApi[] = dataSorteos?.data.sorteos;
    // const [sorteos, setSorteos] = useState<SorteosApi[]>(dataSorteos.data.sorteos);

    return (
        <>
            <Image
                className={`imageBackGroundContainer`}
                src="/images/topBg.png"
                width={3456}
                height={357}
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
                        {/* {JSON.stringify(dataSorteos.data.sorteos, null,)} */}
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

                        {
                            sorteos.map((item, index) => (
                                <div key={index} className={styles.cardSorteo}>
                                    <div className={`${styles.cardFechaFull}  ${styles.cardFecha}`}>
                                        <h3 className={Poppins500.className}>Sorteo:</h3>
                                        {
                                            (item.fecha != '') ? (
                                                <h2 className={Poppins700.className}>{item.fecha}</h2>
                                            ) : (
                                                <h2 className={Poppins700.className}>Pr&oacute;ximamente</h2>
                                            )
                                        }

                                    </div>
                                    <Image
                                        className={styles.fondoCardSorteo}
                                        src="/images/marco.png"
                                        width={554}
                                        height={807}
                                        alt="Iphone 15 Pro Max 256gb"
                                    />
                                    <div className={styles.cardImage}>
                                        {(item?.image) && (
                                            <>
                                                {/* {item.image} */}
                                                <Image
                                                    src={item.image}
                                                    width={500}
                                                    height={600}
                                                    alt="Iphone 15 Pro Max 256gb"
                                                />
                                            </>
                                        )}

                                    </div>
                                    <div className={styles.cardInfo}>
                                        <h2 className={Poppins600.className}>{item.name}</h2>
                                        <Link href={`/sorteo/${item.slug}`} className='btnCar'>
                                            <Image
                                                className={styles.bgTicket2}
                                                src="/images/ticket2.svg"
                                                width={30}
                                                height={30}
                                                alt="Añadir Tickets"
                                            />
                                            <span>Comprar</span>
                                        </Link>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <div>
                                            <h2>
                                                Probabilidad <br />
                                                de Ganar:
                                            </h2>
                                            <h3>
                                                {item.probabilidad_ganar}
                                            </h3>
                                        </div>
                                        <div>
                                            <h2>
                                                Tickets <br />
                                                disponibles:
                                            </h2>
                                            <h3>
                                                {item.aforo}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className={styles.cardSorteo}>
                            <div className={styles.anuncioSorteo}>
                                <span>AGOTADO</span>
                            </div>
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
                            </div>
                            <div className={styles.cardFooter}>
                                <div>
                                    <h2>
                                        Probabilidad <br />
                                        de Ganar:
                                    </h2>
                                    <h3>
                                        89 mil
                                        veces más.
                                    </h3>
                                </div>
                                <div>
                                    <h2>
                                        Tickets <br />
                                        disponibles:
                                    </h2>
                                    <h3>
                                        100
                                    </h3>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <FormularioSuscripcion />
        </>
    )
}

export default ListadoSorteos
