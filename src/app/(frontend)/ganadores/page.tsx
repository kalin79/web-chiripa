import { Suspense } from 'react'
import ListadoSeccion from "@/components/ganadores/Listado"
import FormularioSuscripcion from "@/components/suscripcion/formulario"
import { processApi } from '@/actions/form.actions'

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
