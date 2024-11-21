'use client'
import Image from 'next/image';

import styles from '@/styles/sass/login.module.sass';


const BannerLogin = () => {
    return (
        <div>
            <Image
                className={styles.imageInfluencer}
                src="/images/influ2.webp"
                alt="Login :: Chiripa"
                width="1193"
                height="1260"
            />
        </div>
    )
}

export default BannerLogin
