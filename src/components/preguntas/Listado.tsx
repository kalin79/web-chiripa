'use client'
import { useState } from "react";
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/preguntasPage.module.sass'
import RasgadoIzq from '@/components/fondo/RasgadoIzq'


const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})


const Poppins600 = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

const Poppins300 = Poppins({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
})


const Listado = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (indice: number) => {
        if (indice === activeIndex) {
            setActiveIndex(null)
        } else {
            setActiveIndex(indice)
        }
    }

    return (
        <div className={styles.seccionPreguntas}>
            <RasgadoIzq style={{ bottom: "-16rem" }} />
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
                            PREGUNTAS <span>
                                <Image
                                    className={styles.stickerH1}
                                    src="/images/sticker1.svg"
                                    width={54}
                                    height={73}
                                    alt="TÉRMINOS Y CONDICIONES"
                                />
                                FRECUENTES
                            </span>
                        </h1>
                    </div>
                    <div>
                        <div className={`${styles.accordionContainer}`}>
                            <Image
                                className={styles.sticker2}
                                src="/images/2.svg"
                                width={129}
                                height={115}
                                alt=""
                            />
                            <Image
                                className={styles.sticker1}
                                src="/images/e.svg"
                                width={129}
                                height={115}
                                alt=""
                            />
                            <div className={`${styles.accordionItem} ${(activeIndex === 1) ? styles.active : ''}`}>
                                <div className={styles.accordionHeader} onClick={() => toggleAccordion(1)}>
                                    <h2 className={Poppins600.className}>1. ¿Cómo sé si soy uno de los ganadores semanales?</h2>
                                    <Image
                                        className={styles.stickerH1}
                                        src="/images/arrow5.svg"
                                        width={12}
                                        height={24}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.accordionBody}>
                                    <p className={Poppins300.className}>
                                        Hermanito, si eres uno de los suertudos el equipo de DeChiripa se
                                        contactará contigo a través del correo y número que nos brindaste
                                        al momento de suscribirte en un máximo de 72 horas.
                                        De igual modo, podrás revisar la lista de ganadores
                                        en nuestra página web y en nuestra cuenta de Instagram.
                                        Nuestro correo de contacto es <a href="mailto:info@dechiripa.com">info@dechiripa.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.accordionItem} ${(activeIndex === 2) ? styles.active : ''}`}>
                                <div className={styles.accordionHeader} onClick={() => toggleAccordion(2)}>
                                    <h2 className={Poppins600.className}>2. ¿Puedo participar desde el extranjero?</h2>
                                    <Image
                                        className={styles.stickerH1}
                                        src="/images/arrow5.svg"
                                        width={12}
                                        height={24}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.accordionBody}>
                                    <p className={Poppins300.className}>
                                        Hermanito, si eres uno de los suertudos el equipo de DeChiripa se
                                        contactará contigo a través del correo y número que nos brindaste
                                        al momento de suscribirte en un máximo de 72 horas.
                                        De igual modo, podrás revisar la lista de ganadores
                                        en nuestra página web y en nuestra cuenta de Instagram.
                                        Nuestro correo de contacto es <a href="mailto:info@dechiripa.com">info@dechiripa.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listado
