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

const GraciasReset = () => {
    return (
        <>
            <div className={styles.boxTitular}>
                <h1 className={Humane600.className}>Restablecer</h1>
                <h2 className={poppins600.className}>
                    Se ha restablecido su contraseña. <br />
                </h2>
                <div className={styles.infoGracias}>
                    <p className={poppins500.className}>
                        Hemos enviado un correo con las instrucciones para cambiar tu contraseña. Si no lo ves en tu bandeja principal, revisa el correo no deseado.
                    </p>
                    <p className={poppins500.className}>
                        ¡Es tu momento de ganar con deChiripa! Porque aquí, la suerte no lo decide todo... ¡lo decides tú!
                    </p>
                    {/* <a href="https://whatsapp.com/channel/0029Vavpfw24yltWH5h3hc0J" target='_blank' className={poppins500.className}>&Uacute;nete al WhatsApp del Grupo De Chiripa</a> */}
                </div>

            </div>
        </>
    )
}

export default GraciasReset
