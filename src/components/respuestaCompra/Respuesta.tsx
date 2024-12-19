'use client'
import { useContext } from 'react';
import Link from 'next/link'

import { cartContext } from '@/context/CartContent';
import Image from 'next/image'
import localFont from 'next/font/local'
import styles from '@/styles/sass/form.module.sass'
import { Poppins } from 'next/font/google'
import { formatCurrency } from "@/helpers/funciones"

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
    const { respondeCart } = useContext(cartContext);
    // useEffect(() => {
    //     resetCartProducts()
    // }, [])
    // resetCartProducts()

    return (
        <div className={`${styles.compraBox}  ${styles.graciasContainer}`}>
            <Image
                className={`imageBackGroundContainer`}
                src="/images/topBg.png"
                width={3456}
                height={357}
                alt="De Chiripa :: Preparate para lo que viene"
                priority={true}
            />
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
                {/* {JSON.stringify(respondeCart)} */}
                {
                    respondeCart?.status ? (
                        <span className={Humane600.className}>!Te felicito!</span>
                    ) : (
                        <span className={Humane600.className}>!ERROR!</span>
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
                    respondeCart?.status ? (
                        <>

                            <p className={Poppins500.className}>N&uacute;mero de Pedido: {respondeCart.numeroPedido}</p>
                            <p className={Poppins500.className}>Importe Total: {formatCurrency(respondeCart.importeTotal)}</p>
                            <p className={Poppins500.className}>Moneda: {respondeCart.tipoMoneda}</p>
                            <p className={Poppins500.className}>Fecha y Hora: {respondeCart.fechayHora}</p>
                            <p className={Poppins500.className}>Tarjeta: {respondeCart.tarjeta}</p>
                            <p className={Poppins500.className}>Brand: {respondeCart.marcaTarjeta}</p>
                            <div className='transaccionRespuestaBox'>
                                <p>Ademas te hemos enviado a tu correo la boleta, en caso no este en tu bandeja de entrada revisa tus no deseados</p>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* {JSON.stringify(respondeCart)} */}
                            <p className={Poppins500.className}>N&uacute;mero de Pedido: {respondeCart?.numeroPedido}</p>
                            <p className={Poppins500.className}>Fecha y Hora: {respondeCart?.fechayHora}</p>
                            <p className={Poppins500.className}>Descripci&oacute;n: {respondeCart?.descripcion}</p>
                            <div className='transaccionRespuestaBox'>
                                <Link className='btnMain btnLg' href="/proceso-de-compra">Intentar Nuevamente</Link>
                            </div>
                        </>

                    )
                }


            </span>

        </div>

    )
}

export default Respuesta
