import type { Metadata } from "next";
import MainHeader from '@components/template/MainHeader'
import MainFooter from '@components/template/MainFooter'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

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
    let GTM_ID = 'G-Q692FSLEJN'
    return (
        <html lang="es">
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive"  >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GTM_ID}');
                `}
            </Script>
            <body>
                <MainHeader />
                {children}
                <MainFooter />
            </body>
        </html>
    );
}
