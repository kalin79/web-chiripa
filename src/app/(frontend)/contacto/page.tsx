import { Suspense } from 'react'
import FormularioSeccion from "@/components/contacto/Formulario"

const Contacto = () => {
    return (
        <div>
            <div className={`backgroundContainer`}>
                <Suspense fallback={<div>Loading...</div>}>
                    <FormularioSeccion />
                </Suspense>
            </div>
        </div>
    )
}

export default Contacto
