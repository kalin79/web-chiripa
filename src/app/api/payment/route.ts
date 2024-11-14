// app/api/payment/route.ts
import { NextResponse } from 'next/server';
import Culqi from 'culqi-node';

const culqi = new Culqi({ apiKey: process.env.CULQI_SECRET_KEY as string });

export async function POST(request: Request) {
    try {
        const { tokenId, email, amount } = await request.json();

        const charge = await culqi.charges.create({
            amount, // en céntimos, por ejemplo, 1000 para S/ 10.00
            currency_code: 'PEN',
            email,
            source_id: tokenId,
        });

        return NextResponse.json({ charge });
    } catch (error: any) {
        return NextResponse.json(
            { message: 'Error al procesar el pago', error: error.message },
            { status: 500 }
        );
    }
}
