/** @type {import('next').NextConfig} */
// import { hostname } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
    sassOptions: {
        sourceMap: true,
        // additionalData: ``,
        // Puedes incluir otras opciones de Sass si es necesario
        silenceDeprecations: ['legacy-js-api'],
        includePaths: [path.join(__dirname, 'styles')],
    },
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000', // You can include a port if necessary
            },
            {
                protocol: 'https',
                hostname: 's3.us-east-1.amazonaws.com',
            },
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com'
            }
        ],
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
