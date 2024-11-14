'use Client'
import Image from 'next/image'
import styles from '@/styles/sass/compra.module.sass'
import CheckLogged from '@/components/login/CheckLogged'
import FormularioCompra from '@/components/procesarCompra/Formulario'

const RegistroCompra = () => {
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
                        <CheckLogged />
                    </div>
                    <div>
                        <FormularioCompra />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistroCompra
