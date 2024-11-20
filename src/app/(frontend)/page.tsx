import { Suspense } from 'react';
import { Metadata } from 'next'
import BannerMain from "@components/banner/BannerMain"
import TransmisionVivoSeccion from "@components/home/Vivo"
import BeneficiosSeccion from "@components/home/Beneficios"
import SorteosSeccion from "@components/home/Sorteos"
import Suscribete from "@components/suscripcion/formulario"
import GanadoresSeccion from "@/components/home/Ganadores"
import AcercaSeccion from "@/components/home/Acerca"
import RasgadoFullImg from "@/components/fondo/RasgadoFull"
export const metadata: Metadata = {
    title: 'Registro de Usuario - DeChiripa',
    description: 'Regístrate y obtén tu usuario. Las probabilidades de ganar juegan a tu favor.',
    openGraph: {
        title: 'Registro de Usuario - DeChiripa',
        description: 'Regístrate y obtén tu usuario. Las probabilidades de ganar juegan a tu favor.',
        url: 'https://dechiripa.com.pe/',
        siteName: 'DeChiripa',
        images: [
            {
                url: 'https://s3.us-east-1.amazonaws.com/img.dechiripa.com.pe/dechiripa/facebook.png',
                width: 800,
                height: 492,
                alt: 'Regístrate y obtén tu usuario. Las probabilidades de ganar juegan a tu favor.',
            },
        ],
        locale: 'es_ES',
        type: 'website',
    }
}
const Home = () => {

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <BannerMain />
            </Suspense>
            <div className={`backgroundContainer sinPadd`}>
                <Suspense fallback={<div>Loading...</div>}>
                    <TransmisionVivoSeccion />
                    <BeneficiosSeccion />
                    <SorteosSeccion />
                    <div className={`backgroundContainer2`}>
                        <RasgadoFullImg />
                        <GanadoresSeccion />
                        <AcercaSeccion />
                        <Suscribete />
                    </div>


                </Suspense>
            </div>

        </>
    )
}

export default Home
