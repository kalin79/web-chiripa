export interface ProductCartItem {
    id?: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
    precio?: number;
    cantidad?: number;
}

export interface CartUser {
    email: string;
    nombres: string;
    apellidos: string;
    surname?: string;
    tipo_documento: string;
    numero_documento: string;
    telefono: string;
    sub_total: string;
    total_price: string;
    status_pay: string;
    discount: string;
    sorteoListado: ProductCartItem[]
}


