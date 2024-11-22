'use client'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import styles from '@/styles/sass/acercaPage.module.sass'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


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
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const Equipo = () => {
    function SamplePrevArrow(props: ArrowProps) {
        const { className, onClick } = props;
        return (
            <div
                className={`${className} ${styles.botonBannerHeader} ${styles.stickLeft}`}
                onClick={onClick}
            />
        );
    }
    function SampleNextArrow(props: ArrowProps) {
        const { className, onClick } = props;
        return (
            <div
                className={`${className} ${styles.botonBannerHeader} ${styles.stickRight}`}
                onClick={onClick}
            />
        );
    }
    const settings = {
        centerPadding: "60px",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        nav: false,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={styles.seccionEquipo}>
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <h2 className={Humane600.className}>
                            <Image
                                className={styles.sticker1}
                                src='/images/sticker1.svg'
                                width='54'
                                height='73'
                                alt=''
                            />
                            NUESTRO <br />
                            <span>
                                EQUIPO
                                <Image
                                    className={styles.sticker2}
                                    src='/images/flecha.webp'
                                    width='118'
                                    height='133'
                                    alt=''
                                />
                            </span>
                        </h2>
                    </div>
                    <div>
                        <div className={styles.containerCarrusel}>
                            <Slider {...settings}>
                                <div className={styles.equipoBox}>
                                    <div className={styles.cardEquipo}>
                                        <div className={styles.cardBody}>
                                            <Image
                                                className={styles.sticker2}
                                                src='/images/1.webp'
                                                width='400'
                                                height='570'
                                                alt=''
                                            />
                                        </div>
                                        <div className={styles.cardFooter}>
                                            <h3 className={Humane600.className}>EDUARDO</h3>
                                            <h2 className={Humane600.className}>GOMEZ PÉREZ</h2>
                                            <p className={Poppins600.className}>CEO DE CHIRIPA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.equipoBox}>
                                    <div className={styles.cardEquipo}>
                                        <div className={styles.cardBody}>
                                            <Image
                                                className={styles.sticker2}
                                                src='/images/2.webp'
                                                width='400'
                                                height='570'
                                                alt=''
                                            />
                                        </div>
                                        <div className={styles.cardFooter}>
                                            <h3 className={Humane600.className}>MARCOS</h3>
                                            <h2 className={Humane600.className}>ESPINOZA REYES</h2>
                                            <p className={Poppins600.className}>MARKETING</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.equipoBox}>
                                    <div className={styles.cardEquipo}>
                                        <div className={styles.cardBody}>
                                            <Image
                                                className={styles.sticker2}
                                                src='/images/3.webp'
                                                width='400'
                                                height='570'
                                                alt=''
                                            />
                                        </div>
                                        <div className={styles.cardFooter}>
                                            <h3 className={Humane600.className}>JOTA </h3>
                                            <h2 className={Humane600.className}>GARCÍA CARRANZA</h2>
                                            <p className={Poppins600.className}>GERENTE GENERAL</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipo
