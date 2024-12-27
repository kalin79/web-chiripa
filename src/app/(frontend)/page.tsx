import { Suspense, use } from 'react';
import { Metadata } from 'next'
import BannerMain from "@components/banner/BannerMain"
import TransmisionVivoSeccion from "@components/home/Vivo"
import BeneficiosSeccion from "@components/home/Beneficios"
import SorteosSeccion from "@components/home/Sorteos"
import Suscribete from "@components/suscripcion/formulario"
import GanadoresSeccion from "@/components/home/Ganadores"
import AcercaSeccion from "@/components/home/Acerca"
import RasgadoFullImg from "@/components/fondo/RasgadoFull"
import { processApi } from '@/actions/form.actions'

export const metadata: Metadata = {
    title: 'Bienvenido a la pagina :: DeChiripa',
    description: 'Más oportunidades de ganar: Al vender menos boletos que la competencia, las posibilidades de ganar están más a la mano',
    openGraph: {
        title: 'Bienvenido a la pagina :: DeChiripa',
        description: 'Más oportunidades de ganar: Al vender menos boletos que la competencia, las posibilidades de ganar están más a la mano',
        url: 'https://dechiripa.com.pe/',
        siteName: 'DeChiripa',
        images: [
            {
                url: 'https://s3.us-east-1.amazonaws.com/img.dechiripa.com.pe/dechiripa/facebook.png',
                width: 800,
                height: 492,
                alt: 'Más oportunidades de ganar: Al vender menos boletos que la competencia, las posibilidades de ganar están más a la mano',
            },
        ],
        locale: 'es_ES',
        type: 'website',
    }
}
const getData = async (token: any) => {

    const formJson = {
        url: "home",
        token: token
    }

    const data = await processApi(formJson)

    // console.log(data)

    return data;
}
const Home = () => {
    let data = null;
    const response = use(getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM));
    data = response

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <BannerMain dataContenido={data} />
            </Suspense>
            <div className={`backgroundContainer sinPadd`}>
                <Suspense fallback={<div>Loading...</div>}>
                    {
                        data?.data?.link_transmision?.descripcion_corta?.length > 0 && (
                            <TransmisionVivoSeccion dataContenido={data} />
                        )
                    }
                    {/* {JSON.stringify(data)} */}
                    <BeneficiosSeccion dataContenido={data} />
                    <SorteosSeccion dataContenido={data} />
                    <div className={`backgroundContainer2`}>
                        <RasgadoFullImg />
                        <GanadoresSeccion dataContenido={data} />
                        <AcercaSeccion dataContenido={data} />
                        <Suscribete />
                    </div>


                </Suspense>
            </div>

        </>
    )
}

export default Home
