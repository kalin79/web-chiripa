'use client'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/footer.module.sass'


const Poppins400 = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const Footer = () => {
    return (
        <footer className={styles.containerFooter}>
            <Image
                className={styles.imageBackGround}
                src="/images/footer.webp"
                width={5184}
                height={3672}
                alt="Picture of the author"
            />
            <div className={`${styles.containerInfo} container`}>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <div>
                            {/* <LogoFooter /> */}
                            <Image
                                className={styles.imageLogoFooter}
                                src="/images/logo2.svg"
                                width={224}
                                height={226}
                                alt="Picture of the author"
                            />
                            <p className={Poppins400.className}>© De Chiripa - 2024 - RUC: 20606475757 </p>
                        </div>
                    </div>
                    <div>
                        <a href="#" target='_blank'>
                            <Image
                                src="/images/facebook.svg"
                                width={34}
                                height={34}
                                alt="DeChiripa :: Facebook"
                            />
                        </a>
                        <a href="#" target='_blank'>
                            <Image
                                src="/images/instagram.svg"
                                width={34}
                                height={34}
                                alt="DeChiripa :: Instagram"
                            />
                        </a>
                        <a href="#" target='_blank'>
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
