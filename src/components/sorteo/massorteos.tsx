'use client'
import Image from 'next/image'
import styles from '@/styles/sass/sorteodetalle.module.sass'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

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
const MasSorteos = () => {
    return (
        <div className={`backgroundContainer`}>
            <Image
                className={`imageBackGroundContainer`}
                src="/images/bg_2 3.png"
                width={2592}
                height={2105}
                alt="De Chiripa :: Preparate para lo que viene"
                priority={true}
            />
            hola
        </div>
    )
}

export default MasSorteos
