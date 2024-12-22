'use client'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/ganadoresPage.module.sass'
import { formatDate } from '@/helpers/funciones'
// import RasgadoIzq from '@/components/fondo/RasgadoIzq'
const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})



const Poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
const Poppins600 = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})
const Poppins700 = Poppins({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

interface Props {
    dataGanadores: any,
}
const Listado: React.FC<Props> = ({ dataGanadores }) => {
    const ganadores = dataGanadores?.data?.sorteos
    return (
        <div className={styles.ganadoresAcerca}>
            {/* <RasgadoIzq style={{ bottom: "-10rem" }} /> */}
            <Image
                className={`rasgadoIzq3`}
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
                            LISTADO DE <span>GANADORES</span>
                        </h1>
                        <p className={Poppins500.className}>
                            ¡Hey, amig@ De-Chiripa! 🎉 Aquí están tod@s nuestr@s ganadores del mes, ¡y tú podrías estar entre ell@s muy pronto! 💥 No pierdas la oportunidad de probar tu suerte y ser el/la próximo/a en llevarte un premio. 🤑 ¡Anímate, juega, y deja que la suerte te sorprenda con De-Chiripa! 🍀
                        </p>
                    </div>
                </div>
                <div className={`${styles.gridContainer2}`}>
                    {
                        ganadores?.map((item: any, index: any) => {
                            if (item.ganador.length > 0) {
                                return (
                                    <div key={index} className={styles.cardSorteo}>
                                        <div className={styles.cardFecha}>
                                            <h3 className={Poppins500.className}>Se sorteó:</h3>
                                            <h2 className={Poppins700.className}>{formatDate(item.fecha)}</h2>
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
                                                src={item.image}
                                                width={573}
                                                height={399}
                                                alt="Iphone 15 Pro Max 256gb"
                                            />
                                        </div>
                                        <div className={styles.cardInfo}>
                                            <h2 className={Poppins600.className}>{item.name}</h2>
                                            {/* <h3 className={Poppins600.className}>SORTEO 980-84AD</h3> */}
                                        </div>
                                        <div className={styles.cardFooter}>
                                            <h4 className={Poppins600.className}>{item.ganador}</h4>
                                            <h5 className={Poppins700.className}>GANADOR</h5>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Listado
