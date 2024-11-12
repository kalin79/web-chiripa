
import { Suspense } from 'react'
import RegistroCompra from '@/components/procesarCompra/RegistroCompra'


const ProcesoCompra = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegistroCompra />
        </Suspense>
    )

}
export default ProcesoCompra
