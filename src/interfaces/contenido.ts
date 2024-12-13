export interface ObjApiConfig {
    status: number;
    code: number;
    msg: string;
    data: DataConfig;
    data_error: any[];
}


export interface ObjApiFaq {
    id: number;
    pregunta: string;
    respuesta: string;
}

interface DataConfig {
    terminosCondiciones?: {
        titulo?: string;
        descripcion?: string;
    };
    politicas?: {
        titulo?: string;
        descripcion?: string;
    };
    reglamento?: {
        titulo?: string;
        descripcion?: string;
    };
    contenido_principal?: {
        titulo?: string;
        descripcion?: string;
        descripcion_corta?: string;
    };
    mision?: {
        titulo?: string;
        descripcion?: string;
    };
    vision?: {
        titulo?: string;
        descripcion?: string;
    }
    valores?: [
        {
            id?: number;
            titulo?: string;
            descripcion?: string;
        }
    ]

}