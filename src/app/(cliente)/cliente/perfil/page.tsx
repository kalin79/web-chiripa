import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import Image from 'next/image';
import BannerLogin from '@/components/auth/Banner';
import UpdateForm from '@/components/auth/Update';
import styles from '@/styles/sass/login.module.sass'
import { processApiAuth } from '@/actions/form.actions';
const getData = async (token: any) => {

    const formJson = {
        url: `participante/get-data`,
        token: token,
        tokenPublic: process.env.NEXT_PUBLIC_AUTHORIZATION_FORM
    }

    const data = await processApiAuth(formJson)

    // console.log(data);
    return data;
}
const Perfil = async () => {
    const cookieStore = await cookies();
    // const tokenData = cookieStore.get('next-auth.session-token')?.value || null; // Reemplaza con el nombre correcto de tu cookie
    const token = await getToken({ req: { cookies: cookieStore } as any });
    // console.log(token)
    let data = null;
    if (token) {
        try {
            const response = await getData(token.token);
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

                <div className='container'>
                    <div className={`gridContainer ${styles.gridContainer}`}>
                        <BannerLogin />
                        <UpdateForm dataUser={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil


