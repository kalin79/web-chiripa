import { headers } from 'next/headers';
import { Suspense } from 'react'
import RegistroCompra from '@/components/procesoCompraInvitado/RegistroCompra'


const ProcesoCompraInvitado = async () => {
    const requestHeaders = await headers();
    const ip = requestHeaders.get('x-forwarded-for') || 'IP no disponible';
    return (
        <div className={`backgroundContainer`}>
            <Suspense fallback={<div>Loading...</div>}>
                <RegistroCompra myIP={ip} />
            </Suspense>
        </div>
    )

}
export default ProcesoCompraInvitado