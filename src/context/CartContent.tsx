"use client"

import { useState, createContext, useEffect } from "react";
import { ProductCartItem } from "@/interfaces/cart"


// interface ProductCart {
//     id: number;
//     title: string;
//     price: number;
//     quantity: number;
//     image: string;
// }

// interface ProductCartItem {
//     id: number;
//     title: string;
//     price: number;
//     quantity: number;
//     image: string;
// }

interface ProductCartContext {
    cartProducts: ProductCartItem[];
    addCartProducts: (product: ProductCartItem) => void;
    deleteCartProducts: (product: ProductCartItem) => void;
    productActive: ProductCartItem;
    deleteCartActive: () => void;
    increaseQuantity: (value: number) => void;
    decreaseQuantity: (value: number) => void;
    totalQuantityTicket: number;
    totalPriceTicket: number;
    totalProducts: number;
    boolBolsa: boolean;
    CloseCartPopup: (value: boolean) => void;
}

interface Props {
    children: React.ReactNode;
}

const initProduct = {
    id: 0,
    title: '',
    price: 0,
    quantity: 0,
    image: ''
}

export const cartContext = createContext({} as ProductCartContext);

const CartProvider = ({ children }: Props) => {
    const [cartProducts, setCartProducts] = useState<ProductCartItem[]>([])
    const [productActive, setProductActive] = useState<ProductCartItem>(initProduct)
    const [timerActive, setTimerActive] = useState<NodeJS.Timeout | null>(null); // Para manejar el identificador del temporizador
    const [boolBolsa, setBoolBolsa] = useState(false);

    useEffect(() => {
        // Cargar el estado desde Local Storage al montar
        const storedCarrito = localStorage.getItem('carrito');
        if (storedCarrito) {
            setCartProducts(JSON.parse(storedCarrito));
        }
    }, []);

    useEffect(() => {
        // Guardar el estado en Local Storage cuando cambie
        // console.log('entrenamiento',curso)

        if (cartProducts) {
            localStorage.setItem('carrito', JSON.stringify(cartProducts));
        } else {
            localStorage.removeItem('curso');
        }
    }, [cartProducts]);

    const addCartProducts = ({ id, title, price, quantity, image }: ProductCartItem) => {

        setProductActive({ id, title, price, quantity, image })

        const newTimer = setTimeout(() => {
            deleteCartActive()
        }, 5000);

        if (timerActive) {
            clearTimeout(timerActive);
        }
        // Guardar el identificador del temporizador
        setTimerActive(newTimer);

        if (cartProducts.length === 0) {
            return setCartProducts([{ id, title, price, quantity, image }])
        }

        const productExist = cartProducts.find(product => product.id === id)

        if (!productExist) {
            return setCartProducts(
                [...cartProducts,
                { id, title, price, quantity, image }
                ])
        }

        setCartProducts(
            cartProducts.map(item => {
                if (item.id === id) {
                    return { ...item, quantity }
                } else {
                    return item
                }
            })
        )
    }

    const deleteCartProducts = ({ id }: ProductCartItem) => {
        // console.log(id)
        setCartProducts([
            ...cartProducts.filter((i) => i.id != id)
        ])
    }

    const CloseCartPopup = (value: boolean) => {
        const _body = document.querySelector('body')
        if (value) {
            if (_body) {
                _body.style.overflow = 'hidden';
            }
        } else {
            if (_body) {
                _body.style.overflow = 'auto';
            }
        }


        setBoolBolsa(value)

    }

    const increaseQuantity = (id: number) => {
        setCartProducts(
            cartProducts.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            })
        )
    }

    const decreaseQuantity = (id: number) => {

        if (cartProducts.find((item) => item.id === id)?.quantity === 1) {
            return true
            // return setCartProducts(cartProducts.filter((item) => item.id !== id))
        }

        setCartProducts(
            cartProducts.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            })
        )
    }

    const deleteCartActive = () => {
        setProductActive({
            id: 0,
            title: '',
            price: 0,
            quantity: 0,
            image: '',
        })
    }

    const totalQuantityTicket = cartProducts.reduce((acc, item) => acc + item.quantity, 0)
    const totalPriceTicket = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const totalProducts = cartProducts.length
    return (
        <cartContext.Provider value={{ cartProducts, addCartProducts, totalQuantityTicket, totalPriceTicket, totalProducts, productActive, deleteCartActive, increaseQuantity, decreaseQuantity, CloseCartPopup, boolBolsa, deleteCartProducts }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider