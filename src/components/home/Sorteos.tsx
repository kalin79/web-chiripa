'use client'
import Image from 'next/image'
import Link from 'next/link'

import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import styles from '@/styles/sass/homeSorteos.module.sass'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ApiObjectHome } from "@/interfaces/home"

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
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
interface Props {
    dataContenido: ApiObjectHome,
}
const Sorteos: React.FC<Props> = ({ dataContenido }) => {
    const data = dataContenido.data.sorteos
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
        // className: "center",
        // centerMode: true,
        // infinite: true,
        // slidesToShow: 2,
        // speed: 500,

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
        <div className={styles.sortoesContainer}>
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <h2 className={Humane600.className}>
                            <span>
                                <Image
                                    className={styles.sticker}
                                    src="/images/flecha2.svg"
                                    width={106}
                                    height={158}
                                    alt="PRÓXIMOS SORTEOS"
                                />
                                PRÓXIMOS
                            </span> <br />
                            SORTEOS
                        </h2>
                        <p className={Poppins400.className}>
                            ¿Listo para dejar que la chiripa haga lo suyo? Aquí tienes los próximos sorteos donde la suerte se encuentra con premios de otro nivel. Explora los premios que vienen y participa. Con un poquito de chiripa, el próximo ganador podrías ser tú.
                        </p>
                    </div>
                    <div>
                        <div className={styles.containerCarrusel}>
                            <Slider {...settings}>
                                {
                                    data.map((sorteos, index) => (
                                        <div key={index} className={styles.cardPremioSimilaresBox}>
                                            <div className={styles.cardSorteo}>
                                                <div className={styles.cardFecha}>
                                                    <h3 className={Poppins500.className}>Sorteo:</h3>
                                                    {
                                                        ((sorteos.fecha != undefined) && (sorteos.fecha != '')) ? (
                                                            <h2 className={Poppins700.className}>{sorteos.fecha}</h2>
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
                                                    alt={sorteos.name}
                                                />
                                                <div className={styles.cardImage}>
                                                    <Image
                                                        src={sorteos.image}
                                                        width={500}
                                                        height={600}
                                                        alt={sorteos.name}
                                                    />
                                                </div>
                                                <div className={styles.cardInfo}>
                                                    <h2 className={Poppins600.className}>{sorteos.name}</h2>
                                                    <Link href={`/sorteo/`} className='btnCar'>
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
                                                            {sorteos.probabilidad_ganar}
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <h2>
                                                            Tickets <br />
                                                            disponibles:
                                                        </h2>
                                                        <h3>
                                                            {sorteos.aforo}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sorteos
