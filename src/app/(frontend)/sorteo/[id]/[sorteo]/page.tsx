
// import { Suspense } from 'react'
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




const DetallePremio = async ({ params }: { params: { id: string; sorteo: string } }) => {
    const { id, sorteo } = await params;
    let data = null;

    try {
        const response = await getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM, id);
        data = response;
    } catch (error) {
        console.error('Error fetching data:', error);
        return <div>Error loading data</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`backgroundContainer`}>
            {/* {JSON.stringify(data)} */}
            <DetalleSorteo dataObject={data} idSorteo={sorteo} />
        </div>
    );


    // const response = await getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM, id);
    // data = response;
    // return (
    //     <div className={`backgroundContainer`}>
    //         {/* {JSON.stringify(data)} */}
    //         <Suspense fallback={<div>Loading...</div>}>
    //             <DetalleSorteo dataObject={data} idSorteo={sorteo} />
    //         </Suspense>
    //     </div>
    // )
}


export default DetallePremio
