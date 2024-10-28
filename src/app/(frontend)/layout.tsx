import type { Metadata } from "next";
import MainHeader from '@components/template/MainHeader'
import MainFooter from '@components/template/MainFooter'
// import { GoogleTagManager } from '@next/third-parties/google'

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

import '@/styles/sass/global.sass'

export const metadata: Metadata = {
    title: "De Chriripa",
    description: "Regístrate y obtén tu usuario. Pronto multiplicarás tu suerte.",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>
                <MainHeader />
                {children}
                <MainFooter />
            </body>
        </html>
    );
}
