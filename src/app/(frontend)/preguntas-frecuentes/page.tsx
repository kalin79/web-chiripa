import { Suspense, use } from 'react'
import { processApi } from '@/actions/form.actions'
import ListadoSeccion from "@/components/preguntas/Listado"
import FormularioSuscripcion from "@/components/suscripcion/formulario"

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
