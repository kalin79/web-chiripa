'use client'
import Link from 'next/link'

import Image from 'next/image'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/footer.module.sass'


// const Poppins300 = Poppins({
//     weight: '300',
//     subsets: ['latin'],
//     display: 'swap',
// })

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

const Footer = () => {

    return (
        <footer className={styles.containerFooter}>
            <Image
                className={styles.imageBackGround}
                src="/images/bgFooterTop.png"
                width={3456}
                height={280}
                alt="Picture of the author"
            />
            <div className={`container`}>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <div>
                            <Image
                                className={styles.imageLogoFooter}
                                src="/images/logo.svg"
                                width={135}
                                height={137}
                                alt="Picture of the author"
                            />
                        </div>
                        <p className={Poppins400.className}>© De Chiripa - 2024 - RUC: </p>
                    </div>
                    <div>
                        <Link href="/terminos-y-condiciones" className={Poppins500.className}>Términos y condiciones</Link>
                        <Link href="/politicas-de-juego" className={Poppins500.className}>Políticas de juegos</Link>
                        <Link href="/proteccion-de-datos" className={Poppins500.className}>Protección de datos</Link>
                        <Link href="/reglamento" className={Poppins500.className}>Reglamento</Link>
                    </div>
                    <div>
                        <Link href="/preguntas-frecuentes" className={Poppins500.className}>Preguntas Frecuentes</Link>
                        <Link href="/contacto" className={Poppins500.className}>Contacto</Link>
                        {/* <div>
                            <h2 className={Poppins500.className}>Horario de atención</h2>
                            <p className={Poppins300.className}>Lunes a viernes 9:00 AM - 18:00 PM</p>
                        </div> */}
                        <div className={styles.boxReclamaciones}>
                            <a href="https://google.com.pe" target="_blank" className={Poppins500.className}>
                                <Image
                                    src="/images/book2.webp"
                                    width={34}
                                    height={34}
                                    alt="Libro de Reclamaciones"
                                />
                                <span>
                                    Libro de Reclamaciones
                                </span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=61568109125774" target='_blank'>
                            <Image
                                src="/images/facebook.svg"
                                width={34}
                                height={34}
                                alt="DeChiripa :: Facebook"
                            />
                        </a>
                        <a href="https://www.instagram.com/dechiripaperu/" target='_blank'>
                            <Image
                                src="/images/instagram.svg"
                                width={34}
                                height={34}
                                alt="DeChiripa :: Instagram"
                            />
                        </a>
                        <a href="https://www.tiktok.com/@dechiripaperu" target='_blank'>
                            <Image
                                src="/images/tiktok.svg"
                                width={34}
                                height={34}
                                alt="DeChiripa :: Tik Tok"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
