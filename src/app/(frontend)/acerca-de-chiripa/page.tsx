import { Suspense, use } from 'react'
import { processApi } from '@/actions/form.actions'
import DetalleSeccion from "@/components/acerca/Detalle"
import VisionSeccion from "@/components/acerca/Vision"
// import EquipoSeccion from "@/components/acerca/Equipo"
import FormularioSuscripcion from "@/components/suscripcion/formulario"

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
