/** @type {import('next').NextConfig} */
import path from 'path';


const nextConfig = {
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
    sassOptions: {
        includePaths: [path.join('styles')],
    },


};
export default nextConfig;
