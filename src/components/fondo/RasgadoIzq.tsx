'use client'
import Image from 'next/image'

type MiComponenteProps = {
    style?: React.CSSProperties; // La propiedad style es opcional
};
const Rasgado: React.FC<MiComponenteProps> = ({ style }) => {
    return (
        <>
            {/* {JSON.stringify(style)} */}
            {
                (!style) ? (
                    <Image
                        className={`rasgadoIzq`}
                        src="/images/rasgado.webp"
                        width={1326}
                        height={890}
                        alt="De Chiripa :: Formulario Suscribete"
                    />
                ) : (
                    <Image
                        className={`rasgadoIzq`}
                        style={style}
                        src="/images/rasgado.webp"
                        width={1326}
                        height={890}
                        alt="De Chiripa :: Formulario Suscribete"
                    />
                )
            }

        </>
    )
}

export default Rasgado
