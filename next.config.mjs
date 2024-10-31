/** @type {import('next').NextConfig} */
import path from 'path';
import { createRequire } from 'module';

// Crea una instancia del requerimiento para cargar Sass
const require = createRequire(import.meta.url);
const sass = require('sass');

const nextConfig = {
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
