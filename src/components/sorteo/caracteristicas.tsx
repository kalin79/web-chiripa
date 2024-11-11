'use client'
import { useState } from 'react';
import Image from 'next/image'
// import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/sorteodetalle.module.sass'
import { ApiResponseProduct, SorteosApi } from "@/interfaces/sorteos"

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

interface Props {
    dataObject: ApiResponseProduct,
}


const Caracteristicas: React.FC<Props> = ({ dataObject }) => {
    const detalleSorteo: SorteosApi = dataObject.data.product;
    const [activeTab, setActiveTab] = useState<number>(1)

    const handleTabClick = (index: number) => {
        setActiveTab(index)
    };
    return (
        <div className={`${styles.caracteristicasBox}`}>
            <Image
                className={styles.rasgadoBox}
                src="/images/rasgado.webp"
                width={1326}
                height={890}
                alt="De Chiripa :: Formulario Suscribete"
                priority={true}
            />
            <div className='container'>
                {/* {JSON.stringify(detalleSorteo)} */}
                <div className={`${styles.tabCaracteristicas}`}>
                    <div className={styles.headerTab}>
                        <h3 className={`${activeTab === 1 ? styles.active : ''} ${poppins.className}`} onClick={() => handleTabClick(1)}>{detalleSorteo.titulo_tab_1}</h3>
                        {
                            (detalleSorteo.titulo_tab_2 && detalleSorteo.titulo_tab_2 != '') && (
                                <h3 className={`${activeTab === 2 ? styles.active : ''} ${poppins.className}`} onClick={() => handleTabClick(2)}>{detalleSorteo.titulo_tab_2}</h3>
                            )
                        }
                        {
                            (detalleSorteo.titulo_tab_3 && detalleSorteo.titulo_tab_3?.length > 0) && (
                                <h3 className={`${activeTab === 3 ? styles.active : ''} ${poppins.className}`} onClick={() => handleTabClick(3)}>{detalleSorteo.titulo_tab_3}</h3>
                            )
                        }
                    </div>
                    <div className={`${styles.contentTab} ${poppins.className}`}>
                        <div className={`${activeTab === 1 ? styles.active : ''} ${poppins.className}`} >
                            <div
                                className={styles.contentContainer} // Aplica estilos específicos
                                dangerouslySetInnerHTML={{ __html: detalleSorteo.description_tab_1 ? detalleSorteo.description_tab_1 : 'Descripción no disponible' }}

                            ></div>
                        </div>
                        {
                            (detalleSorteo.titulo_tab_2 && detalleSorteo.titulo_tab_2 != '') && (
                                <div className={`${activeTab === 2 ? styles.active : ''} ${poppins.className}`} >
                                    <div
                                        className={styles.contentContainer} // Aplica estilos específicos
                                        dangerouslySetInnerHTML={{ __html: detalleSorteo.description_tab_2 ? detalleSorteo.description_tab_2 : 'Descripción no disponible' }}

                                    ></div>
                                </div>
                            )
                        }
                        {
                            (detalleSorteo.titulo_tab_3 && detalleSorteo.titulo_tab_3 != '') && (
                                <div className={`${activeTab === 3 ? styles.active : ''} ${poppins.className}`} >
                                    <div
                                        className={styles.contentContainer} // Aplica estilos específicos
                                        dangerouslySetInnerHTML={{ __html: detalleSorteo.description_tab_3 ? detalleSorteo.description_tab_3 : 'Descripción no disponible' }}

                                    ></div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Caracteristicas
