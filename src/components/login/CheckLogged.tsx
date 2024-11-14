'use client'
import Link from 'next/link'
import { useRouter } from "next/navigation";

import styles from '@/styles/sass/compra.module.sass'

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
const CheckLogged = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/auth/login')
    }
    return (
        <div className={styles.containerLogin}>
            <h2 className={Humane600.className}>Iniciar sesión</h2>
            <div className={Poppins600.className}>
                <button type='button' onClick={handleLogin} className='btnMain'>
                    Iniciar Sesion
                </button>
                <p>
                    ¿No tienes una cuenta?
                    <Link href="/auth/create">Registrarse</Link>
                </p>
            </div>
        </div>
    )
}

export default CheckLogged
