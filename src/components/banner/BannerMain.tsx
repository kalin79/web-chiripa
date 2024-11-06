'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image'


import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import gsap from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from '@/styles/sass/banner.module.sass'


const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})


const Poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
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

const BannerMain = () => {
    const boxRef = useRef<HTMLImageElement>(null);
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
        slidesToShow: 1,
        autoplay: true,
        speed: 500,
        nav: false,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Asegúrate de que la referencia no sea nula
            gsap.registerPlugin(ScrollToPlugin)
            if (boxRef.current) {
                gsap.to(boxRef.current, {
                    y: 20, // Mover 100 píxeles a la derecha
                    rotation: 0, // Rotar 360 grados
                    duration: 1, // Duración de 2 segundos
                    repeat: -1, // Repetir indefinidamente
                    ease: "power2.inOut", // Tipo de easing
                    // ease: "elastic.out(1, 0.3)", // Easing de rebote
                })
            }
        }
    }, [])

    // Función para manejar el clic y desplazarse a la sección
    const handleScrollToSection = () => {
        gsap.to(window, { duration: .5, scrollTo: '.formularioRegistroHome' });
    }


    return (
        <div className={styles.containerBanner}>
            <Image
                className={styles.imageBackGround}
                src="/images/fondo1.webp"
                width={5184}
                height={3672}
                alt="De Chiripa :: Preparate para lo que viene"
                priority={true}
            />
            {/* <Image
                className={styles.imageArrow}
                src="/images/arrow.png"
                ref={boxRef}
                width={136}
                height={248}
                alt="De Chiripa :: Regístrate y obtén tu usuario. Pronto multiplicarás tu suerte."
            /> */}
            <div className={styles.containerCarrusel}>
                <div className='container'>
                    <Slider {...settings}>
                        <div>
                            <div className={`gridContainer ${styles.itemCarrusel}`}>
                                <div>
                                    <div className={styles.titleContainer}>
                                        {/* <Image
                                            className={`${styles.stickerContainer} stickerAnimate`}
                                            src="/images/sticker.png"
                                            width={158}
                                            height={120}
                                            alt="De Chiripa :: COMPUTADORA GAMER"
                                        /> */}
                                        <h2 className={`${Humane600.className} ${styles.cartelSorteo}`}>
                                            <span>ÚNETE A NUESTROS SORTEOS</span>
                                        </h2>
                                        <h2 className={Humane600.className}>
                                            <span>LLÉVATE UNA</span> <br />
                                            <span>Laptop i7</span> <br />
                                            <span>Última generación</span> <br />
                                        </h2>
                                    </div>
                                    <h3 className={Poppins500.className}>
                                        Regístrate y obtén tu usuario.<br />
                                        Pronto multiplicarás tus probabilidades de ganar.
                                    </h3>
                                    <div className={styles.buttonContainer}>
                                        <button onClick={handleScrollToSection} className={`buttonClass ${Poppins600.className}`} type='button'>Regístrate</button>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src="/images/premio1.png"
                                            width={1133}
                                            height={789}
                                            alt="De Chiripa :: Regístrate y obtén tu usuario. Pronto multiplicarás tu suerte."
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`gridContainer ${styles.itemCarrusel}`}>
                                <div>
                                    <div className={styles.titleContainer}>
                                        {/* <Image
                                            className={`${styles.stickerContainer} stickerAnimate`}
                                            src="/images/sticker.png"
                                            width={158}
                                            height={120}
                                            alt="De Chiripa :: SCOOTER ELÉCTRICA"
                                        /> */}
                                        <h2 className={`${Humane600.className} ${styles.cartelSorteo}`}>
                                            <span>ÚNETE A NUESTROS SORTEOS</span>
                                        </h2>
                                        <h2 className={Humane600.className}>
                                            <span>LLÉVATE UN</span> <br />
                                            <span>SCOOTER</span> <br />
                                            <span>ELÉCTRICO</span> <br />
                                        </h2>
                                    </div>
                                    <h3 className={Poppins500.className}>
                                        Regístrate y obtén tu usuario.<br />
                                        Pronto multiplicarás tus probabilidades de ganar.
                                    </h3>
                                    <div className={styles.buttonContainer}>
                                        <button onClick={handleScrollToSection} className={`buttonClass ${Poppins600.className}`} type='button'>Regístrate</button>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src="/images/SCOOTER2024.webp"
                                            className={styles.imageResize}
                                            width={1133}
                                            height={789}
                                            alt="De Chiripa :: Regístrate y obtén tu usuario. Pronto multiplicarás tu suerte."
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`gridContainer ${styles.itemCarrusel}`}>
                                <div className={styles.centerItemBanner}>
                                    <div className={styles.titleContainer}>
                                        {/* <Image
                                            className={`${styles.stickerContainer} stickerAnimate`}
                                            src="/images/sticker.png"
                                            width={158}
                                            height={120}
                                            alt="De Chiripa :: SCOOTER ELÉCTRICA"
                                        /> */}
                                        <h2 className={`${Humane600.className} ${styles.cartelSorteo}`}>
                                            <span>ÚNETE A NUESTROS SORTEOS</span>
                                        </h2>

                                        <h2 className={`${Humane600.className} ${styles.titularPC}`}>
                                            <span>PRONTO DESCUBRIR&Aacute;S</span> <br />
                                            <span>DE CHIRIPA</span> <br />
                                        </h2>
                                        <h2 className={`${Humane600.className} ${styles.titularMovil}`}>
                                            <span>PRONTO</span> <br />
                                            <span>DESCUBRIRAS</span>  <br />
                                            <span>DE CHIRIPA</span> <br />
                                        </h2>
                                    </div>
                                    <h3 className={Poppins500.className}>
                                        Donde las probabilidades de ganar juegan a tu favor.
                                        Porque las matemáticas ¡no mienten!
                                    </h3>
                                    <div className={styles.buttonContainer}>
                                        <button onClick={handleScrollToSection} className={`buttonClass ${Poppins600.className}`} type='button'>Regístrate</button>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src="/images/influencer2.png"
                                            className={`${styles.imageResize2} ${styles.positionInfluencer}`}
                                            width={1133}
                                            height={789}
                                            alt="De Chiripa :: Regístrate y obtén tu usuario. Pronto multiplicarás tu suerte."
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`gridContainer ${styles.itemCarrusel}`}>
                                <div className={styles.centerItemBanner}>
                                    <div className={styles.titleContainer}>
                                        <h2 className={`${Humane600.className} ${styles.cartelSorteo}`}>
                                            <span>ÚNETE A NUESTROS SORTEOS</span>
                                        </h2>
                                        <h2 className={`${Humane600.className}`}>
                                            <span>LA PROBABILIDAD</span> <br />
                                            <span>REAL DE GANAR!</span> <br />
                                        </h2>
                                        {/* <h2 className={`${Humane600.className} ${styles.titularMovil}`}>
                                            <span>MENOS</span> <br />
                                            <span>JUGADORES,</span> <br />
                                            <span>MÁS</span> <br />
                                            <span>OPORTUNIDADES</span> <br />
                                        </h2> */}
                                    </div>
                                    <h3 className={Poppins500.className}>
                                        Mayor probabilidad, mayores sueños: Tu oportunidad real de ganar!
                                    </h3>
                                    <div className={styles.buttonContainer}>
                                        <button onClick={handleScrollToSection} className={`buttonClass ${Poppins600.className}`} type='button'>Regístrate</button>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src="/images/estudiante2.png"
                                            className={`${styles.imageResize3} ${styles.positionInfluencer2}`}
                                            width={1133}
                                            height={789}
                                            alt="De Chiripa :: Regístrate y obtén tu usuario. Pronto multiplicarás tu suerte."
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default BannerMain
