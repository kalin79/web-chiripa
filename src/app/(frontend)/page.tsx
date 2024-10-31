import { Metadata } from 'next'
import BannerMain from "@components/banner/BannerMain"
import HomeMain from "@components/home/Home"




export const metadata: Metadata = {
    title: 'Registro de Usuario - DeChiripa',
    description: 'Regístrate y obtén tu usuario. Las probabilidades de ganar juegan a tu favor.',
    openGraph: {
        title: 'Registro de Usuario - DeChiripa',
        description: 'Regístrate y obtén tu usuario. Las probabilidades de ganar juegan a tu favor.',
        url: 'https://dechiripa.com.pe/',
        siteName: 'DeChiripa',
        images: [
            {
                url: 'https://s3.us-east-1.amazonaws.com/img.dechiripa.com.pe/dechiripa/facebook.png',
                width: 800,
                height: 492,
                alt: 'Regístrate y obtén tu usuario. Las probabilidades de ganar juegan a tu favor.',
            },
        ],
        locale: 'es_ES',
        type: 'website',
    }
}
const Home = () => {

    return (
        <>
            <BannerMain />
            <HomeMain />
        </>
    )
}

export default Home
