"use client";
// import { signIn } from "next-auth/react";
import { useState, ChangeEvent, useEffect } from "react";
// import { useRouter } from "next/navigation";

import { fecthApi } from '@/actions/form.actions'
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic'

import { validateRegisterUser } from "@/helpers/validacion-registro"
import { objUser } from "@/interfaces/user"


import Swal from 'sweetalert2'
import localFont from 'next/font/local'

import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/login.module.sass'


const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})



const poppins600 = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})


const poppins400 = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;



const initialTodo = {
    nombres: "",
    apellido_paterno: "",
    apellido_materno: "",
    dni: "",
    register_from: "1",
    celular: "",
    email: "",
    birhtday: "",
    password: "",
    password_confirmation: "",
    direccion: "",
    tyc: false,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
}

const DynamicGraciasForm = dynamic(() => import('@components/auth/Gracias'), { loading: () => <p>Loading...</p> })


const Create = () => {
    const [todos, setTodos] = useState<objUser>(initialTodo)
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(false)
    const searchParams = useSearchParams();
    useEffect(() => {
        // Obtener el parámetro "id" y actualizar el estado
        setTodos({
            ...todos,
            utm_source: searchParams.get("utm_source") || "",
            utm_medium: searchParams.get("utm_medium") || "",
            utm_campaign: searchParams.get("utm_campaign") || "",
            utm_content: searchParams.get("utm_content") || "",
        })
    }, [searchParams]); // Al convertir `searchParams` a cadena, se actualiza cuando cambia
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        setTodos({
            ...todos,
            tyc: event.target.checked
        })
    }
    const handleChangeFull = (e: ChangeEvent<FormElement>) => {
        setTodos({
            ...todos,
            [e.target.name]: e.target.value
        })
    }

    const handleChange = (e: ChangeEvent<FormElement>) => {
        const value = e.target.value
        if (value.trim() === "") {
            setTodos({
                ...todos,
                [e.target.name]: e.target.value
            })
            // Permitir el campo vacío o solo espacios
            // Sin error si el campo está vacío o solo tiene espacios
        } else if (/^[a-zA-Z']*$/.test(value.replace(/\s/g, ''))) {
            setTodos({
                ...todos,
                [e.target.name]: e.target.value
            })
        }

    }
    const handleChangeNumber = (e: ChangeEvent<FormElement>) => {
        // Permitir solo dígitos numéricos
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 8) {
            setTodos({
                ...todos,
                [e.target.name]: e.target.value
            })
        }
    }
    const handleChangeMovil = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        // Permitir borrar (campo vacío) y validar números de 1 a 10 dígitos

        if (/^\d*$/.test(inputValue) && inputValue.length <= 9 && (inputValue === "" || inputValue[0] !== "0")) {
            setTodos({
                ...todos,
                [e.target.name]: e.target.value
            }) // Sin error si cumple con la validación
        }


    };
    const handleSubmit = async (event: React.FormEvent) => {
        setIsLoading(true)
        event.preventDefault();
        const erroresValidacion = await validateRegisterUser(todos);
        if (erroresValidacion.status) {
            setIsLoading(false)
            Swal.fire({
                title: 'Error!',
                text: `${erroresValidacion.msjStatus}`,
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
        } else {
            const urlParamsObject = {}
            const path = "participante/store"
            const options = {
                method: 'POST',
                headers: {
                    'Authorization-secret': `${process.env.NEXT_PUBLIC_AUTHORIZATION_FORM}`,  // Encabezado de autorización
                },
                body: JSON.stringify(todos),
            }
            const data = await fecthApi(path, urlParamsObject, options)
            if (data.status === 'error') {
                setIsLoading(false)
                // console.log(data)
                if (data.errors.dni) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'El DNI registrado ya existe!',
                        icon: 'error',
                        confirmButtonText: 'Cerrar'
                    })
                } else {
                    if (data.errors.password) {
                        Swal.fire({
                            title: 'Error!',
                            text: 'El campo de contraseña debe tener al menos 6 caracteres.',
                            icon: 'error',
                            confirmButtonText: 'Cerrar'
                        })
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Vuelva a intentar mas tarde!',
                            icon: 'error',
                            confirmButtonText: 'Cerrar'
                        })
                    }
                }

            } else {
                setIsSubmitted(true)
                setIsLoading(false)
            }

            console.log(data)
        }

    }
    return (
        <div className={styles.fullGrid}>
            {
                isSubmitted ? (
                    <DynamicGraciasForm />
                ) : (
                    <>
                        <div className={styles.boxTitular}>
                            <h1 className={Humane600.className}>REGÍSTRATE</h1>
                            <h2 className={poppins600.className}>
                                y se unos de los pocos con gran oportunidad de ganar.
                            </h2>
                        </div>
                        <form onSubmit={handleSubmit} className={`${styles.formRegister} ${poppins400.className}`}>
                            {/* <pre>{JSON.stringify(todos)}</pre> */}
                            <div>
                                <label htmlFor="nombres">Nombres <span>*</span>:</label>
                                <input
                                    type='text'
                                    placeholder='Ingresa tus nombres'
                                    className='form-control'
                                    value={todos.nombres}
                                    name='nombres'
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="apellido_paterno">Apellidos Paterno <span>*</span>:</label>
                                <input
                                    type='text'
                                    placeholder='Ingresa tus apellidos Paternos'
                                    className='form-control'
                                    value={todos.apellido_paterno}
                                    name='apellido_paterno'
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="apellido_materno">Apellidos Materno:</label>
                                <input
                                    type='text'
                                    placeholder='Ingresa tus apellidos Maternos'
                                    className='form-control'
                                    value={todos.apellido_materno}
                                    name='apellido_materno'
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="celular">Celular <span>*</span>:</label>
                                <input
                                    type='text'
                                    placeholder='Ingresa Celular'
                                    className='form-control'
                                    value={todos.celular}
                                    name='celular'
                                    onChange={handleChangeMovil}
                                />
                            </div>
                            <div>
                                <label htmlFor="dni">Nro. de DNI <span>*</span>:</label>
                                <input
                                    type='text'
                                    placeholder='Ingresa Nro. de DNI'
                                    className='form-control'
                                    value={todos.dni}
                                    name='dni'
                                    onChange={handleChangeNumber}
                                />
                            </div>
                            <div>
                                <label htmlFor="birhtday">Fecha de Nacimiento <span>*</span>:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder='Ingresa tu fecha de nacimiento'
                                    value={todos.birhtday}
                                    name='birhtday'
                                    onChange={handleChangeFull}
                                />
                            </div>
                            <div >
                                <label htmlFor="direccion">Direcci&oacute;n:</label>
                                <input
                                    type='text'
                                    placeholder='Ingresa tu direcci&oacute;n'
                                    className='form-control'
                                    value={todos.direccion}
                                    name='direccion'
                                    onChange={handleChangeFull}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Correo electrónico <span>*</span>:</label>
                                <input
                                    type='text'
                                    placeholder='Ingresa tus correo electrónico'
                                    className='form-control'
                                    value={todos.email}
                                    name='email'
                                    onChange={handleChangeFull}
                                />
                            </div>
                            <div >
                                <label htmlFor="password">Contraseña <span>*</span>:</label>
                                <input
                                    type='password'
                                    placeholder='Requiere como mínimo 8 caracteres'
                                    className='form-control'
                                    value={todos.password}
                                    name='password'
                                    onChange={handleChangeFull}
                                />
                            </div>
                            <div >
                                <label htmlFor="password_confirmation">Confirma tu contraseña <span>*</span>:</label>
                                <input
                                    type='password'
                                    placeholder='Requiere como mínimo 8 caracteres'
                                    className='form-control'
                                    value={todos.password_confirmation}
                                    name='password_confirmation'
                                    onChange={handleChangeFull}
                                />
                            </div>
                            <div className={styles.fullWidth}>
                                <label className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        id="isChecked"
                                        name="isChecked"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className="checkmark"></span>
                                    Acepto los <a href="/terminos-y-condiciones" target='_blank'>Términos y condiciones</a> y <a href="/proteccion-de-datos" target='_blank'>Políticas
                                        de Privacidad</a>
                                </label>
                            </div>
                            <div className={`${styles.fullWidth} ${styles.buttonBox}`}>
                                <button type="submit" className='btn btn-primary btnForm' disabled={isLoading}>
                                    {isLoading ? 'Loading...' : 'Crear cuenta'}
                                </button>
                            </div>
                        </form>
                    </>
                )
            }

        </div>
    )
}

export default Create
