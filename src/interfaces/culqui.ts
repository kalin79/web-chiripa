// culqi.d.ts

interface CulqiSettings {
    title: string;
    currency: string;
    description: string;
    amount: number;
}

interface CulqiToken {
    id: string;
    email: string;
    card_number: string;
}

interface Culqi {
    publicKey: string;
    settings(options: CulqiSettings): void;
    open(): void;
    token?: CulqiToken;
    callback?: () => void;
}

// Extiende la interfaz de Window para incluir Culqi
declare global {
    interface Window {
        Culqi: Culqi;
    }
}

export { };
