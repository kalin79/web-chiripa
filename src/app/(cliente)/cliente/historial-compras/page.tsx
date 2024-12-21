
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import Image from 'next/image';
import ComprasListado from '@/components/historial/Compras';
import styles from '@/styles/sass/login.module.sass'
import { processApiAuth } from '@/actions/form.actions';

const getData = async (token: any, id: any) => {

    const formJson = {
        url: `participante/${id}/get-order`,
        token: token,
        tokenPublic: process.env.NEXT_PUBLIC_AUTHORIZATION_FORM
    }

    const data = await processApiAuth(formJson)

    // console.log(data);
    return data;
}

const Historial = async () => {
    // const cookieStore = cookies();
    // const token = await getToken({ req: { cookies: cookieStore } as any });

    const cookieStore = await cookies();
    // const tokenData = cookieStore.get('next-auth.session-token')?.value || null; // Reemplaza con el nombre correcto de tu cookie
    const token = await getToken({ req: { cookies: cookieStore } as any });
    // console.log(token)
    let data = null;
    if (token) {
        try {
            const response = await getData(token.token, token.id);
            data = response;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            <div className={`backgroundContainer ${styles.pageLogin}`}>
                <Image
                    className={`imageBackGroundContainer`}
                    src="/images/topBg.png"
                    width={3456}
                    height={357}
                    alt="De Chiripa :: Preparate para lo que viene"
                    priority={true}
                />
                <ComprasListado dataListado={data} />
            </div>
        </>
    )
}

export default Historial


