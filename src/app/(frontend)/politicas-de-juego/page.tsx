import { Suspense, use } from 'react'
import { processApi } from '@/actions/form.actions'
import PoliticaJuegos from "@/components/legal/PoliticaJuegos"
import FormularioSuscripcion from "@/components/suscripcion/formulario"

const getData = async (token: any) => {

    const formJson = {
        url: "config/politicas-de-juegos",
        token: token
    }

    const data = await processApi(formJson)

    // console.log(data)

    return data;
}

const PoliticasJuego = () => {
    let data = null;
    const response = use(getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM));
    data = response
    return (
        <div className={`backgroundContainer`}>
            <Suspense fallback={<div>Loading...</div>}>
                <PoliticaJuegos dataContenido={data} />
                <FormularioSuscripcion />
            </Suspense>
        </div>
    )
}

export default PoliticasJuego
