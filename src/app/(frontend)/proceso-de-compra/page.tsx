
import { Suspense } from 'react'
import RegistroCompra from '@/components/procesarCompra/RegistroCompra'


const ProcesoCompra = () => {

    return (
        <div className={`backgroundContainer`}>
            <Suspense fallback={<div>Loading...</div>}>
                <RegistroCompra />
            </Suspense>
        </div>
    )

}
export default ProcesoCompra
