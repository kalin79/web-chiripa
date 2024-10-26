export interface objUser {
    nombres: string;
    apellido_paterno: string;
    apellido_materno?: string;
    celular: string;
    email: string;
    dni: string;
    register_from: string;
    password: string;
    password_confirmation: string;
    direccion?: string;
    tyc?: boolean;
}