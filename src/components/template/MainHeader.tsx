'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import styles from '@/styles/sass/nav.module.sass'
import { Poppins } from 'next/font/google'


const Poppins600 = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

const Header = () => {
    const pathname = usePathname();
    return (
        <div className={styles.containerHeader}>
            <Image
                className={styles.backgroundHeader}
                src="/images/fondo1.webp"
                alt="fondo"
                width={3456}
                height={2448}
            />
            <nav className={styles.navContainer}>
                <div className={`container gridContainer ${styles.gridContainer} ${Poppins600.className}`}>
                    <div>
                        <Image
                            className={styles.logoNav}
                            src="/images/logonav.svg"
                            alt="DeChiripa"
                            width={164}
                            height={165}
                        />
                    </div>
                    <div>
                        <div className={styles.itemsNav}>
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
                    </div>
                    <div>
                        <div className={styles.accessBox}>
                            <Link href="/login">
                                <Image
                                    className={styles.userNav}
                                    src="/images/user.svg"
                                    alt="DeChiripa"
                                    width={24}
                                    height={25}
                                />
                            </Link>
                            <button type='button'>
                                <p>2</p>
                                <Image
                                    className={styles.carNav}
                                    src="/images/car.svg"
                                    alt="DeChiripa"
                                    width={32}
                                    height={32}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
