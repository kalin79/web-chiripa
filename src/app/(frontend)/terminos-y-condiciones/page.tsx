import TerminosCondiciones from "@/components/legal/TerminosCondiciones"
import FormularioSuscripcion from "@/components/suscripcion/formulario"

const Terminos = () => {
    return (
        <div className={`backgroundContainer`}>
            <TerminosCondiciones />
            <FormularioSuscripcion />
        </div>
    )
}

export default Terminos
