'use client'

import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import styles from '@/styles/sass/form.module.sass'

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
const Gracias = () => {
    return (
        <div className={styles.graciasContainer}>
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
                <span className={Humane600.className}>!Te felicito!</span>
            </div>
            <span className={`${Poppins500.className} ${styles.mensajeBox}`}>
                <Image
                    className={styles.imageSticker2}
                    src="/images/remolino2.svg"
                    width={129}
                    height={115}
                    alt="De Chiripa :: Preparate para lo que viene"
                />
                <p className={Poppins500.className}>
                    ¡Gracias por escribirnos! En DE-Chiripa, valoramos mucho que te pongas
                    en contacto con nosotros. Uno de nuestros asesores estará revisando tu
                    consulta y se pondrá en contacto contigo lo más pronto posible.
                    ¡Estamos aquí para ayudarte y hacer tu experiencia aún más emocionante!
                    Mientras tanto, sigue explorando y dejando que la suerte te acompañe. 🍀
                </p>

            </span>

        </div>
    )
}

export default Gracias
