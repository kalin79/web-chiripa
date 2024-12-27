import { Suspense, use } from 'react'
import { Metadata } from 'next';
import { processApi } from '@/actions/form.actions'
import ListadoSeccion from "@/components/preguntas/Listado"
import FormularioSuscripcion from "@/components/suscripcion/formulario"

export const metadata: Metadata = {
    title: 'DeChiripa :: Preguntas Frecuentes',
    description: 'Descubre las respuestas a tus preguntas sobre Dechiripa, la plataforma de sorteos diseñada para jóvenes. Participa fácilmente, gana increíbles premios y vive experiencias únicas. ¡Dechiripa es para ti!',
    openGraph: {
        title: 'DeChiripa :: Preguntas Frecuentes',
        description: 'Descubre las respuestas a tus preguntas sobre Dechiripa, la plataforma de sorteos diseñada para jóvenes. Participa fácilmente, gana increíbles premios y vive experiencias únicas. ¡Dechiripa es para ti!',
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
        url: "preguntas-frecuentes",
        token: token
    }

    const data = await processApi(formJson)

    // console.log(data)

    return data;
}


const PreguntasFrecuentes = () => {
    let data = null;
    const response = use(getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM));
    data = response
    return (
        <div className={`backgroundContainer`}>
            <Suspense fallback={<div>Loading...</div>}>
                <ListadoSeccion dataContenido={data} />
            </Suspense>
            <FormularioSuscripcion />
        </div>
    )
}

export default PreguntasFrecuentes
