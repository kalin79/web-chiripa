'use client'
import { useSession } from "next-auth/react";
// signIn, signOut, 
import Image from 'next/image'
import styles from '@/styles/sass/compra.module.sass'
import CheckLogged from '@/components/auth/CheckLogged'
import FormularioCompra from '@/components/procesarCompra/Formulario'
interface Props {
    myIP: string
}
const RegistroCompra: React.FC<Props> = ({ myIP }) => {
    const { data: session } = useSession();
    return (
        <div className={`${styles.bgRegistroContainer}`}>
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
                    <div>
                        {
                            (!session?.user) && (
                                <CheckLogged />
                            )
                        }
                    </div>
                    <div>
                        <FormularioCompra myIP={myIP} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistroCompra
