
import { Suspense } from 'react'
import { processApi } from '@/actions/form.actions'
import DetalleSorteo from "@/components/sorteo/detalle"


const getData = async (token: any, slug: string) => {

    const formJson = {
        url: `sorteo/${slug}`,
        token: token
    }

    const data = await processApi(formJson)


    return data;
}




const DetallePremio = async ({ params }: any) => {
    const { id } = await params;
    let data = null;
    const response = await getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM, id);
    data = response;
    return (
        <div className={`backgroundContainer`}>
            {/* {JSON.stringify(data)} */}
            <Suspense fallback={<div>Loading...</div>}>
                <DetalleSorteo dataObject={data} />
            </Suspense>
        </div>
    )
}


export default DetallePremio
