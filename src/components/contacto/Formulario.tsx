'use client'
import { useState, ChangeEvent } from "react"
import dynamic from 'next/dynamic'

import Swal from 'sweetalert2'

import Image from 'next/image'

import localFont from 'next/font/local'
import styles from '@/styles/sass/contactoPage.module.sass'
import RasgadoDerSmall from '@/components/fondo/RasgadoDerSmall'
import { validateContacto } from "@/helpers/validacion-contacto"

import { objContacto } from "@/interfaces/contacto"

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})

const initialTodo = {
    email: "",
    name: "",
    asunto: "",
    mensaje: "",
    tyc: false
}

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const DynamicGraciasForm = dynamic(() => import('@/components/contacto/Gracias'), { loading: () => <p>Loading...</p> })

const Formulario = () => {
    const [todos, setTodos] = useState<objContacto>(initialTodo)
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
        const erroresValidacion = await validateContacto(todos);
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

        }

    }
    return (
        <div className={styles.seccionContacto}>
            <RasgadoDerSmall style={{ bottom: "10rem" }} />
            <Image
                className={`imageBackGroundContainer`}
                src="/images/topBg.png"
                width={3456}
                height={357}
                alt="De Chiripa :: Preparate para lo que viene"
            />
            <div className='container'>
                <div className={`gridContainer ${styles.gridContainer}`}>
                    <div>
                        <h1 className={Humane600.className}>
                            <span>
                                <Image
                                    className={styles.stickerH1}
                                    src="/images/sticker1.svg"
                                    width={54}
                                    height={73}
                                    alt="TÉRMINOS Y CONDICIONES"
                                />
                                CONTÁCTANOS SI TIENES <br />
                            </span>
                            MÁS CONSULTAS

                        </h1>
                    </div>
                    <div>
                        <div className={styles.formContainer}>

                            {
                                isSubmitted ? (
                                    <div className={styles.graciasBox}>
                                        <DynamicGraciasForm />
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        {/* {JSON.stringify(isSubmitted)} */}
                                        <div className={styles.rowFlex}>
                                            <div>
                                                <label htmlFor="name">Nombres y apellidos:</label>
                                                <input
                                                    type="text"
                                                    placeholder="Nombres y apellidos"
                                                    className="form-control"
                                                    value={todos.name}
                                                    name='name'
                                                    id="name"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email">Correo electrónico:</label>
                                                <input
                                                    type="text"
                                                    placeholder="Correo electrónico"
                                                    className="form-control"
                                                    value={todos.email}
                                                    name='email'
                                                    id="email"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.row}>
                                            <label htmlFor="asunto">Asunto:</label>
                                            <input
                                                type="text"
                                                placeholder="Asunto"
                                                className="form-control"
                                                value={todos.asunto}
                                                name='asunto'
                                                id="asunto"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className={styles.row}>
                                            <label htmlFor="mensaje">Mensaje:</label>
                                            <textarea
                                                placeholder="Mensaje"
                                                className="form-control"
                                                value={todos.mensaje}
                                                name='mensaje'
                                                id="mensaje"
                                                onChange={handleChange}
                                            />
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
                                                        Acepto los <a href="/terminos-y-condiciones" target='_blank'>Términos y Condiciones</a>&nbsp;y las&nbsp;
                                                        <a href="/proteccion-de-datos" target='_blank'>Política de Privacidad</a>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className={styles.row}>
                                            <button type='submit' disabled={isLoading} >
                                                {isLoading ? 'Loading...' : 'SUSCRIBIRME'}
                                            </button>
                                        </div>


                                    </form>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario
