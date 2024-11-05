import { Suspense } from 'react'
import ListarSorteos from "@/components/sorteo/listado"

const ListadoSorteos = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <ListarSorteos />
            </Suspense>
        </>
    )
}

export default ListadoSorteos
