import { Suspense } from 'react';
import FormularioSuscripcion from '@/components/suscripcion/formulario';
import { processApi } from '@/actions/form.actions';
import ListarSorteos from '@/components/sorteo/listado';

const getData = async (token: any) => {
    const formJson = {
        url: 'sorteos/lista',
        token,
    };

    const data = await processApi(formJson);
    return data;
};

// Asegúrate de que este componente sea tratado como Server Component
const ListadoSorteos = async () => {
    const data = await getData(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM);

    return (
        <div className={`backgroundContainer`}>
            <Suspense fallback={<div>Loading...</div>}>
                <ListarSorteos dataSorteos={data} />
            </Suspense>
            <FormularioSuscripcion />
        </div>
    );
};

export default ListadoSorteos
