'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image'
import gsap from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from '@/styles/sass/banner.module.sass'




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
        infinite: false,
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
    // const handleScrollToSection = () => {
    //     gsap.to(window, { duration: .5, scrollTo: '.formularioRegistroHome' });
    // }


    return (
        <div className={styles.containerBanner}>

            <div className={styles.containerCarrusel}>
                <Slider {...settings}>
                    <div>
                        <div className={styles.itemsCarrusel}>
                            <Image
                                src="/images/banner3.webp"
                                alt="Banner"
                                width="1825"
                                height="1280"
                            />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default BannerMain
