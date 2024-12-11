/** @type {import('next').NextConfig} */
import path from 'path';
import { createRequire } from 'module';

// Crea una instancia del requerimiento para cargar Sass
const require = createRequire(import.meta.url);
const sass = require('sass');

const securityHeaders = [
    {
        key: "Content-Security-Policy",
        value: `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://trusted-scripts.com https://www.googletagmanager.com https://www.google.com.pe;
        img-src 'self' data: https://trusted-images.com;
        style-src 'self' 'unsafe-inline';
        connect-src 'self';
        font-src 'self' https://fonts.gstatic.com;
        frame-src 'self';
      `.replace(/\n/g, ""), // Elimina los saltos de línea para compatibilidad
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains; preload",
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block",
    },
    {
        key: "X-Frame-Options",
        value: "DENY",
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "Permissions-Policy",
        value: "geolocation=(), microphone=(), camera=()",
    },
];


const nextConfig = {
    async headers() {
        return [
            {
                // Aplica las cabeceras de seguridad a todas las rutas
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
    sassOptions: {
        implementation: sass,
        sourceMap: true,
        // additionalData: ``,
        // Puedes incluir otras opciones de Sass si es necesario
        silenceDeprecations: ['legacy-js-api'],
    },
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp']
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        })
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve('src'),
        }
        return config;
    },


};
export default nextConfig;
