// app/api/get-ip/route.ts
export async function GET(request: Request) {
    // Obtener la IP del encabezado x-forwarded-for, que es común cuando hay proxies o balanceadores de carga
    const ip = request.headers.get('x-forwarded-for') || 'IP no disponible';

    return new Response(JSON.stringify({ ip }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
