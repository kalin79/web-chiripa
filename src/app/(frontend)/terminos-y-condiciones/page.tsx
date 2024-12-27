import { Suspense, use } from 'react'
import { Metadata } from 'next';

import { processApi } from '@/actions/form.actions'
import TerminosCondiciones from "@/components/legal/TerminosCondiciones"
import FormularioSuscripcion from "@/components/suscripcion/formulario"

export const metadata: Metadata = {
    title: 'Términos y Condiciones | Dechiripa',
    description: 'Conoce los términos y condiciones de Dechiripa, la plataforma de sorteos para jóvenes universitarios. Infórmate sobre las reglas, requisitos y políticas para participar y ganar increíbles premios.',
    openGraph: {
        title: 'Términos y Condiciones | Dechiripa',
        description: 'Conoce los términos y condiciones de Dechiripa, la plataforma de sorteos para jóvenes universitarios. Infórmate sobre las reglas, requisitos y políticas para participar y ganar increíbles premios.',
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
        url: "config/terminos-y-condiciones",
        token: token
    }

    const data = await processApi(formJson)

    // console.log(data)

    return data;
}
const Terminos = () => {
    let data = null;
    const response = use(getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM));
    data = response
    return (
        <div className={`backgroundContainer`}>
            <Suspense fallback={<div>Loading...</div>}>
                <TerminosCondiciones dataContenido={data} />
                <FormularioSuscripcion />
            </Suspense>
        </div>
    )
}

export default Terminos
