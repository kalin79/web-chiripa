"use server";

import qs from "qs";
import { getStrapiUrl } from "@/helpers/api-helpers";
import { dataForm } from '@/interfaces/form'


export const fecthApiNubiz = async (
    path: string,
    urlParamsObject: any,
    options?: any,
) => {

    try {
        // es para el tema de cache en seg
        const mergedOptions = {
            // next : { revalidate : 0 },
            cache: 'no-cache',
            ...options,
            headers: {
                ...options?.headers,
                "Content-Type": "application/json",
            },
        };

        const requestUrl = path;

        console.log(mergedOptions);
        const res = await fetch(requestUrl, mergedOptions);
        console.log(res)

        const data = await res.json();
        // console.log('data',data)
        // console.log({queryString})

        return data;


    } catch (error) {
        console.error(error);
        throw new Error(`Error en fetching Api! ${error}`)
    }


}

export const fecthApi = async (
    path: string,
    urlParamsObject: any,
    options?: any,
) => {

    try {
        // es para el tema de cache en seg
        const mergedOptions = {
            // next : { revalidate : 0 },
            cache: 'no-cache',
            ...options,
            headers: {
                ...options?.headers,
                "Content-Type": "application/json",
            },
        };

        const queryString = qs.stringify(urlParamsObject, {
            encodeValuesOnly: true,
        });

        const requestUrl = `${getStrapiUrl(
            `${path}${queryString ? `?${queryString}` : ""}`
        )}`;

        console.log(mergedOptions);
        const res = await fetch(requestUrl, mergedOptions);
        console.log(res)

        const data = await res.json();
        // console.log('data',data)
        // console.log({queryString})

        return data;


    } catch (error) {
        console.error(error);
        throw new Error("Error en fetching Api!")
    }


}

export const processForm = async (data: dataForm) => {
    // console.log(data)
    try {
        const respuesta = await fetch(data.url, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${data.token}`,
                "Content-Type": "application/json",
            },
            body: data.dataForm,
        })
        const res = await respuesta.json()
        return res;
    } catch (err) {
        throw err
    }
};

export const processApi = async (data: dataForm) => {
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.url}`)
    try {
        const respuesta = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.url}`, {
            method: 'GET',
            headers: {
                "Authorization-secret": `${data.token}`,
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "Pragma": "no-cache" // Compatibilidad con navegadores más antiguos
            },
            cache: "no-store", // Evita el uso de caché
        })
        const res = await respuesta.json()
        console.log(res)
        return res;
    } catch (err) {
        throw err
    }
};



// export const updateForm = async (data: dataForm) => {

// }

// export const deleteForm = async (data: dataForm) => {

// }