import { Suspense } from 'react'

import DetalleSorteo from "@/components/sorteo/detalle"

const DetallePremio = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DetalleSorteo />
        </Suspense>
    )
}

export default DetallePremio
