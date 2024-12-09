import { Suspense, use } from 'react'
import { processApi } from '@/actions/form.actions'
import TerminosCondiciones from "@/components/legal/TerminosCondiciones"
import FormularioSuscripcion from "@/components/suscripcion/formulario"


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
