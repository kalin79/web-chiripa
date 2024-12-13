'use client'
import { useSession } from "next-auth/react";

import { useState, useContext, useEffect } from 'react';

import { cartContext } from '@/context/CartContent';

import Image from 'next/image'
import styles from '@/styles/sass/compra.module.sass'

import { Poppins } from 'next/font/google'

import { formatCurrency } from "@/helpers/funciones"
import { CartUser } from "@/interfaces/cart"
// import Swal from 'sweetalert2'

// import { validateCompra } from "@/helpers/validacion-compra"
import gsap from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { getNiubizToken } from '@/util/niubiz';
import { getResponseBuy } from '@/util/session';

const Poppins400 = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

// type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;


const initialTodo = {
    email: '',
    nombres: '',
    apellidos: '',
    surname: '',
    tipo_documento: '',
    numero_documento: '',
    telefono: '',
    sub_total: '',
    total_price: '',
    status_pay: '',
    discount: '',
    sorteoListado: []
}
const FormularioCompra = () => {
    const { data: session } = useSession();
    // const [isOpen, setIsOpen] = useState(false)
    const [isOpenDatos, setIsOpenDatos] = useState(false)
    const [isViewOrder, setIsViewOrder] = useState(false)
    const [isChecked, setIsChecked] = useState(true)
    const [todos, setTodos] = useState<CartUser>(initialTodo)
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [response, setResponse] = useState<any>(null);
    // const [isChecked, setIsChecked] = useState<boolean>(false)

    const isLogin = true
    const { cartProducts, totalPriceTicket } = useContext(cartContext);
    const descuento = 0
    useEffect(() => {
        if (session && session.user) {
            console.log(session)
            setTodos(prevTodos => ({
                ...prevTodos,
                email: session.user.email ?? '',
                nombres: session.user.name ?? '',
                numero_documento: session.user.dni ?? ''
            }));
            setIsOpenDatos(true);
        } else {
            setIsOpenDatos(false);
        }
    }, [session]);

    // const handlePagar = async () => {

    //     const erroresValidacion = await validateCompra(todos);
    //     if (erroresValidacion.status) {
    //         setIsOpen(false)
    //         Swal.fire({
    //             title: 'Error!',
    //             text: `${erroresValidacion.msjStatus}`,
    //             icon: 'error',
    //             confirmButtonText: 'Cerrar'
    //         })
    //     } else {
    //         gsap.to(window, { duration: .5, scrollTo: '#paymentForm' });
    //         setIsOpen(true)
    //     }


    // }

    const generatePurchaseNumber = () => {
        const timestamp = Date.now(); // Obtiene la fecha actual en milisegundos
        const random = Math.floor(Math.random() * 10000); // Genera un número aleatorio
        return `${timestamp}${random}`.slice(0, 12); // Concatenamos el timestamp con el número aleatorio
    };

    useEffect(() => {
        // Cargar el script de checkout de Niubiz
        const script = document.createElement('script');
        script.src = "https://static-content-qas.vnforapps.com/env/sandbox/js/checkout.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        // Configurar VisanetCheckout una vez que el script esté cargado
        script.onload = () => {
            setIsScriptLoaded(true); // Indicamos que el script se ha cargado correctamente
        };

        // Limpiar el script cuando el componente se desmonte
        return () => {
            document.body.removeChild(script);
        };
    }, []);



    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        // setResponse(null);

        const purchaseNumber = generatePurchaseNumber();
        const expirationMinutes = '20';
        const dataMerchantid = process.env.NEXT_PUBLIC_NIUBIZ_CLIENT_MERCHANTID || ''
        const payload = {
            channel: 'web',
            amount: 10.5,
            antifraud: {
                clientIp: '24.252.107.29',
                merchantDefineData: {
                    MDD4: 'c.augusto.espinoza@gmail.com',
                    MDD32: '40609717',
                    MDD75: 'Registrado',
                    MDD77: 4,
                },
            },
            dataMap: {
                cardholderCity: 'Lima',
                cardholderCountry: 'PE',
                cardholderAddress: 'Av Jose Pardo 831',
                cardholderPostalCode: '12345',
                cardholderState: 'LIM',
                cardholderPhoneNumber: '987654321',
            },
        };


        try {

            const token = await getNiubizToken();
            const response = await getResponseBuy(payload, token)
            // setResponse(response)

            // Cargamos el formulario
            if (isScriptLoaded && window.VisanetCheckout) {
                // Configurar VisanetCheckout antes de abrir el formulario
                // alert(2)
                console.log(response.sessionKey);  // Verifica que no sea undefined o null
                console.log(dataMerchantid);
                console.log(purchaseNumber);
                window.VisanetCheckout.configure({
                    sessiontoken: response.sessionKey,
                    channel: 'web',
                    merchantid: dataMerchantid,
                    purchasenumber: purchaseNumber,
                    amount: payload.amount,
                    expirationminutes: expirationMinutes,
                    timeouturl: 'about:blank',
                    merchantlogo: 'img/comercio.png',
                    formbuttoncolor: '#000000',
                    action: 'javascript:void(0);',
                    complete: (params: any) => {
                        console.log("Pago completado:", params);
                    }
                });

                // Abre el formulario de pago
                window.VisanetCheckout.open();
                // Manejo adicional de resultados
                window.VisanetCheckout.configuration.complete = procesar;
                function procesar(parametros: any) {
                    console.log(parametros);
                    // Extraer los datos del token de pago
                    const tokenId = parametros.token || ''; // Verifica el campo exacto
                    // const purchaseNumber_ = purchaseNumber || ''; // Verifica el campo exacto
                    const amount = 10.5; // Verifica el campo exacto
                    const currency = 'PEN'; // Define la moneda (modificar si es necesario)

                    // // Crear el cuerpo de la solicitud
                    const authorizationPayload = {
                        channel: "web",
                        captureType: "manual", // Cambiar a 'automatic' si es necesario
                        countable: true,
                        order: {
                            tokenId,
                            purchaseNumber: parseInt(purchaseNumber),
                            amount,
                            currency
                        }
                    };

                    console.log(authorizationPayload)

                    console.log('token', token)
                    // Enviar los datos a la API de autorización
                    // console.log(`https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/${dataMerchantid}`)
                    fetch(`https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/${dataMerchantid}`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `${token}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(authorizationPayload)
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Error en la autorización:  ${response.status} ${response.statusText}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log('Autorización exitosa:', data);

                            // Procesar la respuesta, como mostrar un mensaje de éxito al usuario
                        })
                        .catch(error => {
                            console.error('Error al autorizar el pago:', error);
                            // Mostrar un mensaje de error al usuario
                        });
                }
            } else {
                console.error('El script de VisanetCheckout no se ha cargado correctamente.');
            }
        } catch (error) {
            console.error('Error:', error);
            // setResponse({ error: 'Error al procesar la solicitud' });
        } finally {
            setLoading(false);
        }





    }
    // const handleChangeFull = (e: ChangeEvent<FormElement>) => {
    //     const { name, value } = e.target;
    //     setTodos(prevTodos => ({
    //         ...prevTodos,
    //         [name]: value
    //     }))
    // }
    // const handleChange = (e: ChangeEvent<FormElement>) => {
    //     const { name, value } = e.target;
    //     if (value.trim() === "") {
    //         setTodos(prevTodos => ({
    //             ...prevTodos,
    //             [name]: value
    //         }))
    //     } else if (/^[a-zA-Z']*$/.test(value.replace(/\s/g, ''))) {
    //         setTodos(prevTodos => ({
    //             ...prevTodos,
    //             [name]: value
    //         }))
    //     }
    // }
    // const handleChangeMovil = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;


    //     if (/^\d*$/.test(value) && value.length <= 9 && (value === "" || value[0] !== "0")) {
    //         setTodos(prevTodos => ({
    //             ...prevTodos,
    //             [name]: value
    //         }))
    //     }
    // };

    // const handleChangeNumber = (e: ChangeEvent<FormElement>) => {

    //     const { name, value } = e.target;
    //     if (/^\d*$/.test(value) && value.length <= 12) {
    //         setTodos(prevTodos => ({
    //             ...prevTodos,
    //             [name]: value
    //         }))
    //     }
    // }
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin)
    }, []);
    const handleViewOrder = () => {
        console.log(isViewOrder)
        setIsViewOrder((prevState) => !prevState)
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className={styles.layoutContainer}>
            <div className={styles.orderContainer}>
                <div className={styles.buyContainer}>
                    <div className={styles.stepsContainer}>
                        <div className={styles.contactForm}>
                            {/* <div className={styles.accordionLine}>
                                <p className={(isLogin && isOpenDatos) ? styles.active : ''}>1</p>
                                <div className={styles.LineUp}></div>
                            </div> */}

                            {/* {response && (
                                <div style={{ marginTop: '20px' }}>
                                    <h3>Respuesta:</h3>
                                    <pre>{JSON.stringify(response, null, 2)}</pre>
                                </div>
                            )} */}
                            <div className={styles.accordionForm}>
                                <div className={styles.accordionHeader}>
                                    <div className={styles.accordionInfo}>
                                        <h3>Datos de Facturaci&oacute;n</h3>
                                        {JSON.stringify(cartProducts)}
                                    </div>
                                    <div className={`${styles.accordionArrow} ${(isLogin && isOpenDatos) ? styles.expanded : ''}`} >
                                        <Image
                                            src="/images/arrow2.svg"
                                            width={17}
                                            height={9}
                                            alt="Datos del Contacto"
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.accordionBody} ${(isLogin && isOpenDatos) ? styles.expandedInfo : ''}`}>
                                    <form onSubmit={handleSubmit}>
                                        <div className={styles.FormDatos}>
                                            <div>
                                                <input
                                                    type="text"
                                                    className={`form-control`}
                                                    name="email"
                                                    value={todos.email ?? ''}
                                                    placeholder='Correo electrónico*'
                                                    // onChange={handleChangeFull}
                                                    disabled
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className={`form-control`}
                                                    placeholder='Número de documento:*'
                                                    name="numero_documento"
                                                    value={todos.numero_documento}
                                                    // onChange={handleChangeNumber}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.paymentMethod}>
                                            <div className={styles.paymentMethodOption}>
                                                <div>
                                                    <label className={`${styles.customRadio} ${Poppins400.className}`}>
                                                        <input
                                                            type="checkbox"
                                                            name="payment"
                                                            checked={isChecked}
                                                            className={styles.radioInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <span className={styles.radioCheckmark}></span>
                                                        Culqui Pago
                                                    </label>
                                                </div>
                                                <div>
                                                    <Image
                                                        src="/images/brand-culqi.svg"
                                                        className={styles.imageCulqui}
                                                        width={117}
                                                        height={36}
                                                        alt="Datos del Contacto"
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.paymentDescription}>
                                                <p className={Poppins400.className}>
                                                    Paga de forma segura con cualquier tarjeta de crédito o débito. VISA, Mastercard, Amex, Diners.
                                                    Ademas de ello tambien puede pagar con Yape o Plin.
                                                </p>
                                            </div>

                                        </div>
                                        <div className={styles.FormDatos}>
                                            <label className={`custom-checkbox ${styles.customCheck}`}>
                                                <input
                                                    type="checkbox"
                                                    id="isChecked"
                                                    name="isChecked"
                                                // checked={isChecked}
                                                // onChange={handleCheckboxChange}
                                                />
                                                <span className="checkmark"></span>
                                                Acepto los <a href="/terminos-y-condiciones" target='_blank'>Términos y Condiciones</a> y
                                                las <a href="/proteccion-de-datos" target='_blank'>Política de Privacidad y Reglamento</a>
                                            </label>
                                        </div>
                                        <div className={styles.FormDatos}>
                                            <div className={styles.btnForm}>
                                                <button
                                                    type='submit'
                                                    className='btnMain'
                                                    disabled={loading}
                                                >
                                                    {loading ? 'Procesando...' : 'Realizar Pago'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${isViewOrder ? styles.activeDetailOrder : ''}  ${styles.detailOrder}`}>
                    <div className={`${isViewOrder ? styles.activeOrderView : ''}  ${styles.detailContent}`} >
                        <div className={` ${styles.headerDetailorder}`} onClick={handleViewOrder}>
                            <div>
                                <Image
                                    src='/images/down-arrow.webp'
                                    width={20}
                                    height={20}
                                    alt="Datos del Contacto"
                                />
                                <h2>Orden de Compra</h2>
                            </div>
                            <div>
                                <p>{formatCurrency(totalPriceTicket - descuento)}</p>
                            </div>
                        </div>
                        <div className={styles.bodyDetailorder}>
                            <div className={styles.bodyOverflow}>
                                {
                                    cartProducts && cartProducts.length > 0 ? (
                                        cartProducts.map((item, index) => (
                                            <div key={index}>
                                                <Image
                                                    src={item.image}
                                                    width={110}
                                                    height={120}
                                                    alt="Datos del Contacto"
                                                />
                                                <div>
                                                    <h3>
                                                        {item.title}
                                                    </h3>
                                                    <div className={styles.subTotalInfo}>
                                                        <span>{item.quantity} ticket</span>
                                                        <p>
                                                            {formatCurrency(item.price * item.quantity)}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No hay productos en el carrito.</p>
                                    )
                                }
                            </div>
                        </div>
                        <div className={styles.PriceContent}>
                            <div>
                                <p>Subtotal</p>
                                <p>{formatCurrency(totalPriceTicket)}</p>
                            </div>
                            <div className={styles.infoDscto}>
                                <p>Descuento Chiripa </p>
                                <p>{formatCurrency(descuento)}</p>
                            </div>
                            <div className={styles.priceTotal}>
                                <h2>Importe Total</h2>
                                <p>{formatCurrency(totalPriceTicket - descuento)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioCompra
