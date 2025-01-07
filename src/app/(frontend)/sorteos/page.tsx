import { Suspense } from 'react';
import { Metadata } from 'next'
import FormularioSuscripcion from '@/components/suscripcion/formulario';
import { processApi } from '@/actions/form.actions';
import ListarSorteos from '@/components/sorteo/listado';
export const metadata: Metadata = {
    title: 'DeChiripa :: Listado de Sorteos',
    description: 'DeChiripa :: Listado de Sorteos - Donde las probabilidades de ganar juegan a tu favor',
    openGraph: {
        title: 'DeChiripa :: Listado de Sorteos',
        description: 'DeChiripa :: Listado de Sorteos - Donde las probabilidades de ganar juegan a tu favor',
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
