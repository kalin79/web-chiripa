import { Suspense } from 'react'
import { Metadata } from 'next'

import FormularioSeccion from "@/components/contacto/Formulario"
export const metadata: Metadata = {
    title: 'CONTACTO :: Dechiripa',
    description: 'CONTÁCTANOS SI TIENES MÁS CONSULTAS',
    openGraph: {
        title: 'CONTACTO :: Dechiripa',
        description: 'CONTÁCTANOS SI TIENES MÁS CONSULTAS.',
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
const Contacto = () => {
    return (
        <div>
            <div className={`backgroundContainer`}>
                <Suspense fallback={<div>Loading...</div>}>
                    <FormularioSeccion />
                </Suspense>
            </div>
        </div>
    )
}

export default Contacto
