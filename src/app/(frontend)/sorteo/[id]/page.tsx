
// import { Suspense } from 'react'
import { Metadata } from 'next';
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

// Función para generar metadatos dinámicos
export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const { id } = await params

    // Llamada a la API para obtener datos
    const responde = await getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM, id.split('--')[0]);
    const post = responde.data.product
    // Retornar los metadatos dinámicos
    return {
        title: post.title_large,
        description: post.description,
        openGraph: {
            title: post.title_large,
            description: post.description,
            url: `https://dechiripa.com.pe/sorteo/${id}`,
            images: post.image,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title_large,
            description: post.description,
            images: post.image,
        },
    };
}


const DetallePremio = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params

    // const _parametros = params.id?.split("--") || [];
    // if (_parametros.length < 2) {
    //     console.error('Invalid parameters:', params.id);
    //     return <div>Error: Invalid parameters</div>;
    // }
    let data = null;

    try {
        const response = await getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM, id.split('--')[0]);
        data = response;
        // console.log(response)

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
            <DetalleSorteo dataObject={data} idSorteo={id.split('--')[1]} />
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
