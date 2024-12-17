'use client'
import { useEffect } from 'react';


import ParePage from "@/components/construccion/Pare"


const Home = () => {


    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
    }, []);
    return (
        <div className='scrollOverflow'>
            <ParePage />

        </div>
    )
}

export default Home
