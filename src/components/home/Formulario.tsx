'use client'
import { useState, ChangeEvent, useEffect } from "react"
import { fecthApi } from '@/actions/form.actions'

import dynamic from 'next/dynamic'
import Swal from 'sweetalert2'

import { useSearchParams } from 'next/navigation';

import { validateRegisterUser } from "@/helpers/validacion-registro"
import { objUser } from "@/interfaces/user"
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import styles from '@/styles/sass/form.module.sass'
const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})


const Poppins500 = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;



const initialTodo = {
    nombres: "",
    apellido_paterno: "",
    apellido_materno: "@VACIO@",
    dni: "",
    register_from: "1",
    celular: "",
    email: "",
    password: "",
    password_confirmation: "",
    tyc: false,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
}

const DynamicGraciasForm = dynamic(() => import('@/components/suscripcion/GraciasForm'), { loading: () => <p>Loading...</p> })

const Formulario = () => {
    const [todos, setTodos] = useState<objUser>(initialTodo)
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(false)



    const searchParams = useSearchParams();


    useEffect(() => {
        // Obtener el parámetro "id" y actualizar el estado
        setTodos(prevTodos => ({
            ...prevTodos, // Se mantiene el estado previo
            utm_source: searchParams.get("utm_source") || "",
            utm_medium: searchParams.get("utm_medium") || "",
            utm_campaign: searchParams.get("utm_campaign") || "",
            utm_content: searchParams.get("utm_content") || "",
        }));
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

            // const urlParamsObject = {
            //     populate: "*",
            //     sort: {
            //         createAt: "ASC",
            //     },
            //     pagination: {
            //         page: 1,
            //         pageSize: 2,
            //     },
            // };

            const urlParamsObject = {}
            const path = "participante/store"
            console.log(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM)
            // ${process.env.NEXT_PUBLIC_BACKEND_URL}
            const options = {
                method: 'POST',
                headers: {
                    'Authorization': `${process.env.NEXT_PUBLIC_AUTHORIZATION_FORM}`,  // Encabezado de autorización
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
        <div className="container formularioRegistroHome">

            <div className={`gridContainer ${styles.formContainer}`}>
                {
                    isSubmitted ? (
                        <DynamicGraciasForm />
                    ) : (
                        <>
                            <div>
                                <h1 className={Humane600.className}>
                                    <span>
                                        REGÍSTRATE
                                        <Image
                                            className={styles.imageSticker2}
                                            src="/images/remolino.png"
                                            width={194}
                                            height={173}
                                            alt="De Chiripa :: Preparate para lo que viene"
                                        />
                                    </span> <br />
                                    <span>
                                        Y PARTICIPA
                                        <Image
                                            className={styles.imageSticker}
                                            src="/images/sticker.svg"
                                            width={54}
                                            height={73}
                                            alt="De Chiripa :: Preparate para lo que viene"
                                        />
                                    </span>
                                </h1>
                                <h3 className={Poppins500.className}>
                                    ¡Maximiza tus tus 5 lucas!
                                </h3>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    {/* {JSON.stringify(todos, null)} */}
                                    <div>
                                        <label htmlFor="nombre">Nombres:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Ingresa tus nombres aquí'
                                            value={todos.nombres}
                                            name='nombres'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="apellidos">Apellidos:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Ingresa tus apellidos paterno y manterno'
                                            value={todos.apellido_paterno}
                                            name='apellido_paterno'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="doc">Nro. de DNI:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Ingresa tu DNI'
                                            value={todos.dni}
                                            name='dni'
                                            onChange={handleChangeNumber}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="movil">Celular:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Ingresa tu celular'
                                            value={todos.celular}
                                            name='celular'
                                            onChange={handleChangeMovil}
                                        />
                                    </div>
                                    <div className={styles.fullWidth}>
                                        <label htmlFor="email">Correo electrónico:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Ingresa tu correo electrónico'
                                            value={todos.email}
                                            name='email'
                                            onChange={handleChangeFull}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password1">Contraseña:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder='Contraseña'
                                            value={todos.password}
                                            name='password'
                                            onChange={handleChangeFull}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password2">Repetir Contraseña:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder='Repite tu contraseña'
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
                                            Acepto los <a href="https://s3.us-east-1.amazonaws.com/img.dechiripa.com.pe/dechiripa/politica.pdf" target='_blank'>Términos y Condiciones</a>&nbsp;y las&nbsp;
                                            <a href="https://s3.us-east-1.amazonaws.com/img.dechiripa.com.pe/dechiripa/datos.pdf" target='_blank'>Política de Privacidad</a>
                                        </label>
                                    </div>

                                    <div>
                                        <button type='submit' className='buttonClass' disabled={isLoading} >
                                            {isLoading ? 'Loading...' : 'Registrar'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Formulario
