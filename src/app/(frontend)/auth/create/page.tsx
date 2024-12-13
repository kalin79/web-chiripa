"use client";
import { Suspense } from 'react';
import Image from 'next/image';
import BannerLogin from '@/components/auth/Banner';
import CreateForm from '@/components/auth/Create';
import styles from '@/styles/sass/login.module.sass'

const Login = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
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
                            <CreateForm />
                        </div>
                    </div>
                </div>
            </Suspense>
        </>
    )
}

export default Login


