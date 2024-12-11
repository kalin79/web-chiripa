// types/visanet.d.ts
declare global {
    interface Window {
        VisanetCheckout: any; // Aquí puedes usar 'any' si no tienes el tipo específico
    }
}

export { }; // Esto es necesario para que TypeScript trate este archivo como un módulo.
