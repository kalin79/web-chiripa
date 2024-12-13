export interface ApiObjectHome {
    status: number;
    code: number;
    msg: string;
    data: DataHome;
    data_error: any[];
}

interface DataHome {
    banners: Banner[];
    link_transmision: Linktransmision;
    beneficios: Beneficios;
    acerca_de_chiripa: Acercadechiripa;
    sorteos: Sorteo[];
}

interface Sorteo {
    id: number;
    campaign: string;
    name: string;
    title: string;
    slug: string;
    fecha: null | string;
    aforo: number;
    probabilidad_ganar: string;
    image: string;
    imagemobile: string;
    link: string;
}

interface Acercadechiripa {
    titulo: string;
    descripcion_corta: string;
}

interface Beneficios {
    titulo: string;
    descripcion_corta: null;
    descripcion: string;
}

interface Linktransmision {
    titulo: string;
    descripcion_corta: null;
    descripcion: null;
}

interface Banner {
    id: number;
    title: string;
    image: string;
    imagemobile: string;
    link: string;
}