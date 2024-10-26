'use client'
import Image from 'next/image'
import styles from '@/styles/sass/home.module.sass'
const Terminos = () => {
    return (
        <div>
            <Image
                className={styles.imageBackGround}
                src="/images/fondocuerpo.webp"
                width={5184}
                height={4365}
                alt="De Chiripa :: Preparate para lo que viene"
                priority={true}
            />
        </div>
    )
}

export default Terminos
