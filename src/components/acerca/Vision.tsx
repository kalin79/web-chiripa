'use client'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/acercaPage.module.sass'
import RasgadoDerSmall from '@/components/fondo/RasgadoDerSmall'
import { ObjApiConfig } from "@/interfaces/contenido"

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})


const Poppins400 = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const Poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
interface Props {
    dataContenido: ObjApiConfig,
}
const Vision: React.FC<Props> = ({ dataContenido }) => {
    const dataVision = dataContenido.data.vision
    const dataMision = dataContenido.data.mision
    const dataValores = dataContenido.data.valores
    return (
        <div className={styles.seccionVision}>
            <RasgadoDerSmall />
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <h2 className={Humane600.className}>
                            <span>
                                <Image
                                    className={`${styles.sticker1}`}
                                    src="/images/sticker.svg"
                                    width={29}
                                    height={39}
                                    alt="VISIÓN"
                                />
                                {dataVision?.titulo}
                            </span>
                        </h2>
                        <div
                            className={Poppins400.className}
                            dangerouslySetInnerHTML={{ __html: dataVision?.descripcion || '' }}
                        >
                        </div>
                        {/* <p className={Poppins400.className}>Ser la plataforma líder de sorteos en Latinoamérica, reconocida por la transparencia, innovación y conexión con una comunidad joven, tecnológica y apasionada por las oportunidades únicas.</p> */}
                    </div>
                    <div>
                        <h2 className={Humane600.className}>
                            <span>
                                {dataMision?.titulo}
                                <Image
                                    className={`${styles.sticker2}`}
                                    src="/images/sticker.svg"
                                    width={29}
                                    height={39}
                                    alt="VISIÓN"
                                />
                            </span>
                        </h2>
                        <div className={styles.contentCulebra}>
                            <Image
                                className={`${styles.sticker3}`}
                                src="/images/culebra.svg"
                                width={203}
                                height={39}
                                alt="VISIÓN"
                            />
                            <div
                                className={Poppins400.className}
                                dangerouslySetInnerHTML={{ __html: dataMision?.descripcion || '' }}
                            >
                            </div>
                        </div>
                        {/* <p className={Poppins400.className}>
                            <Image
                                className={`${styles.sticker3}`}
                                src="/images/culebra.svg"
                                width={203}
                                height={39}
                                alt="VISIÓN"
                            />
                            Ofrecer a nuestra comunidad una experiencia de sorteos emocionante, accesible y confiable, brindando productos de alta calidad que transformen sueños en realidades, todo con un toque de creatividad y frescura.
                        </p> */}
                    </div>
                </div>
                <div className={`gridContainer ${styles.gridContainer2}`}>
                    <div>
                        <h2 className={`${Humane600.className} ${styles.espaciadoMenos}`}>
                            <span>
                                <Image
                                    className={`${styles.sticker2}`}
                                    src="/images/sticker.svg"
                                    width={29}
                                    height={39}
                                    alt="VISIÓN"
                                />
                                VALORES
                            </span>
                        </h2>
                    </div>
                    {
                        dataValores?.map((item, index) => (
                            <div key={index}>
                                <h3 className={Poppins500.className}>{item.titulo}</h3>
                                <p className={Poppins400.className}>{item.descripcion}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Vision
