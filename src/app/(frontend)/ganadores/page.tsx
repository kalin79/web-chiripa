import { Suspense } from 'react'
import { Metadata } from 'next'

import ListadoSeccion from "@/components/ganadores/Listado"
import FormularioSuscripcion from "@/components/suscripcion/formulario"
import { processApi } from '@/actions/form.actions'

export const metadata: Metadata = {
    title: 'DeChiripa :: Ganadores',
    description: 'DeChiripa :: Ganadores ¡Hey amig@ DeChiripa 😲 aquí están todos nuestros ganadores del mes, y tú podrías estar aquí entre ellos pronto ✨ ',
    openGraph: {
        title: 'DeChiripa :: Ganadores',
        description: 'Ganadores ¡Hey amig@ DeChiripa 😲 aquí están todos nuestros ganadores del mes, y tú podrías estar aquí entre ellos pronto ✨',
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
        url: `ganadores/lista`,
        token: token
    }

    const data = await processApi(formJson)


    return data;
}

const Ganadores = async () => {
    let data = null;
    const response = await getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM);
    data = response;
    return (
        <div className={`backgroundContainer`}>
            {/* {JSON.stringify(data)} */}
            <Suspense fallback={<div>Loading...</div>}>
                <ListadoSeccion dataGanadores={data} />
                <FormularioSuscripcion />
            </Suspense>
        </div>
    )
}

export default Ganadores
