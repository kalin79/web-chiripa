"use client";
import localFont from 'next/font/local'

import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/login.module.sass'

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})



const poppins600 = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

const poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})

const Gracias = () => {
    return (
        <>
            <div className={styles.boxTitular}>
                <h1 className={Humane600.className}>GRACIAS</h1>
                <h2 className={poppins600.className}>
                    Ya estás dentro. <br />
                </h2>
                <div className={styles.infoGracias}>
                    <p>
                        🎉 ¡Bienvenido/a a De Chiripa! 🎉
                    </p>
                    <p>
                        Ahora eres parte de nuestra comunidad donde la suerte te sonríe. 💫
                    </p>
                    <p>Inicia sesión y participa en nuestros sorteos para ganar premios increíbles.</p>
                    <p>
                        ¡Estamos emocionados de tenerte con nosotros! 🌟
                    </p>
                    <a href="https://whatsapp.com/channel/0029Vavpfw24yltWH5h3hc0J" target='_blank' className={poppins500.className}>&Uacute;nete al WhatsApp del Grupo De Chiripa</a>
                </div>

            </div>
        </>
    )
}

export default Gracias
