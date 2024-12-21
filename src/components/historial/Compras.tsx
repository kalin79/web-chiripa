"use client";
import Image from 'next/image'
import styles from '@/styles/sass/historial.module.sass'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
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
const Compras = () => {
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
                        <p className={Poppins500.className}>
                            ¡Aquí podrás consultar el historial completo de todas las compras que has realizado en Dechiripa! Cada compra es una nueva oportunidad, y si aún no has sido ganador, no te preocupes: ¡tu momento está más cerca de lo que crees! Sigue participando y recuerda que la suerte siempre llega a quienes persisten. 💪✨
                        </p>
                    </div>
                </div>
                <div className={`gridContainer ${styles.gridContainer2}`}>
                    <div className={styles.itemHistorial}>
                        <div className={styles.imageBox}>
                            <Image
                                className={styles.stickerH1}
                                src="/images/sorteo3.png"
                                width={108}
                                height={108}
                                alt="LISTADO DE Sorteos"
                                quality={75}
                            />
                        </div>
                        <div className={styles.infoBox}>
                            <h2 className={Humane600.className}>Iphone 15 Pro Max 256gb</h2>
                            <h3 className={Poppins500.className}>Tickets: <span>8</span></h3>
                            <h3 className={Poppins500.className}>Monto Total: <span>S./8.00</span></h3>
                            <div className={styles.fechaSorteoBox}>
                                <p className={Poppins500.className}>Sorteo es: <span>28/05/2025</span></p>
                                <p className={Poppins500.className}>Compr&oacute;: <span>24/05/2025</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compras
