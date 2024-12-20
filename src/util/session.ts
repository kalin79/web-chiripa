"use server";
import { NextResponse } from 'next/server';

export async function getResponseBuy(payload: any, token: any) {
    // const body = payload;
    const dataMerchantid = process.env.NEXT_PUBLIC_NIUBIZ_CLIENT_MERCHANTID || ''
    const endpoint = `https://apiprod.vnforapps.com/api.ecommerce/v2/ecommerce/token/session/${dataMerchantid}`;

    // console.log(payload)
    // console.log(token)
    // return false

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });


        // return false

        if (!response.ok) {
            const error = await response.json();
            return NextResponse.json({ error, message: 'Error al contactar con Niubiz' }, { status: response.status });
        }

        const data = await response.json();
        console.log(response)
        return data
        // return NextResponse.json(data);
    } catch (error) {
        console.log('kalin')
        console.error('Error:', error);
        // return NextResponse.json({ message: 'Error interno del servidor', error }, { status: 500 });
    }
}
