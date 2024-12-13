import { NextResponse } from 'next/server';

export async function getNiubizToken() {
    // Datos de usuario y contraseña
    const username = process.env.NEXT_PUBLIC_NIUBIZ_USERNAME;
    const password = process.env.NEXT_PUBLIC_NIUBIZ_PASSWORD;

    // console.log(username)
    // console.log(password)

    // Codificación en Base64
    const encodedAuth = Buffer.from(`${username}:${password}`).toString('base64');
    // console.log(encodedAuth)

    try {
        // Realiza la solicitud a la API de Niubiz
        const response = await fetch('https://apisandbox.vnforappstest.com/api.security/v1/security', {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${encodedAuth}`,
                'Content-Type': 'application/json',
            },
        });

        const text = await response.text(); // Obtener la respuesta como texto
        // console.log('Respuesta completa:', text);

        if (text === 'Unauthorized access') {
            return 0; // Error
        } else {
            return text
        }
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
    }
}
