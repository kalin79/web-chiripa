'use client'
// import { useEffect, useState } from 'react';

import Image from 'next/image'
import styles from '@/styles/sass/vivo.module.sass'
import localFont from 'next/font/local'

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})



const Vivo = () => {
    // const [boolVivo, setBoolVivo] = useState(true)
    const boolVivo = true
    // useEffect(() => {
    //     setBoolVivo(true)
    // }, [])
    return (
        <div className={styles.pageVivo}>
            {/* {JSON.stringify(boolVivo)} SSS */}
            <Image
                className={`imageBackGroundContainer`}
                src="/images/topBg.png"
                width={3456}
                height={357}
                alt="De Chiripa :: Preparate para lo que viene"

            />
            {
                (boolVivo) && (
                    <div className={`container`}>
                        <div className={`gridContainer ${styles.gridContainer}`}>
                            <div className={styles.bannerVivoContainer}>
                                <Image
                                    className={styles.sticker3}
                                    src='/images/remolino.svg'
                                    width='123'
                                    height='122'
                                    alt=''
                                />
                                <Image
                                    className={styles.sticker4}
                                    src='/images/culebra.svg'
                                    width='203'
                                    height='39'
                                    alt=''
                                />
                                <div>
                                    <Image
                                        className={styles.sticker1}
                                        src='/images/sticker1.svg'
                                        width='35'
                                        height='47'
                                        alt=''
                                    />
                                    <Image
                                        className={styles.sticker2}
                                        src='/images/trueno.svg'
                                        width='38'
                                        height='59'
                                        alt=''
                                    />
                                    <h2 className={Humane600.className}>TRANSMISIONES <span>EN VIVO</span></h2>
                                </div>
                                <div>
                                    <a href="#" target='_blank' className={`btnMain ${styles.btnMain}`}>Ver transmisión</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Vivo
