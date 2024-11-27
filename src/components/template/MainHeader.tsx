'use client'

import { useContext, useState } from 'react';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

import { cartContext } from '@/context/CartContent';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import styles from '@/styles/sass/nav.module.sass'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'

import { formatCurrency } from "@/helpers/funciones"
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

const Poppins300 = Poppins({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
})


const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [activeUser, setActiveUser] = useState(false)
    const [activeMenuMovil, setActiveMenuMovil] = useState(false)
    const { totalProducts, deleteCartProducts, productActive, decreaseQuantity, increaseQuantity, cartProducts, CloseCartPopup, boolBolsa, totalPriceTicket } = useContext(cartContext);
    const pathname = usePathname();
    const handleClickCart = () => {
        router.push('/proceso-de-compra');
    }
    const setUpdateUserMenu = () => {
        setActiveUser((prevState) => !prevState)
    }
    const handleClickCloseMenu = () => {
        console.log(activeMenuMovil)
        setActiveMenuMovil((prevState) => !prevState)
    }
    return (
        <div className={styles.containerHeader}>
            <nav className={`${styles.navContainer} headerNavMain`}>
                <div className={`container gridContainer ${styles.gridContainer} ${Poppins600.className}`}>
                    <div>
                        <Image
                            className={styles.logoNav}
                            src="/images/logo.svg"
                            alt="DeChiripa"
                            width={164}
                            height={165}
                        />
                    </div>
                    <div className={activeMenuMovil ? styles.active : ''}>
                        <div className={styles.headerMovil}>
                            <Link href="/">
                                <Image
                                    className={styles.logoNav}
                                    src="/images/logomovil.svg"
                                    alt="DeChiripa"
                                    width={90}
                                    height={91}
                                />
                            </Link>
                            <button type="button" onClick={handleClickCloseMenu} className={` ${Poppins600.className}   ${styles.buttonClose}`}>X</button>
                        </div>
                        <div className={`${styles.itemsNav} ${Humane600.className} `}>
                            <Link href="/" className={`${pathname === '/' ? styles.active : ''}`}>
                                Inicio
                                <Image
                                    className={styles.curvaNav}
                                    src="/images/curve.svg"
                                    alt="DeChiripa"
                                    width={150}
                                    height={6}
                                />
                            </Link>
                            <Link href="/acerca-de-chiripa" className={`${pathname === '/acerca-de-chiripa' ? styles.active : ''}`}>
                                Acerca De Chiripa
                                <Image
                                    className={styles.curvaNav}
                                    src="/images/curve.svg"
                                    alt="DeChiripa"
                                    width={150}
                                    height={6}
                                />
                            </Link>
                            <Link href="/listado-de-sorteos" className={`${pathname === '/listado-de-sorteos' ? styles.active : ''}`}>
                                Listado de Sorteos
                                <Image
                                    className={styles.curvaNav}
                                    src="/images/curve.svg"
                                    alt="DeChiripa"
                                    width={150}
                                    height={6}
                                />
                            </Link>
                            <Link href="/ganadores" className={`${pathname === '/ganadores' ? styles.active : ''}`}>
                                Ganadores
                                <Image
                                    className={styles.curvaNav}
                                    src="/images/curve.svg"
                                    alt="DeChiripa"
                                    width={150}
                                    height={6}
                                />
                            </Link>
                        </div>
                        <div className={styles.authMovil}>
                            {
                                (!session) ? (
                                    <>
                                        <Link href="/auth/login" className='btnMain'>Iniciar Sesión</Link>
                                        <Link href="/auth/create" className='btnMain'>Quiero Registrarme</Link>
                                    </>
                                ) : (
                                    <div className={` ${styles.buttonSessionContainer}`}>
                                        <Link href="/usuario/mi-cuenta">
                                            <Image
                                                className={styles.iconUser}
                                                src="/images/userlogin.webp"
                                                alt="DeChiripa"
                                                width={24}
                                                height={24}
                                            />
                                            <p className={Humane600.className}>Mi cuenta</p>
                                        </Link>
                                        <Link href="/usuario/mi-historial">
                                            <Image
                                                className={styles.iconUser}
                                                src="/images/historial.webp"
                                                alt="DeChiripa"
                                                width={24}
                                                height={24}
                                            />
                                            <p className={Humane600.className}>Mi historial</p>
                                        </Link>

                                        <a
                                            onClick={() => signOut()}
                                        >
                                            <Image
                                                className={styles.iconUser}
                                                src="/images/logout.webp"
                                                alt="DeChiripa"
                                                width={24}
                                                height={24}
                                            />
                                            <p className={Humane600.className}>Cerrar sesi&oacute;n</p>
                                        </a>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    <div>
                        <div className={styles.accessBox}>
                            <div onClick={handleClickCloseMenu} className={styles.buttonMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={styles.iconUserBox}>
                                {
                                    (session) ? (
                                        <>
                                            {/* {JSON.stringify(activeUser)} */}
                                            <button type='button' onClick={setUpdateUserMenu}>
                                                <Image
                                                    className={styles.userNav}
                                                    src="/images/useractive.webp"
                                                    alt="DeChiripa"
                                                    width={24}
                                                    height={24}
                                                />
                                            </button>
                                            <div className={`${styles.menuUsercontainer} ${activeUser ? styles.activeUser : ''}`} >
                                                <Link href="/usuario/mi-cuenta">
                                                    <Image
                                                        className={styles.iconUser}
                                                        src="/images/userlogin.webp"
                                                        alt="DeChiripa"
                                                        width={24}
                                                        height={24}
                                                    />
                                                    <p className={Poppins300.className}>Mi cuenta</p>
                                                </Link>
                                                <Link href="/usuario/mi-historial">
                                                    <Image
                                                        className={styles.iconUser}
                                                        src="/images/historial.webp"
                                                        alt="DeChiripa"
                                                        width={24}
                                                        height={24}
                                                    />
                                                    <p className={Poppins300.className}>Mi historial</p>
                                                </Link>

                                                <a
                                                    onClick={() => signOut()}
                                                >
                                                    <Image
                                                        className={styles.iconUser}
                                                        src="/images/logout.webp"
                                                        alt="DeChiripa"
                                                        width={24}
                                                        height={24}
                                                    />
                                                    <p className={Poppins300.className}>Cerrar sesi&oacute;n</p>
                                                </a>
                                            </div>
                                        </>
                                    ) : (
                                        <Link href="/auth/login">
                                            <Image
                                                className={styles.userNav}
                                                src="/images/user.svg"
                                                alt="DeChiripa"
                                                width={24}
                                                height={25}
                                            />
                                        </Link>
                                    )
                                }
                            </div>


                            <button type='button' onClick={() => CloseCartPopup(true)}>
                                <p>{totalProducts}</p>
                                <Image
                                    className={styles.carNav}
                                    src="/images/car.svg"
                                    alt="DeChiripa"
                                    width={32}
                                    height={32}
                                />
                            </button>
                            {
                                (productActive.title != '') && (
                                    <div className={`${styles.productPopup}`}>
                                        <div>
                                            <Image
                                                className={styles.smallImage}
                                                src={productActive.image}
                                                alt="DeChiripa"
                                                width={375}
                                                height={512}
                                            />
                                        </div>
                                        <div>
                                            <h3>
                                                <Image
                                                    className={styles.checkBox}
                                                    src="/images/check.svg"
                                                    alt="DeChiripa"
                                                    width={18}
                                                    height={18}
                                                />
                                                <span>Agregaste</span>
                                            </h3>
                                            <h2>
                                                {productActive.title}
                                            </h2>
                                            <div>
                                                <h4>S/ {productActive.price * productActive.quantity}</h4>
                                                <p>
                                                    <Image
                                                        className={styles.ticketBox}
                                                        src="/images/ticket2.svg"
                                                        alt="DeChiripa"
                                                        width={24}
                                                        height={24}
                                                    />
                                                    <span>{productActive.quantity} Tickets</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div >
                <div className={`${styles.sideBarCart} ${(boolBolsa ? styles.active : '')}`}>
                    <div className={`${styles.sideBarWrapper}`}>
                        <div className={`${styles.sideBarContent}`}>
                            <div className={styles.slideOut}>
                                <div className={styles.overflowFull}>
                                    <div className={styles.siderBarHeader}>
                                        <h3 className={Poppins600.className}>Mi bolsa de sorteos</h3>
                                        {/* {JSON.stringify(cartProducts)} */}
                                        <button type='button' onClick={() => CloseCartPopup(false)} className={`${styles.btnClose} ${Poppins300.className}`}>X</button>
                                    </div>
                                    <div className={styles.siderBarListProducts}>
                                        {
                                            cartProducts.map((product, index) => (
                                                <div key={index} className={styles.products}>
                                                    <div className={styles.itemProduct}>
                                                        <figure>
                                                            <Image
                                                                className={styles.smallImage}
                                                                src={product.image}
                                                                alt="DeChiripa"
                                                                width={148}
                                                                height={164}
                                                            />
                                                        </figure>
                                                        <div>
                                                            <button type='button' onClick={() => deleteCartProducts(product)}>
                                                                <span>Eliminar</span>
                                                                <Image
                                                                    src="/images/trash.svg"
                                                                    alt="DeChiripa"
                                                                    width={10}
                                                                    height={12}
                                                                />
                                                            </button>
                                                            <div className={styles.description}>
                                                                <h3>{product.title}</h3>
                                                            </div>
                                                            <div className={styles.priceCar}>
                                                                <div className={styles.addTicketBox}>
                                                                    <div className={styles.addTicketInfo}>
                                                                        <div className={styles.addTicketWrapper}>
                                                                            {
                                                                                (product.id !== undefined) && (
                                                                                    <>
                                                                                        <p onClick={() => { decreaseQuantity(product.id ?? 0) }}>-</p>
                                                                                        <input type="text" disabled placeholder='0' value={product.quantity} />
                                                                                        <p onClick={() => { increaseQuantity(product.id ?? 0) }}>+</p>
                                                                                    </>
                                                                                )
                                                                            }

                                                                        </div>
                                                                        <div className={styles.addTicketInfoBtn}>Cantidad de tickets</div>
                                                                    </div>
                                                                    <h3 className={Poppins600.className}>{formatCurrency(product.price * product.quantity)}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.sideBarFooter}`}>
                            <div className={Poppins600.className}>
                                <p>Subtotal</p>
                                <h4>{formatCurrency(totalPriceTicket)}</h4>
                            </div>
                            <div>
                                <button type='button' onClick={handleClickCart} className={`${styles.btnMain} btnMain btnLg`}>Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header
