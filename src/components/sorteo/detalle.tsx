'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import styles from '@/styles/sass/sorteodetalle.module.sass'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import CaracteristicasSorteo from "@/components/sorteo/caracteristicas"


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
const Poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const DetalleSorteo = () => {
    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    const sliderRef1 = useRef<Slider | null>(null);
    const sliderRef2 = useRef<Slider | null>(null);
    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);
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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const objeto = {
        "gallery": [
            {
                id: 1,
                type: 1,
                image: 'producto1.png',
                video: ''
            },
            {
                id: 2,
                type: 1,
                image: 'producto2.png',
                video: ''
            },
            {
                id: 3,
                type: 1,
                image: 'producto3.png',
                video: ''
            },
            {
                id: 4,
                type: 1,
                image: 'producto4.png',
                video: ''
            },
            {
                id: 1,
                type: 1,
                image: 'producto1.png',
                video: ''
            },
            {
                id: 2,
                type: 1,
                image: 'producto2.png',
                video: ''
            },
            {
                id: 3,
                type: 1,
                image: 'producto3.png',
                video: ''
            },
            {
                id: 4,
                type: 1,
                image: 'producto4.png',
                video: ''
            },
            {
                id: 5,
                type: 2,
                image: 'producto4.png',
                video: `<iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/aqlplKfpNx8?si=iH-B6nebWz0X6KoX"
                        title="YouTube video player"
                        frameBorder="0" // Usa 'frameBorder' en lugar de 'frameorder'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>`
            }
        ]
    };
    return (
        <div className={`backgroundContainer`}>
            <Image
                className={`imageBackGroundContainer`}
                src="/images/fondocuerpo.webp"
                width={5184}
                height={4365}
                alt="De Chiripa :: Preparate para lo que viene"
                priority={true}
            />
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <Slider {...settings} className={`${styles.carruselMainBox} carruselMainBox`} asNavFor={nav2 as Slider} ref={sliderRef1}>
                            {objeto.gallery.map(item => (
                                <div key={item.id}>
                                    {
                                        (item.type === 1) ? (
                                            <div className={styles.viewImagenMain}>
                                                <Image
                                                    className={styles.stickerBox}
                                                    src={`/images/${item.image}`}
                                                    width={1322}
                                                    height={1004}
                                                    alt="De Chiripa :: Scooter Electrico Hiley Tiger 8 GT "
                                                />
                                            </div>
                                        ) : (
                                            <div dangerouslySetInnerHTML={{ __html: item.video }}></div>
                                        )
                                    }

                                </div>
                            ))}

                        </Slider>
                        <Slider
                            {...settings}
                            asNavFor={nav1 as Slider}
                            ref={sliderRef2}
                            slidesToShow={4}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            className={styles.secondThumbailBox}
                        >
                            {objeto.gallery.map(item => (
                                <div key={item.id}>
                                    <div className={styles.imageThumbailBox}>
                                        {
                                            (item.type === 1) ? (
                                                <Image
                                                    className={styles.stickerBox}
                                                    src={`/images/${item.image}`}
                                                    width={1322}
                                                    height={1004}
                                                    alt="De Chiripa :: Scooter Electrico Hiley Tiger 8 GT "
                                                />
                                            ) : (
                                                <div dangerouslySetInnerHTML={{ __html: item.video }}></div>
                                            )
                                        }

                                    </div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                    <div>
                        <h1 className={Humane600.className}>
                            <span>
                                Scooter Electrico Hiley Tiger 8 GT
                                <Image
                                    className={styles.stickerBox}
                                    src="/images/sticker.svg"
                                    width={54}
                                    height={73}
                                    alt="De Chiripa :: Preparate para lo que viene"
                                />
                                <Image
                                    className={styles.stickerBox}
                                    src="/images/sticker.svg"
                                    width={54}
                                    height={73}
                                    alt="De Chiripa :: Preparate para lo que viene"
                                />
                            </span>
                        </h1>
                        <div className={styles.boxPrice}>
                            <div>
                                <p className={Poppins600.className}>
                                    Precio por <br />
                                    Ticket:
                                </p>
                                <h3 className={Humane600.className}>
                                    S/5.00
                                </h3>
                            </div>
                            <div>
                                <Image
                                    className={styles.bgTicket}
                                    src="/images/bgticket.png"
                                    width={364}
                                    height={144}
                                    alt="De Chiripa :: Preparate para lo que viene"
                                />
                                <div className={styles.infoBox}>
                                    <h4 className={Humane600.className}>
                                        9,500
                                    </h4>
                                    <p className={Poppins600.className}>
                                        Ticteks
                                        Disponibles
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.descripcionBox}>
                            <h2 className={Poppins500.className}>Especificaciones principales</h2>
                            <ul className={Poppins500.className}>
                                <li>Doble motor de 600W c/u</li>
                                <li>Luz LED y Bocina</li>
                                <li>Display Central con NFC</li>
                                <li>Autonomía: 55Km (modo 1)</li>
                                <li>Velocidad Máxima: 50Km/h</li>
                            </ul>
                        </div>
                        <div className={styles.addTicketBox}>
                            <div>
                                <p>-</p>
                                <input type="text" name='' placeholder='0' />
                                <p>+</p>
                            </div>
                            <div>
                                <button type='button'>
                                    <Image
                                        className={styles.bgTicket2}
                                        src="/images/ticket2.svg"
                                        width={30}
                                        height={30}
                                        alt="Añadir Tickets"
                                    />
                                    <span>Añadir Tickets</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CaracteristicasSorteo />
        </div>
    )
}

export default DetalleSorteo
