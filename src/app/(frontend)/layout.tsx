"use client";

import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react";
// import type { Metadata } from "next";
import MainHeader from '@components/template/MainHeader'
import MainFooter from '@components/template/MainFooter'
import CartProvider from '@/context/CartContent'
// import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

import '@/styles/sass/global.sass'




export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const GTM_ID = 'G-Q692FSLEJN'
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://checkout.culqi.com/js/v4';
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);
    useEffect(() => {
        // Cargar el script de checkout de Niubiz
        const script = document.createElement('script');
        script.src = "https://static-content.vnforapps.com/v2/js/checkout.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        // Configurar VisanetCheckout una vez que el script esté cargado
        script.onload = () => {
            // setIsScriptLoaded(true); // Indicamos que el script se ha cargado correctamente
        };

        // Limpiar el script cuando el componente se desmonte
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <html lang="es">
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive"  >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GTM_ID}');
                `}
            </Script>
            <body>
                <SessionProvider>
                    <CartProvider>
                        <MainHeader />
                        {children}
                        <MainFooter />
                    </CartProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
