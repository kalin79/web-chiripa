'use client'
import { useState, useRef, useEffect, useContext, ChangeEvent } from 'react';

import { cartContext } from '@/context/CartContent';

import Image from 'next/image'
import styles from '@/styles/sass/sorteodetalle.module.sass'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import gsap from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import CaracteristicasSorteo from "@/components/sorteo/caracteristicas"
import MasSorteo from "@/components/sorteo/massorteos"


import { ApiResponseProduct, SorteosApi } from "@/interfaces/sorteos"


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

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface Props {
    dataObject: ApiResponseProduct,
    idSorteo: string,
}

const DetalleSorteo: React.FC<Props> = ({ dataObject, idSorteo }) => {
    const detalleSorteo: SorteosApi = dataObject.data.product;

    const { addCartProducts } = useContext(cartContext);

    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    const [quantityTicket, setQuantityTicket] = useState("1");
    const sliderRef1 = useRef<Slider | null>(null);
    const sliderRef2 = useRef<Slider | null>(null);

    const handleClickAddCart = () => {
        const id = parseInt(idSorteo);
        const title = detalleSorteo.title_large || '';
        const price = detalleSorteo.price ? parseInt(detalleSorteo.price) : 0;
        const quantity = parseInt(quantityTicket)
        const image = detalleSorteo.image || '';

        addCartProducts({ id, title, price, quantity, image })

        console.log(
            { id, title, price, quantity, image }
        )


        gsap.to(window, { duration: .5, scrollTo: '.headerNavMain' });





    }

    const handleChange = (e: ChangeEvent<FormElement>) => {
        const inputValue = e.target.value;
        // Permitir borrar (campo vacío) y validar números de 1 a 10 dígitos
        if (/^\d*$/.test(inputValue) && inputValue.length <= 9 && (inputValue === "" || inputValue[0] !== "0")) {
            setQuantityTicket(inputValue)
        }

    }

    const handleClickDecreaseQutity = () => {
        if (quantityTicket === "") {
            setQuantityTicket("1")
        } else {
            if (parseInt(quantityTicket) >= 2) {
                setQuantityTicket((parseInt(quantityTicket) - 1).toString())
            }
        }

    }

    const handleClickIncreaseQutity = () => {
        if (quantityTicket === "") {
            setQuantityTicket("1")
        } else {
            setQuantityTicket((parseInt(quantityTicket) + 1).toString())
        }
    }

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
        gsap.registerPlugin(ScrollToPlugin)
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

    return (
        <>
            <Image
                className={`imageBackGroundContainer`}
                src="/images/topBg.png"
                width={3456}
                height={357}
                alt="De Chiripa :: Preparate para lo que viene"
                priority={true}
            />
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <Slider {...settings} className={`${styles.carruselMainBox} carruselMainBox`} asNavFor={nav2 as Slider} ref={sliderRef1}>
                            {detalleSorteo.gallery?.map((item, index) => (
                                <div key={index}>
                                    <div className={styles.viewImagenMain}>
                                        <Image
                                            className={styles.stickerBox}
                                            src={`${item}`}
                                            width={1322}
                                            height={1004}
                                            alt="De Chiripa :: Scooter Electrico Hiley Tiger 8 GT "
                                        />
                                    </div>
                                    {/* {
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
                                            <div className={styles.videoFull} dangerouslySetInnerHTML={{ __html: item.video }}></div>
                                        )
                                    } */}

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
                            {detalleSorteo.gallery?.map((item, index) => (
                                <div key={index}>
                                    <div className={styles.imageThumbailBox}>
                                        <Image
                                            className={styles.stickerBox}
                                            src={item}
                                            width={1322}
                                            height={1004}
                                            alt="De Chiripa :: Scooter Electrico Hiley Tiger 8 GT "
                                        />

                                    </div>
                                    {/* <div className={styles.imageThumbailBox}>
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

                                    </div> */}
                                </div>
                            ))}

                        </Slider>
                    </div>
                    <div>
                        <h1 className={Humane600.className}>
                            <span>
                                {detalleSorteo.title_large}
                                {/* {JSON.stringify(detalleSorteo)} */}
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
                                    S/{detalleSorteo.price}
                                </h3>
                            </div>
                            <div>
                                <Image
                                    className={styles.bgTicket}
                                    src="/images/bgticket.svg"
                                    width={364}
                                    height={144}
                                    alt="De Chiripa :: Preparate para lo que viene"
                                />
                                <div className={styles.infoBox}>
                                    <h4 className={Humane600.className}>
                                        {detalleSorteo.ticket_disponibles || detalleSorteo.aforo}
                                    </h4>
                                    <p className={Poppins600.className}>
                                        Ticteks
                                        Disponibles
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.descripcionBox} estilosCMS`}>
                            <div
                                className={styles.contentContainer} // Aplica estilos específicos
                                dangerouslySetInnerHTML={{ __html: detalleSorteo.description ? detalleSorteo.description : 'Descripción no disponible' }}
                            ></div>

                        </div>
                        <div className={styles.addTicketBox}>
                            <div>
                                <p onClick={handleClickDecreaseQutity}>-</p>
                                <input type="text" name='quantityTicket' onChange={handleChange} value={quantityTicket} placeholder='0' />
                                <p onClick={handleClickIncreaseQutity}>+</p>
                            </div>
                            <div>
                                {/* {totalQuantityTicket}, {totalPriceTicket}, {totalProducts} */}

                                <button type='button' onClick={handleClickAddCart}>
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
            <CaracteristicasSorteo dataObject={dataObject} />
            <MasSorteo dataObject={dataObject} />
        </>
    )
}

export default DetalleSorteo
