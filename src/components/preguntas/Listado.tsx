'use client'
import { useState } from "react";
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/preguntasPage.module.sass'
// import RasgadoIzq from '@/components/fondo/RasgadoIzq'
import { ObjApiFaq } from "@/interfaces/contenido"


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

interface Props {
    dataContenido: ObjApiFaq[],
}
const Listado: React.FC<Props> = ({ dataContenido }) => {
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
            {/* <RasgadoIzq style={{ bottom: "-16rem" }} /> */}
            <Image
                className={`rasgadoIzq2`}
                src="/images/rasgado.webp"
                width={1326}
                height={890}
                alt="De Chiripa :: Formulario Suscribete"
            />
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
                            {/* {JSON.stringify(dataContenido)} */}
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

                            {
                                dataContenido.map((faq, index) => (
                                    <div key={index} className={`${styles.accordionItem} ${(activeIndex === (index + 1)) ? styles.active : ''}`}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(index + 1)}>
                                            <h2 className={Poppins600.className}>{index + 1}. {faq.pregunta}</h2>
                                            <Image
                                                className={styles.stickerH1}
                                                src="/images/arrow5.svg"
                                                width={12}
                                                height={24}
                                                alt=""
                                            />
                                        </div>
                                        <div className={styles.accordionBody}>
                                            <div
                                                className={Poppins300.className} // Aplica estilos específicos
                                                dangerouslySetInnerHTML={{ __html: faq.respuesta }}
                                            ></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listado
