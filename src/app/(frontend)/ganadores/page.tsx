// import { Suspense } from 'react'
import ListadoSeccion from "@/components/ganadores/Listado"
import FormularioSuscripcion from "@/components/suscripcion/formulario"
import { processApi } from '@/actions/form.actions'

const getData = async (token: any) => {

    const formJson = {
        url: `ganadores/lista`,
        token: token
    }

    const data = await processApi(formJson)


    return data;
}

const Ganadores = async () => {
    let data = null;
    try {
        const response = await getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM);
        data = response;
        console.log(response)

    } catch (error) {
        console.error('Error fetching data:', error);
        return <div>Error loading data</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div className={`backgroundContainer`}>
            {JSON.stringify(data)}
            <ListadoSeccion dataGanadores={data} />
            <FormularioSuscripcion />
        </div>
    )
}

export default Ganadores
