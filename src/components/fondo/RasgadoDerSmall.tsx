'use client'
import Image from 'next/image'

type MiComponenteProps = {
    style?: React.CSSProperties; // La propiedad style es opcional
};

const RasgadoDerSmall: React.FC<MiComponenteProps> = ({ style }) => {
    return (
        <>
            {
                (!style) ? (
                    <Image
                        className={`rasgadoDerechaSmall`}
                        src="/images/rasgado_small.webp"
                        width={1326}
                        height={890}
                        alt="De Chiripa :: Formulario Suscribete"
                    />
                ) : (
                    <Image
                        className={`rasgadoDerechaSmall`}
                        style={style}
                        src="/images/rasgado_small.webp"
                        width={1326}
                        height={890}
                        alt="De Chiripa :: Formulario Suscribete"
                    />
                )
            }

        </>
    )
}

export default RasgadoDerSmall
