'use client'; // Asegura que este componente se ejecute solo en el cliente
import { useEffect } from 'react';

const NiubizCheckout = () => {
    useEffect(() => {
        // Cargar el script de checkout de Niubiz
        const script = document.createElement('script');
        script.src = "https://static-content-qas.vnforapps.com/v2/js/checkout.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        // Configurar VisanetCheckout una vez que el script esté cargado
        script.onload = () => {
            if (typeof window !== "undefined" && window.VisanetCheckout) {
                window.VisanetCheckout.configure({
                    sessiontoken: '67cf73735f83590eabf1382ff49e5e08b261976326c6897cb764fd160a15a8ca',
                    channel: 'web',
                    merchantid: '341198210',
                    purchasenumber: 2020100901,
                    amount: 10.5,
                    expirationminutes: '20',
                    timeouturl: 'about:blank',
                    merchantlogo: 'img/comercio.png',
                    formbuttoncolor: '#000000',
                    action: 'paginaRespuesta',
                    complete: (params: any) => {
                        console.log("Payment Completed:", params);
                        // Llamar a la función procesar si es necesario
                        procesar(params);
                    }
                });
            }
        };

        // Limpiar el script cuando el componente se desmonte
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Función que se ejecuta cuando la transacción se completa
    const procesar = (parametros: any) => {
        console.log('Parametros del pago:', parametros);
    };

    return (
        <div>
            <button onClick={() => window.VisanetCheckout.open()}>
                Pagar con Niubiz
            </button>
        </div>
    );
};

export default NiubizCheckout;
