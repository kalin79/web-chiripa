"use client";
import Image from 'next/image'
import styles from '@/styles/sass/historial.module.sass'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import { formatCurrency } from "@/helpers/funciones"
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

interface Props {
    dataListado: any,
}
const Compras: React.FC<Props> = ({ dataListado }) => {
    const historiales = dataListado.data
    return (
        <div className={styles.comprasPage}>
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
                            <span>HISTORIAL DE COMPRAS</span>
                        </h1>
                        {/* {JSON.stringify(dataListado)} */}
                        <p className={Poppins500.className}>
                            ¡Aquí podrás consultar el historial completo de todas las compras que has realizado en Dechiripa! Cada compra es una nueva oportunidad, y si aún no has sido ganador, no te preocupes: ¡tu momento está más cerca de lo que crees! Sigue participando y recuerda que la suerte siempre llega a quienes persisten. 💪✨
                        </p>
                    </div>
                </div>
                <div className={`gridContainer ${styles.gridContainer2}`}>
                    {
                        historiales.map((item: any, index: number) => (
                            <div key={index} className={styles.itemHistorial}>
                                <div className={styles.imageBox}>
                                    <Image
                                        className={styles.stickerH1}
                                        src={item.image}
                                        width={108}
                                        height={108}
                                        alt="LISTADO DE Sorteos"
                                        quality={75}
                                    />
                                </div>
                                <div className={styles.infoBox}>
                                    <h2 className={Humane600.className}>{item.nombre_sorteo}</h2>
                                    <h3 className={Poppins500.className}>Tickets: <span>{item.cantidad_ticket}</span></h3>
                                    <h3 className={Poppins500.className}>Monto Total: <span>{formatCurrency(item.precio_total_ticket)}</span></h3>
                                    <div className={styles.fechaSorteoBox}>
                                        <p className={Poppins500.className}>Sorteo es: <span>{item.fecha_sorteo}</span></p>
                                        <p className={Poppins500.className}>Compr&oacute;: <span>{item.fecha_compra}</span></p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Compras
