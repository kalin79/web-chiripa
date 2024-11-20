
import Image from 'next/image';
import ResetForm from '@/components/auth/Reset';
import BannerLogin from '@/components/auth/Banner';
import styles from '@/styles/sass/login.module.sass';


const ResetPasword = () => {
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
                    <ResetForm />
                </div>
            </div>
        </div>
    )
}

export default ResetPasword


