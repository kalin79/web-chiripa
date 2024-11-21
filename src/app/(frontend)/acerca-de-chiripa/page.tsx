import { Suspense } from 'react'
import DetalleSeccion from "@/components/acerca/Detalle"
import VisionSeccion from "@/components/acerca/Vision"
import FormularioSuscripcion from "@/components/suscripcion/formulario"


const AcercaChiripa = () => {
    return (
        <div className={`backgroundContainer`}>
            {/* {JSON.stringify(data)} */}
            <Suspense fallback={<div>Loading...</div>}>
                <DetalleSeccion />
                <VisionSeccion />
            </Suspense>
            <FormularioSuscripcion />
        </div>
    )
}

export default AcercaChiripa
