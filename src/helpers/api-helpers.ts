export const getStrapiUrl = (path = "") => {
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`
}