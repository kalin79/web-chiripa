'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import Premios from "@components/home/Premios"
// import Formulario from "@components/home/Formulario"
import Image from 'next/image'
import styles from '@/styles/sass/home.module.sass'

const Home = () => {
    const layer1Ref = useRef<HTMLDivElement>(null)
    // const layer2Ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: layer1Ref.current,
                    start: "top center", // Comienza cuando la parte superior del contenedor entra en la vista
                    end: "center center",   // Finaliza cuando la parte inferior del contenedor sale de la vista
                    scrub: true,         // La animación sigue el scroll
                    markers: false,
                },
            })

            // Animar el título
            tl.fromTo(
                '.titularPremioHome',
                { scale: 0 },
                { scale: 1, y: 0, duration: .5, ease: "power2.inOut" }
            )
                .fromTo(
                    '.descripcionPremioHome',
                    { opacity: 0, x: -50 },
                    { opacity: 1, x: 0, duration: 1 }
                )
                .fromTo(
                    '.itemPremioHome',
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
                )
            // stagger: 0.1, // para que avance de manera secuencuial a partir de 0.3 seg.

        }

    }, [])
    return (
        <div className={styles.bgHome}>
            <Image
                className={styles.imageBackGround}
                src="/images/fondocuerpo.webp"
                width={5184}
                height={4365}
                alt="De Chiripa :: Preparate para lo que viene"
                priority={true}
            />
            <div className="containerContent">
                <Image
                    className={styles.imageRasgado1}
                    src="/images/rasgado1.webp"
                    width={1326}
                    height={462}
                    alt="De Chiripa :: Inscribete y participa de los grandes sorteos que se viene"
                    priority={true}
                />
                <Image
                    className={styles.imageRasgado2}
                    src="/images/rasgado2.webp"
                    width={629}
                    height={318}
                    alt="De Chiripa :: Inscribete y participa de los grandes sorteos que se viene"
                    priority={true}
                />
                {/* <div ref={layer1Ref}>
                    <Premios />
                </div> */}
                {/* <div ref={layer2Ref}>
                    <Formulario />
                </div> */}

            </div>
        </div>
    )
}

export default Home
