'use client'
import Image from 'next/image'


const Rasgado = () => {
    return (
        <>
            <Image
                className='cabeceraRasgado'
                src='/images/cabeceraBg2.webp'
                width='3456'
                height='316'
                alt=''
            />
            <Image
                className='rasgadoRight'
                src='/images/rasgado_2.webp'
                width='3456'
                height='316'
                alt=''
            />
        </>
    )
}

export default Rasgado
