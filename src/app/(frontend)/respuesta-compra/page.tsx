
import { Suspense } from 'react'
import RespuestaComponent from '@/components/respuestaCompra/Respuesta'


const RespuestaCompra = () => {

    return (
        <div className={`backgroundContainer`}>
            <Suspense fallback={<div>Loading...</div>}>
                <RespuestaComponent />
            </Suspense>
        </div>
    )

}
export default RespuestaCompra
