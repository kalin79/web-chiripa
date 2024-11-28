'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/sass/sorteodetalle.module.sass'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { ApiResponseProduct, ApiSorteosRelacionados } from "@/interfaces/sorteos"


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

const Poppins700 = Poppins({
    weight: '700',
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

interface Props {
    dataObject: ApiResponseProduct,
}


const MasSorteos: React.FC<Props> = ({ dataObject }) => {
    const productsRelations: ApiSorteosRelacionados[] | undefined = dataObject.data.related_giveaways

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
    if ((productsRelations != undefined) && (productsRelations.length > 0)) {
        return (
            <div className='bgPosition'>
                <Image
                    className={`imageBackGroundContainer`}
                    src="/images/topBg.png"
                    width={3456}
                    height={357}
                    alt="De Chiripa :: Preparate para lo que viene"
                    priority={true}
                />
                <Image
                    className={styles.rasgadoBox2}
                    src="/images/rasgado_2.webp"
                    width={1326}
                    height={890}
                    alt="De Chiripa :: Formulario Suscribete"
                />
                <div className={styles.premiosSimilaresBox}>
                    <div className='container'>
                        <div className={`gridContainer ${styles.gridContainer}`}>
                            {
                                ((productsRelations != undefined) && (productsRelations.length > 0)) && (
                                    <div>
                                        <h3 className={Humane600.className}>
                                            HEY! MIRA <span>MÁS SORTEOS</span>
                                        </h3>
                                        <p className={Poppins600.className}>
                                            <span>
                                                <Image
                                                    className={styles.sticketBox}
                                                    src="/images/remolino3.svg"
                                                    width={129}
                                                    height={116}
                                                    alt="De Chiripa :: Mas Sorteos"
                                                />
                                                ¡Todo puede pasar en De Chiripa! Aquí, cada sorteo es una chance de llevarte premios que todos quieren.
                                            </span>
                                        </p>
                                    </div>
                                )
                            }

                            <div>
                                <Slider {...settings}>
                                    {
                                        ((productsRelations != undefined) && (productsRelations.length > 0)) && (
                                            productsRelations.map((item, index) => (
                                                <div key={index} className={styles.cardPremioSimilaresBox}>
                                                    <div className={styles.cardSorteo}>
                                                        <div className={`${styles.cardFechaFull}  ${styles.cardFecha}`}>
                                                            <h3 className={Poppins500.className}>Sorteo:</h3>
                                                            {
                                                                (item.fecha != '') ? (
                                                                    <h2 className={Poppins700.className}>{item.fecha}</h2>
                                                                ) : (
                                                                    <h2 className={Poppins700.className}>Pr&oacute;ximamente</h2>
                                                                )
                                                            }

                                                        </div>
                                                        <Image
                                                            className={styles.fondoCardSorteo}
                                                            src="/images/marco.png"
                                                            width={554}
                                                            height={807}
                                                            alt="Iphone 15 Pro Max 256gb"
                                                        />
                                                        <div className={styles.cardImage}>
                                                            {(item?.image) && (
                                                                <>
                                                                    {/* {item.image} */}
                                                                    <Image
                                                                        src={item.image}
                                                                        width={500}
                                                                        height={600}
                                                                        alt="Iphone 15 Pro Max 256gb"
                                                                    />
                                                                </>
                                                            )}

                                                        </div>
                                                        <div className={styles.cardInfo}>
                                                            <h2 className={Poppins600.className}>{item.name}</h2>
                                                            <Link href={`/sorteo/${item.slug}`} className='btnCar'>
                                                                <Image
                                                                    className={styles.bgTicket2}
                                                                    src="/images/ticket2.svg"
                                                                    width={30}
                                                                    height={30}
                                                                    alt="Añadir Tickets"
                                                                />
                                                                <span>Comprar</span>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.cardFooter}>
                                                            <div>
                                                                <h2>
                                                                    Probabilidad <br />
                                                                    de Ganar:
                                                                </h2>
                                                                <h3>
                                                                    {item.probabilidad_ganar}
                                                                </h3>
                                                            </div>
                                                            <div>
                                                                <h2>
                                                                    Tickets <br />
                                                                    disponibles:
                                                                </h2>
                                                                <h3>
                                                                    {item.aforo}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )
                                    }

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MasSorteos
