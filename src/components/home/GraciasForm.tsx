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

const Poppins600 = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

const GraciasForm = () => {
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
                <span className={Humane600.className}><span className={Poppins600.className}>¡</span>Te felicito<span className={Poppins600.className}>!</span></span>
            </div>
            <span className={`${Poppins500.className} ${styles.mensajeBox}`}>
                <Image
                    className={styles.imageSticker2}
                    src="/images/remolino2.svg"
                    width={129}
                    height={115}
                    alt="De Chiripa :: Preparate para lo que viene"
                />
                Ya estás dentro. <br />
                Atento a tu correo, pronto <strong>DeChiripa</strong> te dara la primera
                sorpresa. <br />
                El sorteo donde las probabilidades juegan a tu favor<br />

            </span>
            {/* <p className={Poppins500.className}>
                &Uacute;nete a nuestro grupo de WhatsApp dando click aqu&iacute;
            </p> */}
            <a href="#" target='_blank' className={Poppins500.className}>&Uacute;nete al Grupo De Chiripa</a>
        </div>
    )
}

export default GraciasForm
