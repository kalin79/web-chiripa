import { Suspense } from 'react'
import ListadoSeccion from "@/components/preguntas/Listado"
import FormularioSuscripcion from "@/components/suscripcion/formulario"


const PreguntasFrecuentes = () => {
    return (
        <div className={`backgroundContainer`}>
            <Suspense fallback={<div>Loading...</div>}>
                <ListadoSeccion />
            </Suspense>
            <FormularioSuscripcion />
        </div>
    )
}

export default PreguntasFrecuentes
