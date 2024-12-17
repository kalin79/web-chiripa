'use client'
import { useContext } from 'react';
import { cartContext } from '@/context/CartContent';
import Image from 'next/image'
import localFont from 'next/font/local'
import styles from '@/styles/sass/form.module.sass'
import { Poppins } from 'next/font/google'

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
    display: 'swap',
})


const Poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
const Respuesta = () => {
    const { respuestaCompra } = useContext(cartContext);
    // useEffect(() => {
    //     resetCartProducts()
    // }, [])
    // resetCartProducts()

    return (
        <div className={`${styles.compraBox}  ${styles.graciasContainer}`}>
            <div className={styles.titularBox}>
                <Image
                    className={styles.imageSticker2}
                    src="/images/sticker.svg"
                    width={54}
                    height={73}
                    alt="De Chiripa :: Preparate para lo que viene"
                />
                <Image
                    className={styles.imageManta}
                    src="/images/manta.svg"
                    width={478}
                    height={156}
                    alt="De Chiripa :: Preparate para lo que viene"
                />
                {
                    respuestaCompra === 'error' ? (
                        <span className={Humane600.className}>!Error!</span>
                    ) : (
                        <span className={Humane600.className}>!Te felicito!</span>
                    )
                }

            </div>
            <span className={`${Poppins500.className} ${styles.mensajeBox}`}>
                <Image
                    className={styles.imageSticker2}
                    src="/images/remolino2.svg"
                    width={129}
                    height={115}
                    alt="De Chiripa :: Preparate para lo que viene"
                />
                {
                    respuestaCompra === 'error' ? (
                        <p className={Poppins500.className}>
                            Se produjo un error en la compra, vuelva intentarlo mas tarde.
                        </p>
                    ) : (
                        <p className={Poppins500.className}>
                            {respuestaCompra}
                        </p>
                    )
                }


            </span>

        </div>

    )
}

export default Respuesta
