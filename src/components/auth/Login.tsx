"use client";
import { signIn } from "next-auth/react";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";


import Link from 'next/link'
import Swal from 'sweetalert2'
import localFont from 'next/font/local'

import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/login.module.sass'

import { validateLogin } from "@/helpers/validacion-login"
// import { objSuscripcion } from "@/interfaces/suscripcion"

// const poppins500 = Poppins({
//     weight: '500',
//     subsets: ['latin'],
//     display: 'swap',
// })

// const poppins600 = Poppins({
//     weight: '600',
//     subsets: ['latin'],
//     display: 'swap',
// })

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

const Humane600 = localFont({
    src: '../../../public/fonts/Humane-SemiBold.woff2',
    weight: '600',
    style: 'normal',
})

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface Todo {
    email: string;
    password: string;
}

const Login = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const initialTodo = {
        email: "",
        password: ""
    }
    const [todos, setTodos] = useState<Todo>(initialTodo)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = todos
        setIsLoading(true);
        const erroresValidacion = await validateLogin(todos);
        if (erroresValidacion.status) {
            setIsLoading(false)
            Swal.fire({
                title: 'Error!',
                text: `${erroresValidacion.msjStatus}`,
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
        } else {
            setIsLoading(false)
            const responseNextAuth = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            console.log(responseNextAuth)
            if (responseNextAuth?.error) {
                // setErrors(responseNextAuth.error.split(","));
                // console.log(responseNextAuth?.error)
                Swal.fire({
                    title: 'Error!',
                    text: responseNextAuth?.error,
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                })
                setIsLoading(false);
                return;
            }
            //   setTodos(initialTodo)
            router.push("/");
        }

    }

    const handleChange = (e: ChangeEvent<FormElement>) => {
        setTodos({
            ...todos,
            [e.target.name]: e.target.value
        })
    }


    // if (session) {
    //     return (
    //     <>
    //         Signed in as {session.user.email} <br />
    //         <button
    //         onClick={() => signOut()}
    //         className="btn btn-danger"
    //         >
    //         Sign out
    //         </button>
    //     </>
    //     );
    // }


    return (
        <div>
            <div className={styles.boxTitular}>
                <h1 className={Humane600.className}>BIENVENIDO</h1>
                <h2 className={poppins600.className}>
                    y se unos de los pocos con gran oportunidad de ganar.
                </h2>
            </div>
            <form onSubmit={handleSubmit} className={`${styles.loginForm} ${poppins400.className}`}>
                <div>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type='text'
                        placeholder='Ingrese su email'
                        className='form-control'
                        value={todos.email}
                        name='email'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type='password'
                        placeholder='Ingrese su password'
                        className='form-control'
                        value={todos.password}
                        name='password'
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.alignBetween}>
                    <label className="custom-checkbox">
                        <div className='checkboxContainer'>
                            <input
                                type="checkbox"
                                id="isChecked"
                                name="isChecked"
                            // checked={isChecked}
                            // onChange={handleCheckboxChange}
                            />
                            <span className="checkmark"></span>
                            <div>
                                <p>Recordar</p>
                            </div>
                        </div>
                    </label>
                    <Link href='/recuperar-contrasena'>Olvidaste tu contraseña?</Link>
                </div>
                <div>
                    <button type="submit" className='btn btn-primary btnForm' disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Ingresar'}
                    </button>
                </div>
                <div className={styles.alignRight}>
                    <div>
                        <p>¿No tienes una cuenta?</p> <Link href='/auth/create'>Crea una cuenta</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
