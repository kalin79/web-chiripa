'use client'
import Image from 'next/image';

import styles from '@/styles/sass/login.module.sass';


const BannerLogin = () => {
    return (
        <div>
            <Image
                className={styles.imageInfluencer}
                src="/images/chico.webp"
                alt="Login :: Chiripa"
                width="908"
                height="918"
            />
        </div>
    )
}

export default BannerLogin
