'use client'
import { useState, ChangeEvent } from "react"
import dynamic from 'next/dynamic'
import Swal from 'sweetalert2'

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
    name: "",
    lastname: "",
    doc: "",
    movil: "",
    email: "",
    password: "",
    recoveryPass: "",
    tyc: false,
}

const DynamicGraciasForm = dynamic(() => import('@components/home/GraciasForm'), { loading: () => <p>Loading...</p> })

const Formulario = () => {
    const [todos, setTodos] = useState<objUser>(initialTodo)
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)


    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        setTodos({
            ...todos,
            tyc: event.target.checked
        })
    };
    const handleChange = (e: ChangeEvent<FormElement>) => {
        setTodos({
            ...todos,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const erroresValidacion = await validateRegisterUser(todos);
        if (erroresValidacion.status) {
            console.log(erroresValidacion.msjStatus)

            Swal.fire({
                title: 'Error!',
                text: `${erroresValidacion.msjStatus}`,
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })

        } else {
            setIsSubmitted(true)
            // const responseAPI = await addForm({
            //     url: 'url',
            //     dataForm: JSON.stringify(todo),
            //     token: 'token'
            // })
            // router.push('/admin/events/edit/12')
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
                                    Y OBTÉN <br />
                                    <span>
                                        TU USUARIO
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
                                    Multiplica tu oportunidad y maximiza
                                    tu emoción: ¡Regístrate ahora!
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
                                            value={todos.name}
                                            name='name'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="apellidos">Apellidos:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Ingresa tus apellidos paterno y manterno'
                                            value={todos.lastname}
                                            name='lastname'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="doc">Nro. de DNI:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Ingresa tu DNI'
                                            value={todos.doc}
                                            name='doc'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="movil">Celular:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Ingresa tu celular'
                                            value={todos.movil}
                                            name='movil'
                                            onChange={handleChange}
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
                                            onChange={handleChange}
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
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password2">Repetir Contraseña:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder='Repite tu contraseña'
                                            value={todos.recoveryPass}
                                            name='recoveryPass'
                                            onChange={handleChange}
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
                                            Acepto los <a href="#" target='_blank'>Términos y Condiciones</a>&nbsp;y las&nbsp;
                                            <a href="#" target='_blank'>política de privacidad</a>
                                        </label>
                                    </div>

                                    <div>
                                        <button type='submit' className='buttonClass'>Regístrate</button>
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
