import { Suspense, use } from 'react'
import { processApi } from '@/actions/form.actions'
import Reglamento from "@/components/legal/Reglamento"
import FormularioSuscripcion from "@/components/suscripcion/formulario"
const getData = async (token: any) => {

    const formJson = {
        url: "config/reglamento",
        token: token
    }

    const data = await processApi(formJson)

    // console.log(data)

    return data;
}
const reglamento = () => {
    let data = null;
    const response = use(getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM));
    data = response
    return (
        <div className={`backgroundContainer`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Reglamento dataContenido={data} />
                <FormularioSuscripcion />
            </Suspense>
        </div>
    )
}

export default reglamento
