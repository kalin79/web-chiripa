import { Suspense } from 'react'
import ListarSorteos from "@components/sorteos/listado"

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
