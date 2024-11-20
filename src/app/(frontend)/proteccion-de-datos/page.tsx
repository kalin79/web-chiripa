import ProteccionDatos from "@/components/legal/ProteccionDatos"
import FormularioSuscripcion from "@/components/suscripcion/formulario"


const proteccionDatos = () => {
    return (
        <div className={`backgroundContainer`}>
            <ProteccionDatos />
            <FormularioSuscripcion />
        </div>
    )
}

export default proteccionDatos
