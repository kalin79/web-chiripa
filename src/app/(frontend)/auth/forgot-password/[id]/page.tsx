
import Image from 'next/image';
import ForgotForm from '@/components/auth/Forgot';
import BannerLogin from '@/components/auth/Banner';
import styles from '@/styles/sass/login.module.sass';


const ForgotPasword = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params
    return (
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
                    <ForgotForm tokenId={id} />
                </div>
            </div>
        </div>
    )
}

export default ForgotPasword


