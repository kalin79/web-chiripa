'use client'

import Image from 'next/image'

import styles from '@/styles/sass/beneficio.module.sass'
import localFont from 'next/font/local'
// import { Poppins } from 'next/font/google'
import { ApiObjectHome } from "@/interfaces/home"

// import RasgadoIzq from "@/components/fondo/RasgadoIzq"

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})
// const Poppins600 = Poppins({
//     weight: '600',
//     subsets: ['latin'],
//     display: 'swap',
// })

// const Poppins400 = Poppins({
//     weight: '400',
//     subsets: ['latin'],
//     display: 'swap',
// })
interface Props {
    dataContenido: ApiObjectHome,
}
const Beneficios: React.FC<Props> = ({ dataContenido }) => {
    const data = dataContenido.data.beneficios
    return (
        <div className={`${styles.seccionBenefecio}`}>
            {/* <RasgadoIzq /> */}
            <Image
                className={`rasgadoIzq2`}
                src="/images/rasgado.webp"
                width={1326}
                height={890}
                alt="De Chiripa :: Formulario Suscribete"
            />
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <div>
                            <h1 className={Humane600.className}>
                                <Image
                                    className={styles.sticker2}
                                    src='/images/remolino2.svg'
                                    width='99'
                                    height='88'
                                    alt=''
                                />
                                <span>
                                    <Image
                                        className={styles.sticker1}
                                        src='/images/sticker.svg'
                                        width='54'
                                        height='73'
                                        alt=''
                                    />
                                    BENEFICIOS <br />
                                </span>
                                DE CHIRIPA
                            </h1>
                        </div>
                        <div>
                            <Image
                                className={styles.chicoCompu}
                                src='/images/chico.webp'
                                width='788'
                                height='797'
                                alt=''
                            />
                        </div>
                    </div>
                    <div>
                        <Image
                            className={styles.flechaSticker}
                            src='/images/flecha.webp'
                            width='118'
                            height='133'
                            alt=''
                        />
                        <div
                            className={styles.contentContainer} // Aplica estilos específicos
                            dangerouslySetInnerHTML={{ __html: data.descripcion }}
                        ></div>

                        {/* <h2 className={Poppins600.className}>Todo en vivo y a la vista</h2>
                        <p className={Poppins400.className}>Con nuestras transmisiones en vivo, ves cómo todo pasa en tiempo real. Aquí no hay truco, ¡solo chiripa!</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beneficios
