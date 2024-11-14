'use client'

// import Image from 'next/image'
import styles from '@/styles/sass/nav.module.sass'
// import LogoMain from '../../../public/images/logo.svg'

const Header = () => {
    return (
        <div className={styles.containerHeader}>
            <div className={styles.logoCenter}>
                <div>
                    {/* <Image
                        src="/images/logo2.svg"
                        alt="Descripción de la imagen"
                        width={224}
                        height={226}
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Header
