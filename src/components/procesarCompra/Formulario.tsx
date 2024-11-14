'use client'
import { useState, useContext } from 'react';
import { cartContext } from '@/context/CartContent';

import Image from 'next/image'
import styles from '@/styles/sass/compra.module.sass'

import { Poppins } from 'next/font/google'

import { formatCurrency } from "@/helpers/funciones"


const Poppins600 = Poppins({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

const Poppins400 = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const FormularioCompra = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDatos, setIsOpenDatos] = useState(false)
    const isLogin = true
    const { cartProducts, totalPriceTicket } = useContext(cartContext);
    const descuento = 0
    const email = "c.augusto.espinoza@gmail.com"
    const handlePagar = () => {
        setIsOpen(true)
    }
    const handleOpenDatos = () => {
        setIsOpenDatos(true)
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!window.Culqi) {
            alert('Culqi no está cargado');
            return;
        }
        window.Culqi.publicKey = process.env.NEXT_PUBLIC_CULQI_PUBLIC_KEY!;
        window.Culqi.settings({
            title: 'Mi Tienda',
            currency: 'PEN',
            description: 'Compra de productos',
            amount: totalPriceTicket * 100, // Monto en céntimos
        });

        window.Culqi.open();
        window.Culqi.callback = async () => {
            if (window.Culqi.token) {
                const { id: tokenId } = window.Culqi.token;

                // Llamada a la API del backend con el token
                const response = await fetch('/api/payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ tokenId, email, amount: totalPriceTicket * 100 }),
                });

                const result = await response.json();
                if (result.charge) {
                    alert('Pago exitoso');
                } else {
                    alert('Error al procesar el pago');
                }
            } else {
                alert('Pago cancelado');
            }
        };

    }
    return (
        <div className={styles.layoutContainer}>
            <div className={styles.orderContainer}>
                <div className={styles.buyContainer}>
                    <div className={styles.stepsContainer}>
                        <div className={styles.contactForm}>
                            <div className={styles.accordionLine}>
                                <p className={(isLogin && isOpenDatos) ? styles.active : ''}>1</p>
                                <div className={styles.LineUp}></div>
                            </div>
                            <div className={styles.accordionForm}>
                                <div className={styles.accordionHeader} onClick={handleOpenDatos}>
                                    <div className={styles.accordionInfo}>
                                        <h3>Datos del Contacto</h3>
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
                                    <div className={styles.FormDatos}>
                                        <div className={styles.fullWidth}>
                                            <input
                                                type="text"
                                                className={`form-control`}
                                                placeholder='Correo electrónico*'
                                            />
                                        </div>
                                        <div className={styles.fullWidth}>
                                            <h3>Información personal</h3>
                                        </div>
                                        <div className={styles.fullWidth}>
                                            <input
                                                type="text"
                                                className={`form-control`}
                                                placeholder='Nombres:*'
                                            />
                                        </div>
                                        <div className={styles.fullWidth}>
                                            <input
                                                type="text"
                                                className={`form-control`}
                                                placeholder='Apellidos:*'
                                            />
                                        </div>
                                        <div>
                                            <select
                                                className={styles.customSelect}
                                                name="tipoEvento"
                                            // value={selectedOptionTipo}
                                            // onChange={(e) => handleSelectChangeTipo(e)}
                                            >
                                                <option value="">Tipo de documento:*</option>
                                                {/* {
                                                    tiposEventos.map((tipo: any, index: number) => (
                                                        <option key={index} value={tipo.uuid}>{tipo.name}</option>
                                                    ))
                                                } */}
                                            </select>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className={`form-control`}
                                                placeholder='Número de documento:*'
                                            />
                                        </div>
                                        <div className={styles.fullWidth}>
                                            <input
                                                type="text"
                                                className={`form-control`}
                                                placeholder='Teléfono:*'
                                            />
                                        </div>
                                        <div className={styles.btnForm}>
                                            <button type='button' onClick={handlePagar} className='btnMain'>Continuar con la compra</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.paymentForm}>
                            <div className={styles.accordionLine}>
                                <p className={isOpen ? styles.active : ''}>2</p>
                                {/* <div className={styles.LineUp}></div> */}
                            </div>
                            <div className={`${styles.accordionForm}`}>
                                <div className={styles.accordionHeader}>
                                    <div className={styles.accordionInfo}>
                                        <h3 className={Poppins600.className}>Pago</h3>
                                    </div>
                                    <div className={`${styles.accordionArrow} ${isOpen ? styles.expanded : ''}`} >
                                        <Image
                                            src="/images/arrow2.svg"
                                            width={17}
                                            height={9}
                                            alt="Datos del Contacto"
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.accordionBody} ${isOpen ? styles.expandedInfo : ''}`}>
                                    <form onSubmit={handleSubmit}>
                                        <div className={styles.paymentMethod}>
                                            <div className={styles.paymentMethodOption}>
                                                <div>
                                                    <label className={`${styles.customRadio} ${Poppins400.className}`}>
                                                        <input type="checkbox" name="payment" className={styles.radioInput} />
                                                        <span className={styles.radioCheckmark}></span>
                                                        Culqui Pago
                                                    </label>
                                                </div>
                                                <div>
                                                    <Image
                                                        src="/images/brand-culqi.svg"
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
                                            <div>
                                                <label className={`custom-checkbox ${styles.customCheck}`}>
                                                    <input
                                                        type="checkbox"
                                                        id="isChecked"
                                                        name="isChecked"
                                                    // checked={isChecked}
                                                    // onChange={handleCheckboxChange}
                                                    />
                                                    <span className="checkmark"></span>
                                                    Acepto los <a href="https://s3.us-east-1.amazonaws.com/img.dechiripa.com.pe/dechiripa/politica.pdf" target='_blank'>Términos y Condiciones</a>
                                                </label>
                                            </div>
                                            <div>
                                                <label className={`custom-checkbox ${styles.customCheck}`}>
                                                    <input
                                                        type="checkbox"
                                                        id="isChecked"
                                                        name="isChecked"
                                                    // checked={isChecked}
                                                    // onChange={handleCheckboxChange}
                                                    />
                                                    <span className="checkmark"></span>
                                                    Acepto la <a href="https://s3.us-east-1.amazonaws.com/img.dechiripa.com.pe/dechiripa/politica.pdf" target='_blank'>Política de Privacidad</a>
                                                    <span> y el uso de mis datos  con fines comerciales y publicitarios</span>
                                                </label>
                                            </div>
                                            <div className={styles.btnForm}>
                                                <button type='submit' className='btnMain'>Pagar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.detailOrder}>
                    <div className={styles.detailContent}>
                        <div className={styles.headerDetailorder}>
                            <h2>Orden de Compra</h2>
                        </div>
                        <div className={styles.bodyDetailorder}>
                            <div className={styles.bodyOverflow}>
                                {
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
                                }
                            </div>
                        </div>
                        <div className={styles.PriceContent}>
                            <div>
                                <p>Subtotal</p>
                                <p>{formatCurrency(totalPriceTicket)}</p>
                            </div>
                            <div className={styles.infoDscto}>
                                <p>Descuento por primera compra </p>
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
