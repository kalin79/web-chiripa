"use client";
// import { signIn } from "next-auth/react";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";


import Swal from 'sweetalert2'
import localFont from 'next/font/local'

import { Poppins } from 'next/font/google'
import styles from '@/styles/sass/login.module.sass'

import { validateReset } from "@/helpers/validacion-reset"
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
}
const Reset = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const initialTodo = {
        email: "",
        password: ""
    }
    const [todos, setTodos] = useState<Todo>(initialTodo)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const { email } = todos
        setIsLoading(true);
        const erroresValidacion = await validateReset(todos);
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
    return (
        <div>
            <div className={styles.boxTitular}>
                <h1 className={Humane600.className}>Recuperar contraseña</h1>
                <h2 className={poppins600.className}>
                    Rellena el formulario para restablecer tu contraseña
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
                    <button type="submit" className='btn btn-primary btnForm' disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Evniar'}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Reset
