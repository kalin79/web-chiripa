import Reglamento from "@/components/legal/Reglamento"
import FormularioSuscripcion from "@/components/suscripcion/formulario"

const reglamento = () => {
    return (
        <div className={`backgroundContainer`}>
            <Reglamento />
            <FormularioSuscripcion />
        </div>
    )
}

export default reglamento
