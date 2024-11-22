import { Suspense } from 'react'
import ListadoSeccion from "@/components/ganadores/Listado"
import FormularioSuscripcion from "@/components/suscripcion/formulario"


const Ganadores = () => {
    return (
        <div className={`backgroundContainer`}>
            {/* {JSON.stringify(data)} */}
            <Suspense fallback={<div>Loading...</div>}>
                <ListadoSeccion />
            </Suspense>
            <FormularioSuscripcion />
        </div>
    )
}

export default Ganadores
