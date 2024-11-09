import { Suspense, use } from 'react'

// import { getToken } from "next-auth/jwt";
// import { cookies } from "next/headers";
import { processApi } from '@/actions/form.actions'
import ListarSorteos from "@/components/sorteo/listado"

const getData = async (token: any) => {

    const formJson = {
        url: "sorteos/lista",
        token: token
    }

    const data = await processApi(formJson)

    console.log(data)

    return data;
}

const ListadoSorteos = () => {
    // Obtenemos las cookies como un objeto regular
    // const cookieStore = cookies();
    // const token = await getToken({ req: { cookies: cookieStore } as any });
    // const { data } = await getData(token?.access_token);
    let data = null;
    const response = use(getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM));
    data = response
    console.log(data)

    // if (token?.access_token) {
    //     const response = await getData(token.access_token);
    //     data = response
    // }
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <ListarSorteos dataSorteos={data} />
            </Suspense>
        </>
    )
}

export default ListadoSorteos
