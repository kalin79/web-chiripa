import { Suspense } from 'react';
import Image from 'next/image';
import ComprasListado from '@/components/historial/Compras';
import styles from '@/styles/sass/login.module.sass'

const Historial = () => {
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
                    <ComprasListado />
                </div>
            </Suspense>
        </>
    )
}

export default Historial


