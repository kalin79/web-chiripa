'use client'
import { useState } from 'react';
import Image from 'next/image'
// import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/sorteodetalle.module.sass'

// const Humane600 = localFont({
//     src: '../../../public/fonts/Humane-SemiBold.woff2',
//     weight: '600',
//     style: 'normal',
// })


// const Poppins500 = Poppins({
//     weight: '500',
//     subsets: ['latin'],
//     display: 'swap',
// })

// const Poppins400 = Poppins({
//     weight: '400',
//     subsets: ['latin'],
//     display: 'swap',
// })

const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
})


const Caracteristicas = () => {
    const [activeTab, setActiveTab] = useState<number>(1)
    const [texto, settexto] = useState(`<h2>
                                La Tiger 8 GT viene mas equipada con luz LED,
                                bocina, display central y ruedas con aire para una mejor calidad de rodada.
                            </h2>
                            <p >
                                Siempre con su doble motor de 600 W, al igual que la
                                Tiger 8 PRO que brinda excelente potencia para tus viajes!
                            </p>
                            <h3 >MOTOR</h3>
                            <ul >
                                <li>
                                    Capacidad de batería: 48v 15.6amp
                                </li>
                                <li>
                                    Autonomía: hasta 55km (modo 1)
                                </li>
                                <li>
                                    Tiempo de carga: 8 horas aprox.
                                </li>
                            </ul>
                            <h3 >BATERÍA</h3>
                            <ul >
                                <li>
                                    Capacidad de batería: 48v 15.6amp
                                </li>
                                <li>
                                    Autonomía: hasta 55km (modo 1)
                                </li>
                                <li>
                                    Tiempo de carga: 8 horas aprox.
                                </li>
                            </ul>
                            <h3 >OTRAS CARACTERÍSTICAS</h3>
                            <ul >
                                <li>
                                    Ruedas Neumaticas de 8.5″
                                </li>
                                <li>
                                    Display Central con bloqueo NFC
                                </li>
                                <li>
                                    Suspensión trasera y delantera (Spring)
                                </li>
                                <li>
                                    Frenos de tambor (trasero y delantero)
                                </li>
                                <li>
                                    Peso de scooter: 22kg
                                </li>
                                <li>
                                    Peso máximo de usuario: 120 kg
                                </li>
                                <li>
                                    Material del Marco: Aluminio
                                </li>
                                <li>
                                    Resistencia al Agua: IP54
                                </li>
                                <li>
                                    Luz de cubierta delantera, luz de cubierta trasera, luz de freno.
                                </li>
                            </ul>`)
    const handleTabClick = (index: number) => {
        setActiveTab(index)
    };
    return (
        <div className={`${styles.caracteristicasBox}`}>
            <Image
                className={styles.rasgadoBox}
                src="/images/rasgado.png"
                width={1326}
                height={890}
                alt="De Chiripa :: Formulario Suscribete"
                priority={true}
            />
            <div className='container'>
                <div className={`${styles.tabCaracteristicas}`}>
                    <div className={styles.headerTab}>
                        <h3 className={`${activeTab === 1 ? styles.active : ''} ${poppins.className}`} onClick={() => handleTabClick(1)}>DESCRIPCIÓN</h3>
                        <h3 className={`${activeTab === 2 ? styles.active : ''} ${poppins.className}`} onClick={() => handleTabClick(2)}>INFORMACIÓN ADICIONAL</h3>
                        <h3 className={`${activeTab === 3 ? styles.active : ''} ${poppins.className}`} onClick={() => handleTabClick(3)}>MÉTODOS DE ENTREGA</h3>
                    </div>
                    <div className={`${styles.contentTab} ${poppins.className}`}>
                        <div className={`${activeTab === 1 ? styles.active : ''} ${poppins.className}`} >
                            <div
                                className={styles.contentContainer} // Aplica estilos específicos
                                dangerouslySetInnerHTML={{ __html: texto }}
                            ></div>
                        </div>
                        <div className={`${activeTab === 2 ? styles.active : ''} ${poppins.className}`} >
                            hola
                        </div>
                        <div className={`${activeTab === 3 ? styles.active : ''} ${poppins.className}`} >
                            mundo
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Caracteristicas
