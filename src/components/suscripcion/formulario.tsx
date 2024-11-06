'use client'
// import Link from 'next/link'
import { useState, ChangeEvent } from "react"
import dynamic from 'next/dynamic'

import Swal from 'sweetalert2'

import Image from 'next/image'
import styles from '@/styles/sass/suscribete.module.sass'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import { validateSuscripcion } from "@/helpers/validacion-suscripcion"
import { objSuscripcion } from "@/interfaces/suscripcion"


const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})


// const Poppins600 = Poppins({
//     weight: '600',
//     subsets: ['latin'],
//     display: 'swap',
// })

const Poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})

const Poppins400 = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})


const initialTodo = {
    email: "",
    tyc: false
}

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const DynamicGraciasForm = dynamic(() => import('@/components/suscripcion/GraciasForm'), { loading: () => <p>Loading...</p> })

const Formulario = () => {
    const [todos, setTodos] = useState<objSuscripcion>(initialTodo)
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        setTodos({
            ...todos,
            tyc: event.target.checked
        })
    }
    const handleChange = (e: ChangeEvent<FormElement>) => {
        setTodos({
            ...todos,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (event: React.FormEvent) => {
        setIsLoading(true)
        event.preventDefault();
        const erroresValidacion = await validateSuscripcion(todos);
        if (erroresValidacion.status) {
            setIsLoading(false)
            Swal.fire({
                title: 'Error!',
                text: `${erroresValidacion.msjStatus}`,
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
        } else {
            setIsSubmitted(true)
            setIsLoading(false)
            // const urlParamsObject = {}
            // const path = "participante/store"
            // console.log(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM)
            // const options = {
            //     method: 'POST',
            //     headers: {
            //         'Authorization': `${process.env.NEXT_PUBLIC_AUTHORIZATION_FORM}`,  // Encabezado de autorización
            //     },
            //     body: JSON.stringify(todos),
            // }
            // const data = await fecthApi(path, urlParamsObject, options)
            // if (data.status === 'error') {
            //     setIsLoading(false)
            //     // console.log(data)
            //     if (data.errors.dni) {
            //         Swal.fire({
            //             title: 'Error!',
            //             text: 'El DNI registrado ya existe!',
            //             icon: 'error',
            //             confirmButtonText: 'Cerrar'
            //         })
            //     } else {
            //         if (data.errors.password) {
            //             Swal.fire({
            //                 title: 'Error!',
            //                 text: 'El campo de contraseña debe tener al menos 6 caracteres.',
            //                 icon: 'error',
            //                 confirmButtonText: 'Cerrar'
            //             })
            //         } else {
            //             Swal.fire({
            //                 title: 'Error!',
            //                 text: 'Vuelva a intentar mas tarde!',
            //                 icon: 'error',
            //                 confirmButtonText: 'Cerrar'
            //             })
            //         }
            //     }

            // } else {
            //     setIsSubmitted(true)
            //     setIsLoading(false)
            // }

            // console.log(data)
        }

    }
    return (
        <div className={`${styles.suscribeteBox}`}>
            <Image
                className={styles.rasgadoBox}
                src="/images/rasgado.webp"
                width={1326}
                height={890}
                alt="De Chiripa :: Formulario Suscribete"
                priority={true}
            />
            <div className='container'>
                {
                    isSubmitted ? (
                        <div className={styles.graciasBox}>
                            <DynamicGraciasForm />
                        </div>
                    ) : (
                        <div className={`gridContainer ${styles.gridContainer}`}>
                            <div>
                                <Image
                                    className={styles.chicoBox}
                                    src="/images/chico.png"
                                    width={908}
                                    height={918}
                                    alt="De Chiripa :: Formulario Suscribete"
                                    priority={true}
                                />
                            </div>
                            <div>
                                <h2 className={Humane600.className}>
                                    SUSCRÍBETE Y QUE NO SE TE ESCAPE <br />
                                    <span>NI UNA DE CHIRIPA</span>
                                </h2>
                                <h3 className={Poppins500.className}>
                                    ¿Te imaginas enterarte de sorteos de laptops, celulares de alta gama, y hasta scooters antes que nadie?
                                </h3>
                                <p className={Poppins400.className}>
                                    Con nuestro newsletter, no te perderás ningún sorteo, premio o sorpresa. Suscríbete y mantente en la primera fila de los ganadores. ¡Dale click, que la suerte se pegue!
                                </p>
                                <div className={styles.formContainer}>
                                    <form onSubmit={handleSubmit}>
                                        {/* {JSON.stringify(isSubmitted)} */}
                                        <div className={styles.rowGrid}>
                                            <input
                                                type="text"
                                                placeholder="Correo electrónico"
                                                className="form-control"
                                                value={todos.email}
                                                name='email'
                                                onChange={handleChange}
                                            />
                                            <button type='submit' disabled={isLoading} >
                                                {isLoading ? 'Loading...' : 'SUSCRIBIRME'}
                                            </button>
                                        </div>
                                        <div className={styles.row}>
                                            <label className="custom-checkbox">
                                                <div className='checkboxContainer'>
                                                    <input
                                                        type="checkbox"
                                                        id="isChecked"
                                                        name="isChecked"
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <span className="checkmark"></span>
                                                    <div>
                                                        Acepto los <a href="https://s3.us-east-1.amazonaws.com/img.dechiripa.com.pe/dechiripa/politica.pdf" target='_blank'>Términos y Condiciones</a>&nbsp;y las&nbsp;
                                                        <a href="https://s3.us-east-1.amazonaws.com/img.dechiripa.com.pe/dechiripa/datos.pdf" target='_blank'>Política de Privacidad</a>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Formulario
