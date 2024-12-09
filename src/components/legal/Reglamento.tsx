'use Client'
import Image from 'next/image'
import styles from '@/styles/sass/legal.module.sass'
import localFont from 'next/font/local'
import { ObjApiConfig } from "@/interfaces/contenido"

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})
interface Props {
    dataContenido: ObjApiConfig,
}
const Reglamento: React.FC<Props> = ({ dataContenido }) => {
    const dataPrint = dataContenido.data.reglamento
    return (
        <div className={`${styles.pageLegal} estilosCMS`}>
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
                        <h1 className={Humane600.className}>
                            <Image
                                className={styles.stickerH1}
                                src="/images/sticker1.svg"
                                width={54}
                                height={73}
                                alt="TÉRMINOS Y CONDICIONES"
                            />
                            <div
                                dangerouslySetInnerHTML={{ __html: dataPrint?.titulo || '' }}
                            >
                            </div>
                        </h1>
                        <div className={styles.infoLegal}>
                            <div
                                dangerouslySetInnerHTML={{ __html: dataPrint?.descripcion || '' }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reglamento
