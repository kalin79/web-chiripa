export interface ApiResponseSorteos {
    status: number;
    code: number;
    msg: string;
    data: {
        sorteos: SorteosApi[],
    }
    data_error: any[];
}

export interface ApiResponseProduct {
    status: number;
    code: number;
    msg: string;
    data: {
        product: SorteosApi,
        related_giveaways?: ApiSorteosRelacionados[],
    }
    data_error: any[];
}

export interface SorteosApi {
    id: number;
    campaign?: string;
    name?: string;
    title?: string;
    title_large?: string;
    price?: string;
    description?: string;
    slug?: string;
    fecha?: string;
    aforo?: number;
    probabilidad_ganar?: string;
    image?: string;
    imagemobile?: string;
    link?: string;
    ticket_disponibles?: string;
    titulo_tab_1?: string;
    description_tab_1?: string;
    titulo_tab_2?: string;
    description_tab_2?: string;
    titulo_tab_3?: string;
    description_tab_3?: string;
    gallery?: string[];
}

export interface ApiSorteosRelacionados {
    id: number;
    campaign: string;
    name: string;
    title: string;
    slug: string;
    fecha: string;
    aforo: number;
    probabilidad_ganar: string;
    image: string;
    imagemobile: string;
    link: string;
}