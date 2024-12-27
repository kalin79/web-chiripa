import { headers } from 'next/headers';
import { Metadata } from 'next';

import { Suspense } from 'react'
import RegistroCompra from '@/components/procesoCompraInvitado/RegistroCompra'

export const metadata: Metadata = {
    title: 'DeChiripa - Invitado :: Completa tu compra en Dechiripa y asegura tu lugar en los sorteos 🎉',
    description: 'Finaliza tu compra en Dechiripa y participa en los mejores sorteos para jóvenes universitarios. Es fácil, rápido y seguro. ¡No te pierdas la oportunidad de ganar increíbles premios!',
    openGraph: {
        title: 'DeChiripa - Invitado :: Completa tu compra en Dechiripa y asegura tu lugar en los sorteos 🎉',
        description: 'Finaliza tu compra en Dechiripa y participa en los mejores sorteos para jóvenes universitarios. Es fácil, rápido y seguro. ¡No te pierdas la oportunidad de ganar increíbles premios!',
        url: 'https://dechiripa.com.pe/',
        siteName: 'DeChiripa',
        images: [
            {
                url: 'https://s3.us-east-1.amazonaws.com/img.dechiripa.com.pe/dechiripa/facebook.png',
                width: 800,
                height: 492,
                alt: 'Más oportunidades de ganar: Al vender menos boletos que la competencia, las posibilidades de ganar están más a la mano',
            },
        ],
        locale: 'es_ES',
        type: 'website',
    }
}
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