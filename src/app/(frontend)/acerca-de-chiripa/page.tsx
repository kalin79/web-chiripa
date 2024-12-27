import { Suspense, use } from 'react'
import { Metadata } from 'next'

import { processApi } from '@/actions/form.actions'
import DetalleSeccion from "@/components/acerca/Detalle"
import VisionSeccion from "@/components/acerca/Vision"
// import EquipoSeccion from "@/components/acerca/Equipo"
import FormularioSuscripcion from "@/components/suscripcion/formulario"

export const metadata: Metadata = {
    title: 'ACERCA DE CHIRIPA',
    description: 'En DE CHIRIPA somos la plataforma que le pone sazón y emoción a la suerte.',
    openGraph: {
        title: 'ACERCA DE CHIRIPA',
        description: 'En DE CHIRIPA somos la plataforma que le pone sazón y emoción a la suerte.',
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

const getData = async (token: any, apiURL: string) => {

    const formJson = {
        url: apiURL,
        token: token
    }

    const data = await processApi(formJson)

    // console.log(data)

    return data;
}
const AcercaChiripa = () => {
    // const response = use(getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM));
    const [dataContenido] = use(
        Promise.all([
            getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM, 'config/acerca-de-chiripa'),
        ])
    );
    return (
        <div className={`backgroundContainer`}>
            {/* {JSON.stringify(dataContenido)} */}
            <Suspense fallback={<div>Loading...</div>}>
                <DetalleSeccion dataContenido={dataContenido} />
                <VisionSeccion dataContenido={dataContenido} />
                {/* <EquipoSeccion /> */}
            </Suspense>
            <FormularioSuscripcion />
        </div>
    )
}

export default AcercaChiripa
