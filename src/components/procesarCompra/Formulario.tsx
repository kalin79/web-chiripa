'use client'
import { useSession } from "next-auth/react";
// import { useRouter } from 'next/navigation';

import { useState, useContext, useEffect } from 'react';
import { fecthApi, fecthApiNubiz } from '@/actions/form.actions'

import { cartContext } from '@/context/CartContent';

import Image from 'next/image'
import styles from '@/styles/sass/compra.module.sass'

import { Poppins } from 'next/font/google'

import { formatCurrency } from "@/helpers/funciones"
import { CartUser } from "@/interfaces/cart"
import Swal from 'sweetalert2'

import { validateCompra } from "@/helpers/validacion-compra"
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
    id: '',
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
interface Props {
    myIP: string
}
const FormularioCompra: React.FC<Props> = ({ myIP }) => {
    const { data: session } = useSession();
    const tokenLogin: string = session?.user.token || ''
    // const router = useRouter();
    // const [isOpen, setIsOpen] = useState(false)
    const [isOpenDatos, setIsOpenDatos] = useState(false)
    const [isViewOrder, setIsViewOrder] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [todos, setTodos] = useState<CartUser>(initialTodo)
    // const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [response, setResponse] = useState<any>(null);
    const [isChecked2, setIsChecked2] = useState<boolean>(true)

    const isLogin = true
    const { cartProducts, totalPriceTicket, actualizarRespuestaCompra, resetCartProducts } = useContext(cartContext);
    const descuento = 0
    useEffect(() => {
        if (session && session.user) {
            console.log(session)
            setTodos(prevTodos => ({
                ...prevTodos,
                email: session.user.email ?? '',
                nombres: session.user.name ?? '',
                numero_documento: session.user.dni ?? '',
                id: session.user.id ?? '',
                apellidos: session.user.apellido_paterno ?? '',
                telefono: session.user.celular ?? '',
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





    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        // setResponse(null);


        const erroresValidacion = await validateCompra(todos);
        if (erroresValidacion.status) {
            setLoading(false)
            Swal.fire({
                title: 'Error!',
                text: `${erroresValidacion.msjStatus}`,
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
        } else {

            const purchaseNumber = generatePurchaseNumber();
            const expirationMinutes = '20';
            const dataMerchantid = process.env.NEXT_PUBLIC_NIUBIZ_CLIENT_MERCHANTID || ''
            const payload = {
                channel: 'web',
                amount: (totalPriceTicket - descuento),
                antifraud: {
                    clientIp: myIP, // ipdel cliente
                    merchantDefineData: {
                        MDD4: todos.email,
                        MDD32: todos.numero_documento,
                        MDD75: 'Registrado',
                        MDD77: 4, // Dias de registro desde que se creo el usuario hasta la fecha 
                    },
                },
                dataMap: {
                    cardholderCity: 'Lima',
                    cardholderCountry: 'PE',
                    cardholderAddress: 'Jr. Maximiliano Velarde N° 171, Dpto. 404',
                    cardholderPostalCode: '15054',
                    cardholderState: 'LIM',
                    cardholderPhoneNumber: '919553693',
                },
            };


            try {

                const token = await getNiubizToken();
                const response = await getResponseBuy(payload, token)
                console.log(payload)

                // Cargamos el formulario
                if (window.VisanetCheckout) {
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
                        action: 'javascript:void(0)',
                        complete: (params: any) => {
                            console.log("Pago completado:", params);
                        }
                    });

                    // Abre el formulario de pago
                    window.VisanetCheckout.open();
                    // Manejo adicional de resultados
                    window.VisanetCheckout.configuration.complete = procesar;
                    async function procesar(parametros: any) {
                        // console.log(parametros);
                        // Extraer los datos del token de pago
                        const tokenId = parametros.token || ''; // Verifica el campo exacto
                        // const purchaseNumber_ = purchaseNumber || ''; // Verifica el campo exacto
                        const amount = totalPriceTicket - descuento; // Verifica el campo exacto
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
                            },
                            dataMap: {
                                urlAddress: 'https://dechiripa.com.pe/',
                                partnerIdCode: '',
                                serviceLocationCityName: 'Lima',
                                serviceLocationCountrySubdivisionCode: 'LIM',
                                serviceLocationCountryCode: 'PER',
                                serviceLocationPostalCode: '15086'
                            }
                        };
                        const payLoad = {
                            purchaseNumber: purchaseNumber,
                            participante_id: todos.id,
                            nombres: todos.nombres,
                            apellidos: todos.apellidos,
                            tipo_documento: 'DNI',
                            numero_documento: todos.numero_documento,
                            email: todos.email,
                            telefono: todos.telefono,
                            montoSubTotal: totalPriceTicket,
                            montoTotal: (totalPriceTicket - descuento),
                            status_pay: 1,
                            montoDescuento: descuento,
                            // transaction_id: dataTransaccion.dataMap.TRANSACTION_ID,
                            // transaction_result: dataTransaccion.dataMap,
                            sorteoListado: cartProducts

                        }
                        console.log({
                            authorizationPayload,
                            payLoad
                        })
                        // const urlParamsObject = {}
                        // const path = `niubiz-notification/${process.env.NEXT_PUBLIC_AUTHORIZATION_FORM}`
                        // console.log(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM)
                        // // ${process.env.NEXT_PUBLIC_BACKEND_URL}
                        // const options = {
                        //     method: 'POST',
                        //     body: JSON.stringify({
                        //         authorizationPayload,
                        //         payLoad,
                        //         token,
                        //         dataMerchantid
                        //     }),
                        // }
                        // const data = await fecthApi(path, urlParamsObject, options)
                        // console.log(data)
                        // En el response del api autorizador en la venta aprobada validar en el objeto datamap en el campo STATUS : Authorized y para la venta denegada en el objeto data en el campo STATUS : Not Authorized.

                        // RESPUESTAS VENTA APROBADA		
                        // • Número de pedido. (purchaseNumber)		
                        // • Nombre y apellido del usuario. (opcional)		
                        // • Fecha y hora del pedido. (TRANSACTION_DATE) Fecha de la transacción expresada en formato nativo yyMMddHHmmSS		
                        // • Importe de la transacción.(Amount)		
                        // • Tipo de moneda.(Currency)		
                        // • Descripción de el /los productos.(opcional)		
                        // • Tarjeta enmascarada.(Card)		
                        // • Marca de la tarjeta.(Brand)

                        // RESPUESTAS VENTA DENEGADA
                        // • Número de pedido. (purchaseNumber recuperar por base de datos o variable)
                        // • Fecha y hora del pedido. (TRANSACTION_DATE) Fecha de la transacción expresada en formato nativo yyMMddHHmmSS
                        // • Descripción de la denegación.(ACTION_DESCRIPTION)

                        console.log(authorizationPayload)

                        console.log('token', token)
                        // Enviar los datos a la API de autorización


                        const urlParamsObject = {}
                        const path = `https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/${dataMerchantid}`
                        // console.log(process.env.NEXT_PUBLIC_AUTHORIZATION_FORM)
                        // ${process.env.NEXT_PUBLIC_BACKEND_URL}
                        const options = {
                            method: 'POST',
                            headers: {
                                'Authorization': token,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(authorizationPayload),
                        }
                        const data = await fecthApiNubiz(path, urlParamsObject, options)
                        console.log(data)

                        procesarTransaccion(data, purchaseNumber);


                        // console.log(`https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/${dataMerchantid}`)
                        // fetch(`https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/${dataMerchantid}`, {
                        //     method: 'POST',
                        //     headers: {
                        //         'Authorization': `${token}`,
                        //         'Content-Type': 'application/json'
                        //     },
                        //     body: JSON.stringify(authorizationPayload)
                        // })
                        //     .then(data => {
                        //         console.log('Autorización exitosa:', data);
                        //         procesarTransaccion(data, purchaseNumber);
                        //         // Procesar la respuesta, como mostrar un mensaje de éxito al usuario
                        //     })
                        //     .catch(error => {
                        //         actualizarRespuestaCompra('error')
                        //         // actualizarRespuestaCompra(`No se pudo realizar la compra: ${error}`)
                        //         console.error('Error al autorizar el pago:', error);
                        //         setTimeout(() => {
                        //             top!.location.href = '/respuesta-compra';
                        //         }, 1000)
                        //         // Mostrar un mensaje de error al usuario
                        //     });
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
    }

    const procesarTransaccion = async (dataTransaccion: any, purchaseNumber: string) => {
        const urlParamsObject = {}
        const path = "participante/order"
        const payLoad = {
            purchaseNumber: purchaseNumber,
            participante_id: todos.id,
            nombres: todos.nombres,
            apellidos: todos.apellidos,
            tipo_documento: 'DNI',
            numero_documento: todos.numero_documento,
            email: todos.email,
            telefono: todos.telefono,
            montoSubTotal: totalPriceTicket,
            montoTotal: (totalPriceTicket - descuento),
            status_pay: 1,
            montoDescuento: descuento,
            transaction_id: dataTransaccion.dataMap.TRANSACTION_ID,
            transaction_result: dataTransaccion.dataMap,
            sorteoListado: cartProducts

        }
        console.log(tokenLogin)
        const options = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + tokenLogin,
                'Authorization-secret': `${process.env.NEXT_PUBLIC_AUTHORIZATION_FORM}`,  // Encabezado de autorización
            },
            body: JSON.stringify(payLoad),
        }
        const dataApiResponde = await fecthApi(path, urlParamsObject, options)
        console.log(dataApiResponde)
        resetCartProducts();
        if (dataApiResponde.status === 'error') {
            console.log(dataApiResponde)
            actualizarRespuestaCompra(`error`);
            setTimeout(() => {
                top!.location.href = '/respuesta-compra';
            }, 1000)


        } else {
            actualizarRespuestaCompra(`Su compra se realizo con éxito!`)
            setTimeout(() => {
                top!.location.href = '/respuesta-compra';
            }, 1000)
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
        setTodos({
            ...todos,
            tyc: event.target.checked
        })
    };

    const handleCheckboxChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked2(event.target.checked);

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
                                        {/* {JSON.stringify(tokenLogin)} */}
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
                                                            checked={isChecked2}
                                                            className={styles.radioInput}
                                                            onChange={handleCheckboxChange2}
                                                        />
                                                        <span className={styles.radioCheckmark}></span>
                                                        Niubiz Pago
                                                    </label>
                                                </div>
                                                <div>
                                                    {/* <Image
                                                        src="/images/brand-culqi.svg"
                                                        className={styles.imageCulqui}
                                                        width={117}
                                                        height={36}
                                                        alt="Datos del Contacto"
                                                    /> */}
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
                                                    checked={isChecked}
                                                    onChange={handleCheckboxChange}
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
